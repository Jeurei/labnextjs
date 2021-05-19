import React, { useState, useEffect } from 'react';
import { css, useTheme, keyframes } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routesConstants from 'constants/routes';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { ReactComponent as SmallLogo } from 'icons/small-logo.svg';
import { ReactComponent as MarkMapIcon } from 'icons/map-mark-icon.svg';
import { ReactComponent as MailIcon } from 'icons/mail.svg';
import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';

import SearchButton from 'common/searchButton';
import { breakpointsMap } from 'constants/styles';
import { usePageContext } from 'components/MainLayout';
import Menu from './menu';
import { useHeaderContext } from './header';
import HeaderNav from './header-nav';

// import Burger from 'common/burger';

const HeaderMobileBottom = ({
  isHidden,
  cart,
  openSearch,
  animationDuration,
}) => {
  const MOBILE_MAX_WIDTH = 720;
  const [isMobile, setMobile] = useState(false);
  const onClickFormHandler = usePageContext();
  const router = useRouter();
  const {
    cities: { onCitiesClickHandler },
    cart: { onClickHandler },
  } = useHeaderContext();

  const theme = useTheme();

  const resizeHandler = () => {
    if (window.innerWidth < MOBILE_MAX_WIDTH) {
      setMobile(true);
    } else if (isMobile) {
      setMobile(false);
    }
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return window.removeEventListener('resize', resizeHandler);
  }, []);

  const showingAnimation = keyframes`
  0% {
    min-height:0;
    height:0;
    opacity:0;
  }

  100% {
    min-height: ${isMobile ? '54px' : '64px'};
    height:${isMobile ? '54px' : '64px'};
    opacity:1;
  }
  `;

  const hidingAnimation = keyframes`
  0% {
    min-height:${isMobile ? '54px' : '64px'};
    height:${isMobile ? '54px' : '64px'};
    opacity:1;
    display:none;
  }

  100% {
    display:none;
    min-height:0px;
    height:0px;
    opacity:0;
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
      className="header__bottom-container"
      css={
        !isHidden
          ? css`
              animation: ${hidingAnimation} ${animationDuration}s forwards
                ease-in-out;
            `
          : css`
              animation: ${showingAnimation} ${animationDuration + 0.05}s
                forwards ease-in-out;
            `
      }
    >
      <div className="header__inner">
        <div
          className="header__bottom header-bottom"
          css={css`
            .header-bottom__burger-button-container {
              align-self: center;
              padding-top: 7px;
              padding-bottom: 6px;

              ${breakpointsMap.TABLET} {
                margin-left: 20px;
              }
            }
          `}
        >
          <div className="header-bottom__mobile">
            <Link href="/">
              <a
                css={css`
                  margin-right: 20px;
                `}
              >
                <SmallLogo width="28px" height="34px" />
              </a>
            </Link>
            <div
              css={css`
                position: relative;

                .header-top__left-icon--cities {
                  top: 3px;
                  left: -10px;
                }
              `}
            >
              <div
                className="cities"
                css={css`
                  margin-right: auto;

                  &:after {
                    top: 5px;
                    right: -10px;
                  }
                `}
              >
                <a
                  href="some"
                  className="cities__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onCitiesClickHandler();
                  }}
                >
                  <span className="cities__city">Пермь</span>
                  {/* <span className="cities__city">{cities.currentCity}</span> */}
                </a>
              </div>
              <MarkMapIcon
                className="header-top__left-icon header-top__left-icon--cities"
                width="6.6"
                height="9.3"
                stroke="currentColor"
                fill="currentColor"
              />
            </div>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;

              ${breakpointsMap.TABLET} {
                display: none;
              }
            `}
          >
            <a
              href="/"
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${theme.colors.colorText.hex};

                &:hover {
                  color: #687894;
                }
              `}
            >
              <TelIcon
                width="12"
                height="13"
                transform="scale(1.3)"
                fill="currentColor"
              />
            </a>
            <a
              href="/"
              css={css`
                display: flex;
                align-items: center;
                margin-left: 20px;

                &:hover {
                  color: #946df6;
                }
              `}
            >
              <MailIcon
                width="13.5"
                height="7.5"
                transform="scale(1.7)"
                fill="currentColor"
              />
            </a>
            <div
              className="header-top__right-search-container"
              css={css`
                margin-left: 10px;
              `}
            >
              <SearchButton
                buttonClass="header-top__right-search-button"
                label="Открыть строку поиска"
                action={openSearch}
              />
            </div>
            <a
              href="some"
              className="header-top__link header-top__link--cart"
              aria-label="Перейти на страницу корзины"
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              <CartIcon
                className="header-top__list-icon header-top__list-icon--cart cart-icon"
                width="21"
                height="19"
                fill="currentColor"
                onClick={(evt) => {
                  evt.preventDefault();
                  if (window.innerWidth < MOBILE_MAX_WIDTH) {
                    router.push(routesConstants.CART.route);
                  } else {
                    onClickHandler();
                  }
                }}
              />
              <span
                className="header-top__mobile-list-link-cart-value"
                css={css`
                  top: -5px;
                  left: 17px;
                `}
              >
                {Object.keys(cart).length}
              </span>
            </a>
          </div>
          <div className="header-bottom__left">
            <Link href="/">
              <a
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <Logo
                  className="header-bottom__mobile-top-img"
                  width="230"
                  height="34"
                />
              </a>
            </Link>
          </div>
          <HeaderNav isTop={false} />
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
          <div
            css={css`
              display: none;

              ${breakpointsMap.TABLET} {
                display: flex;
                align-items: center;
              }
            `}
          >
            <div
              className="header-top__right-search-container"
              css={css`
                margin-left: 20px;
              `}
            >
              <SearchButton
                buttonClass="header-top__right-search-button"
                label="Открыть строку поиска"
                action={openSearch}
              />
            </div>
            <a
              href="some"
              className="header-top__link header-top__link--cart"
              aria-label="Перейти на страницу корзины"
              css={css`
                margin-left: 20px;
              `}
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              <CartIcon
                className="header-top__list-icon header-top__list-icon--cart cart-icon"
                width="21"
                height="19"
                fill="currentColor"
                css={css`
                  display: flex;
                `}
                onClick={(evt) => {
                  evt.preventDefault();
                  onClickHandler();
                }}
              />
              <span className="header-top__mobile-list-link-cart-value">
                {Object.keys(cart).length}
              </span>
            </a>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

HeaderMobileBottom.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  cities: PropTypes.shape({
    currentCity: PropTypes.string,
  }).isRequired,
  openSearch: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
  animationDuration: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const { cart } = state;
  const { cities } = state;

  return { cities, cart };
};

export default connect(mapStateToProps, null)(HeaderMobileBottom);
