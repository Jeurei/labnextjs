import { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-motion-drawer';
import { css, keyframes } from '@emotion/react';
import SubmenuButton from './submenu-button';
import SubMenuBack from './submenu-back';

const SubMenu = ({ data, zIndex, subMenuTitle, root }) => {
  const ANIMATION_DURATION = 0.5;
  const [subMenuState, setSubMenuState] = useState(false);
  const [subMenuOpened, setSubMenuOpened] = useState(false);
  const [shouldBeDeleted, setShouldBeDeleted] = useState(false);

  const openHandler = () => {
    setSubMenuState(true);

    setTimeout(() => {
      setSubMenuOpened(true);
    }, 1);
  };

  const onChangeHandler = (bool) => {
    setSubMenuState(bool);
    setSubMenuOpened(bool);
  };

  const closeHandler = () => {
    setShouldBeDeleted(true);

    setTimeout(() => {
      setSubMenuState(false);
      setSubMenuOpened(false);
      setShouldBeDeleted(false);
    }, ANIMATION_DURATION * 1000);
  };

  const closingAnimation = keyframes`
    100%{
      transform: translateX(100%);
    }
  `;

  return (
    <>
      <SubmenuButton
        action={() => {
          openHandler();
        }}
        label={`Открыть подменю пункта ${data.text}`}
      />

      {subMenuState && (
        <Drawer
          open={subMenuOpened}
          noTouchOpen
          noTouchClose
          right
          className="nav__menu-container nav__menu-container--submenu"
          overlayClassName="nav__overlay nav__overlay--submenu"
          overlayColor="rgba(0, 0, 0, 0)"
          onChange={onChangeHandler}
          zIndex={zIndex + 1}
          css={
            shouldBeDeleted &&
            css`
              animation: ${closingAnimation} ${ANIMATION_DURATION}s ease-in-out;
            `
          }
        >
          <SubMenuBack action={closeHandler} title={subMenuTitle} />
          <ul className="nav__list">
            {data.map((el) => (
              <li className="nav__item">
                <a
                  href={`${root}${el.link}`}
                  className="nav__link"
                  aria-label="Ссылка на страницу услуг"
                >
                  {el.text}
                </a>
                {el.children && (
                  <SubMenu
                    zIndex={zIndex}
                    subMenuTitle={data.text}
                    data={el.children}
                  />
                )}
              </li>
            ))}
          </ul>
        </Drawer>
      )}
    </>
  );
};

SubMenu.defaultProps = {
  zIndex: 10000,
  children: false,
};

SubMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      children: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.object),
      ]),
    }).isRequired,
  ).isRequired,
  zIndex: PropTypes.number,
  subMenuTitle: PropTypes.string.isRequired,
  root: PropTypes.string.isRequired,
};

export default SubMenu;
