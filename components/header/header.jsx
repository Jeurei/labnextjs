import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentCity } from 'Redux/actions/actions';
import { bindActionCreators } from 'redux';
import SearchModal from './search-modal';
import CitiesModal from './cities-modal';
import Cart from './cart';
import HeaderMobileTop from './header-mobile-top';
import HeaderMobileBottom from './header-mobile-bottom';

const headerContext = React.createContext();

export const useHeaderContext = () => {
  return useContext(headerContext);
};

const Header = ({ cities, setCity, cart, routes }) => {
  const HEADER_MIN_HEIGHT = 126;
  const animationDuration = 0.7;
  const headerAnimationDuration = 0.2;
  const MAX_MOBILE_WIDTH = 720;
  const [isSearchModalOpen, setSearhModalOpen] = useState(false);
  const [isBottomHeaderShown, setBottomHeaderHidden] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [citiesModalState, setCitiesModalState] = useState(false);
  const [navArray, setNavArray] = useState(Object.values(routes));
  const [slideMenuArr, setSlideMenuArr] = useState([]);
  const [isMobile, setMobile] = useState(false);

  const deleteElement = () => {
    setDeleting(true);

    setTimeout(() => {
      setSearhModalOpen(false);
      setDeleting(false);
    }, animationDuration * 1000 - 550);
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
    }, animationDuration * 1000 - 500);
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

  const resizeHandler = () => {
    if (window.innerWidth < MAX_MOBILE_WIDTH) {
      setMobile(true);
    } else {
      setMobile(false);
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

  const removeListener = () => {
    window.removeEventListener('scroll', hideBottomHeader);
    window.removeEventListener('scroll', showBottomHeader);
  };

  useEffect(() => {
    switchWindowListeners();

    return () => {
      removeListener();
    };
  }, [isBottomHeaderShown]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    switchWindowListeners();

    return () => {
      removeListener();
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
          <HeaderMobileBottom
            isHidden={isHidden}
            headerBottomState={isBottomHeaderShown}
            animationDuration={headerAnimationDuration}
            openSearch={
              isSearchModalOpen ? deleteElement : searchButtonClickHandler
            }
          />
        ) : (
          <HeaderMobileTop
            isHidden={isHidden}
            animationDuration={headerAnimationDuration}
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
