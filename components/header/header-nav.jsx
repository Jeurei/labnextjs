import { breakpointsMap } from 'constants/styles';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderNavItem from './header-nav-item';
import { useHeaderContext } from './header';

const HeaderNav = ({ isTop }) => {
  const HEADER_ELEMENTS_WIDTH = 700;
  const {
    nav: { navArr, setNavArr, slideArr, setSlideArr },
  } = useHeaderContext();

  const setNavs = () => {
    setSlideArr([
      ...slideArr,
      ...navArr.slice(navArr.length - 1, navArr.length),
    ]);
    setNavArr(navArr.slice(0, navArr.length - 1));
  };

  useEffect(() => {
    if (
      document.querySelector('.header').offsetWidth - HEADER_ELEMENTS_WIDTH <
      [...document.querySelectorAll('.header__nav-item')]
        .map((el) => el.offsetWidth + 28)
        .reduce((acc, el) => acc + el)
    ) {
      setNavs();
    }
  }, [navArr]);

  return (
    <nav
      className="header__nav-container"
      css={css`
        position: relative;
        display: none;
        height: ${isTop ? '60px' : '100%'};
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
      {navArr.map((el) => (
        <HeaderNavItem isTop={isTop} data={el} />
      ))}
    </nav>
  );
};

HeaderNav.propTypes = {
  isTop: PropTypes.bool.isRequired,
};

export default HeaderNav;
