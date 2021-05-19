import { breakpointsMap } from 'constants/styles';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderNavItem from './header-nav-item';
import { useHeaderContext } from './header';

const HeaderNav = ({ isTop }) => {
  const HEADER_ELEMENTS_WIDTH = 700;
  const {
    nav: { navArr, setNavArr, slideArr, setSlideArr, source },
  } = useHeaderContext();

  const setNavs = () => {
    setSlideArr([
      ...slideArr,
      ...navArr.slice(navArr.length - 1, navArr.length),
    ]);
    setNavArr(navArr.slice(0, navArr.length - 1));
  };

  const setMobileNav = () => {
    setSlideArr([...source]);
  };

  useEffect(() => {
    if (
      window.innerWidth >= 1210 &&
      document.querySelector('.header').offsetWidth - HEADER_ELEMENTS_WIDTH <
        [...document.querySelectorAll('.header__nav-item')]
          .map((el) => el.offsetWidth)
          .reduce((acc, el) => acc + el)
    ) {
      setNavs();
    }
  }, [navArr]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1210) {
        setMobileNav();
      } else {
        setNavs();
      }
    });

    if (window.innerWidth < 1210) {
      setMobileNav();
    }
  }, []);

  return (
    <nav
      className="header__nav-container"
      css={css`
        display: none;
        height: ${isTop ? '70px' : '100%'};
        flex-direction: row;
        flex-grow: 1;
        padding: 0;
        padding-right: 30px;
        margin: 0;
        list-style: none;

        ${breakpointsMap.DESKTOP} {
          display: flex;
          justify-content: space-between;
        }
      `}
    >
      <ul
        css={css`
          padding: 0;
          margin-top: 0;
          margin-bottom: 0;
          list-style: none;
          display: flex;
          width: 100%;
          justify-content: space-between;
        `}
      >
        {navArr.map((el) => (
          <HeaderNavItem isTop={isTop} data={el} key={el.name} />
        ))}
      </ul>
    </nav>
  );
};

HeaderNav.propTypes = {
  isTop: PropTypes.bool.isRequired,
};

export default HeaderNav;
