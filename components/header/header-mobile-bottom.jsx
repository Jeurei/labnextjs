import React, { useState, useEffect } from 'react';
import { css, useTheme, keyframes } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routesConstants from 'constants/routes';
import components from 'constants/components';
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

// import Burger from 'common/burger';

const HeaderMobileBottom = ({
  isHidden,
  cities,
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
                  arial-label="Открыть попап для выбора города"
                >
                  <span className="cities__city">{cities.currentCity}</span>
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
                className="header-top__list-icon header-top__list-icon--cart"
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
            <Link
              href="/"
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <a>
                <Logo
                  className="header-bottom__mobile-top-img"
                  width="230"
                  height="34"
                  alt="Логотип компании Лабдиагностика"
                />
              </a>
            </Link>
          </div>
          <ul
            css={css`
              display: none;
              height: 100%;
              flex-direction: row;
              padding: 0;
              padding-right: 30px;
              margin: 0;
              list-style: none;

              ${breakpointsMap.DESKTOP} {
                display: flex;
              }
            `}
          >
            <ul
              css={css`
                padding: 0;
                list-style: none;
              `}
            >
              <li
                css={css`
                  position: relative;
                  display: flex;
                  min-height: 100%;

                  &:after,
                  &:before {
                    position: absolute;
                    top: 50%;
                    right: -18px;
                    display: block;
                    width: 10px;
                    height: 1px;
                    background-color: ${theme.colors.colorText.hex};
                    content: '';
                  }

                  &:after {
                    transform: rotate(45deg);
                  }
                  &:before {
                    right: -25px;
                    transform: rotate(-45deg);
                  }

                  ${breakpointsMap.DESKTOP} {
                    &:hover {
                      ul {
                        display: flex;
                      }
                    }
                  }
                `}
              >
                <Link
                  href="/"
                  css={css`
                    display: flex;
                    min-height: 100%;
                    align-items: center;
                  `}
                >
                  <a
                    css={css`
                      display: flex;
                      min-height: 100%;
                      align-items: center;
                    `}
                  >
                    Корпоративным клиентам
                    <ul
                      css={css`
                        position: absolute;
                        z-index: 1000;
                        top: 100%;
                        left: calc(100% - 1170px);
                        display: none;
                        min-width: 1170px;
                        padding: 0;
                        background-color: ${theme.colors.white};
                        box-shadow: ${theme.colors.boxShadow};
                        list-style: none;

                        &:hover {
                          display: none;
                        }
                      `}
                    >
                      <li
                        css={css`
                          display: flex;
                          width: 50%;
                          min-height: 297px;
                          flex-direction: column;
                          align-items: center;
                          justify-content: center;
                          background-image: url('img/corpo-nav-bg.png');
                          background-repeat: no-repeat;
                          background-size: cover;
                          color: ${theme.colors.white};
                          list-style: none;

                          @media (min-resolution: 1.5dppx),
                            (min-resolution: 144dpi) {
                            background-color: url(img/corpo-nav-bg@2x.png);
                          }
                        `}
                      >
                        <h3
                          css={css`
                            margin-right: 0;
                            margin-bottom: 0;
                            font-size: 33px;
                            font-weight: 500;
                          `}
                        >
                          Корпоративным клиентам
                        </h3>
                        <p
                          css={css`
                            font-size: 16px;
                            text-align: center;
                          `}
                        >
                          Какой то текст чтобы корпоративный
                          <br />
                          клиент узнал себя
                        </p>
                      </li>
                      <li
                        css={css`
                          width: 50%;
                          padding: 0;
                        `}
                      >
                        <div>
                          <ul
                            css={css`
                              display: flex;
                              padding: 0;
                              padding: 46px 36px;
                              font-size: 16px;
                              list-style: none;
                            `}
                          >
                            <li>Варианты сотрудничества</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </a>
                </Link>
              </li>
            </ul>
          </ul>
          <div className="header-bottom__right">
            <a
              href="some"
              className="nav__button button"
              aria-label="Ссылка на страницу для записи к врачу, или попап если скрипт работает"
              css={css`
                margin-left: 30px;
              `}
              onClick={(evt) => {
                evt.preventDefault();
                onClickFormHandler();
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
                className="header-top__list-icon header-top__list-icon--cart"
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
    currentCity: PropTypes.string.isRequired,
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
