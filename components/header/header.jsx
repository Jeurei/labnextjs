import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentCity } from 'Redux/actions/actions';
import { bindActionCreators } from 'redux';
import dynamic from 'next/dynamic';
import Loader from 'common/loader';
import HeaderTop from './header-top';
import HeaderBottom from './header-bottom';

const headerContext = React.createContext();

export const useHeaderContext = () => {
  return useContext(headerContext);
};

const SearchModal = dynamic(import('./search-modal'), {
  loading: () => <Loader />,
});

const CitiesModal = dynamic(import('./cities-modal'), {
  loading: () => <Loader />,
});

const Cart = dynamic(import('./cart'), {
  loading: () => <Loader />,
});

const Header = ({ cities, setCity, cart, routes }) => {
  const HEADER_MIN_HEIGHT = 126;
  const animationDuration = 0.7;
  const HEADER_ANIMATION_DURATION = 0.2;
  const MS_PER_S = 1000;
  const ANIMATION_DIFF = 550;

  const [isSearchModalOpen, setSearhModalOpen] = useState(false);
  const [isBottomHeaderShown, setBottomHeaderHidden] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [citiesModalState, setCitiesModalState] = useState(false);
  const [navArray, setNavArray] = useState(Object.values(routes));
  const [slideMenuArr, setSlideMenuArr] = useState([]);

  const getAnimationDelay = () => animationDuration * MS_PER_S - ANIMATION_DIFF;

  const deleteElement = () => {
    setDeleting(true);

    setTimeout(() => {
      setSearhModalOpen(false);
      setDeleting(false);
    }, getAnimationDelay());
  };

  const onWheelEventHandler = () => {
    window.removeEventListener('scroll', onWheelEventHandler);
    deleteElement();
  };

  const searchButtonClickHandler = () => {
    setSearhModalOpen(true);

    window.addEventListener('scroll', onWheelEventHandler);
  };

  const switchHeaderBottom = (bool) => {
    setHidden(bool);

    setTimeout(() => {
      setBottomHeaderHidden(bool);
    }, getAnimationDelay());
  };

  const hideBottomHeader = () => {
    if (window.scrollY < HEADER_MIN_HEIGHT && isBottomHeaderShown) {
      switchHeaderBottom(false);
    }
  };

  const showBottomHeader = () => {
    if (window.scrollY > HEADER_MIN_HEIGHT && !isBottomHeaderShown) {
      switchHeaderBottom(true);
    }
  };

  const switchWindowListeners = () => {
    if (!isBottomHeaderShown) {
      window.removeEventListener('scroll', hideBottomHeader);
      window.addEventListener('scroll', showBottomHeader);
    } else {
      window.addEventListener('scroll', hideBottomHeader);
      window.removeEventListener('scroll', showBottomHeader);
    }
  };

  const removeListeners = () => {
    window.removeEventListener('scroll', hideBottomHeader);
    window.removeEventListener('scroll', showBottomHeader);
  };

  useEffect(() => {
    switchWindowListeners();

    return () => {
      removeListeners();
    };
  }, [isBottomHeaderShown]);

  useEffect(() => {
    switchWindowListeners();

    return () => {
      removeListeners();
    };
  }, []);

  const headerHandlers = {
    cities: {
      state: citiesModalState,
      onCitiesClickHandler: () => setCitiesModalState(!citiesModalState),
      onClickClosePopupHandler: () => setCitiesModalState(false),
    },
    cart: {
      state: cartModal,
      onClickHandler: () => setCartModal(!cartModal),
      onCloseClickHandler: () => setCartModal(false),
    },
    nav: {
      source: Object.values(routes),
      navArr: navArray,
      setNavArr: setNavArray,
      slideArr: slideMenuArr,
      setSlideArr: setSlideMenuArr,
    },
  };

  return (
    <header className="header">
      {isSearchModalOpen && (
        <SearchModal
          isDeleting={isDeleting}
          animationDuration={animationDuration}
          deleteElement={deleteElement}
        />
      )}
      <headerContext.Provider value={headerHandlers}>
        {isBottomHeaderShown ? (
          <HeaderBottom
            isHidden={isHidden}
            headerBottomState={isBottomHeaderShown}
            animationDuration={HEADER_ANIMATION_DURATION}
            openSearch={
              isSearchModalOpen ? deleteElement : searchButtonClickHandler
            }
          />
        ) : (
          <HeaderTop
            isHidden={isHidden}
            animationDuration={HEADER_ANIMATION_DURATION}
            openSearch={
              isSearchModalOpen ? deleteElement : searchButtonClickHandler
            }
          />
        )}
        {citiesModalState && (
          <CitiesModal
            citiesData={cities}
            closeHandler={headerHandlers.cities.onClickClosePopupHandler}
            setCurrentCity={setCity}
            modalState={citiesModalState}
          />
        )}
        {cartModal && (
          <Cart
            cartData={cart}
            closeHandler={headerHandlers.cart.onCloseClickHandler}
          />
        )}
      </headerContext.Provider>
    </header>
  );
};

Header.propTypes = {
  cities: PropTypes.shape({
    currentCity: PropTypes.string,
    list: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  setCity: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
  routes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { cart, cities } = state;
  const {
    routes: { routes },
  } = state;

  return { cities, cart, routes };
};

const mapDispatchToProps = (dispatch) => ({
  setCity: bindActionCreators(setCurrentCity, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
