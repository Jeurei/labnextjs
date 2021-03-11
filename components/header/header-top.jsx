import PropTypes from 'prop-types';
import HeaderInner from 'containers/header-inner';
import { css } from '@emotion/react';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { breakpointsMap } from 'constants/styles';
import Menu from './menu';
import HeaderTopLeft from './header-top-left';
import HeaderTopRight from './header-top-right';

const HeaderTop = ({ openSearch }) => (
  <div className="header__top-container">
    <HeaderInner>
      <div
        className="header__top header-top"
        css={css`
          flex-wrap: wrap;
        `}
      >
        <HeaderTopLeft />
        <HeaderTopRight openSearch={openSearch} />
        <div
          css={css`
            display: flex;
            width: 100%;
            padding-top: 12px;

            ${breakpointsMap.TABLET} {
              display: none;
            }
          `}
        >
          <Logo
            width="222px"
            height="33px"
            css={css`
              margin-right: auto;
            `}
          />
          <Menu />
        </div>
      </div>
    </HeaderInner>
  </div>
);

HeaderTop.propTypes = {
  openSearch: PropTypes.func.isRequired,
};

export default HeaderTop;
