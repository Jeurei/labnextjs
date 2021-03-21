import React, { useState } from 'react';
import Drawer from 'react-motion-drawer';
import CrossButton from 'common/crossButton';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavItem from './nav-item';
import { useHeaderContext } from './header';

const Menu = ({ burger }) => {
  const [menuState, setMenuState] = useState(false);

  const closeHandler = () => {
    setMenuState(false);
  };
  const {
    nav: { slideArr },
  } = useHeaderContext();

  const navArr = [...slideArr, ...Object.values(burger)];

  return (
    <>
      {navArr.length !== 0 && (
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
              {navArr.map((el) => (
                <NavItem data={el} />
              ))}
            </ul>
          </Drawer>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    routes: { burger },
  } = state;

  return { burger };
};

Menu.propTypes = {
  burger: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Menu);
