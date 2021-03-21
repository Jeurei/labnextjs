import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { breakpointsMap } from 'constants/styles';
import Link from 'next/link';
import { usePageContext } from 'components/MainLayout';
import Menu from './menu';
import HeaderTopLeft from './header-top-left';
import HeaderTopRight from './header-top-right';
import HeaderNav from './header-nav';

const HeaderMobileTop = ({ openSearch, isHidden, animationDuration }) => {
  const onClickFormHandler = usePageContext();

  const showingAnimation = keyframes`
  0% {
    opacity: 0;
    min-height: 0;
    height: 0;
  }

  70%{
    min-height: 126px;
    height: 126px;
  }

  100% {
    opacity: 1;
  }
  `;

  const hidingAnimation = keyframes`
  0% {
    min-height:126px;
    height:126px;
    opacity:1;
  }

  100% {
    padding-top:0;
    min-height:0;
    height:0;
    padding-bottom: 0;
    opacity:0;
  }
  `;

  const opacityAnimation = keyframes`

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
  `;

  const opacityAnimationHidden = keyframes`

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
  `;

  return (
    <div
      className="header__top-container"
      css={
        isHidden
          ? css`
              animation: ${hidingAnimation} ${animationDuration}s forwards
                ease-in-out;
            `
          : css`
              animation: ${showingAnimation} ${animationDuration}s forwards
                ease-in-out;
            `
      }
    >
      <div
        className="header__inner"
        css={
          isHidden
            ? css`
                animation: ${opacityAnimationHidden} 0.1s forwards ease-in-out;
              `
            : css`
                animation: ${opacityAnimation} 0.1s forwards ease-in-out;
              `
        }
      >
        <div
          className="header__top header-top"
          css={css`
            flex-wrap: wrap;
            padding-bottom: 0;
          `}
        >
          <div
            css={css`
              display: flex;
              width: 100%;
              padding-top: 8px;
              padding-bottom: 12.5px;
            `}
          >
            <HeaderTopLeft />
            <HeaderTopRight openSearch={openSearch} />
          </div>
          <div
            className="header-bottom__left"
            css={css`
              display: none;
              width: 100%;
              padding: 0;
              padding-top: 10px;
              padding-bottom: 6px;

              ${breakpointsMap.TABLET} {
                position: relative;
                display: flex;
                padding-right: 10px;
                padding-left: 10px;
                border-top: 1px solid rgba(112, 112, 112, 0.2);
              }
            `}
          >
            <Link
              href="/"
              css={css`
                display: flex;
                align-items: center;
                margin-right: auto;
              `}
            >
              <a
                css={css`
                  margin-right: auto;
                `}
              >
                <Logo
                  className="header-bottom__mobile-top-img"
                  width="230"
                  height="34"
                  alt="Логотип компании Лабдиагностика"
                />
              </a>
            </Link>
            <HeaderNav isTop />
            <div className="header-bottom__right">
              <a
                href="some"
                className="nav__button button"
                aria-label="Ссылка на страницу для записи к врачу, или попап если скрипт работает"
                onClick={(evt) => {
                  evt.preventDefault();
                  onClickFormHandler(true);
                }}
              >
                Записаться к врачу
              </a>
            </div>
            <Menu />
          </div>

          <div
            css={css`
              display: flex;
              width: 100%;
              padding-top: 0;

              ${breakpointsMap.TABLET} {
                display: none;
              }
            `}
          >
            <Link
              href="/"
              css={css`
                display: flex;
                align-items: center;
                margin-right: auto;
              `}
            >
              <a
                css={css`
                  margin-right: auto;
                `}
              >
                <Logo width="222px" height="33px" />
              </a>
            </Link>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderMobileTop.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  animationDuration: PropTypes.number.isRequired,
  openSearch: PropTypes.func.isRequired,
};

export default HeaderMobileTop;
