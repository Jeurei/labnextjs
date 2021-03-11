import React, { useState } from 'react';
import Drawer from 'react-motion-drawer';
import CrossButton from 'common/crossButton';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavItem from './nav-item';

const Menu = ({ routes }) => {
  const [menuState, setMenuState] = useState(false);
  const closeHandler = () => {
    setMenuState(false);
  };

  const router = useRouter();
  // router.events.on('routeChangeComplete', () => {
  //   setMenuState(false);
  // });

  return (
    <>
      <button
        className="header-bottom__burger-button-container"
        aria-label="Равернуть меню"
        type="button"
        onClick={() => setMenuState(!menuState)}
      >
        <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--1" />
        <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--2" />
        <div className="header-bottom__mobile-burger-bar header-bottom__mobile-burger-bar--3" />
      </button>
      <Drawer
        open={menuState}
        right
        className="nav__menu-container"
        overlayClassName="nav__overlay"
      >
        <CrossButton
          buttonClass="nav__close-buttom"
          label="Закрыть меню"
          action={closeHandler}
        />
        <ul className="nav__list">
          {Object.values(routes).map((el) => (
            <NavItem data={el} />
          ))}
        </ul>
      </Drawer>
    </>
  );
};

Menu.propTypes = {
  routes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  const { routes } = state;

  return { routes };
};

export default connect(mapStateToProps, null)(Menu);
