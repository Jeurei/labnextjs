import React, { useContext } from 'react';
import { css, keyframes, useTheme } from '@emotion/react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from 'constants/components';
import Picture from 'common/picture';
import { ReactComponent as DropDown } from 'icons/dropdown.svg';
import { ReactComponent as SmallLogo } from 'icons/small-logo.svg';
import { ReactComponent as MarkMapIcon } from 'icons/map-mark-icon.svg';
import { ReactComponent as MailIcon } from 'icons/mail.svg';
import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';

import SearchButton from 'common/searchButton';
import { breakpointsMap } from 'constants/styles';
import Menu from './menu';
import { useHeaderContext } from './header';

// import Burger from 'common/burger';

const HeaderExpandButton = (isHidden, action) => (
  <button
    className={`header__expand-button ${isHidden ? 'visually-hidden' : ''}`}
    type="button"
    aria-label="Развернуть нижний хедер"
    onClick={action}
  >
    <DropDown
      className="header__expand-button-icon"
      width="25px"
      height="25px"
      fill="none"
      stroke="currentColor"
    />
  </button>
);

const HeaderBottom = ({
  isHidden,
  animationDuration,
  clickHandler,
  headerBottomState,
  cities,
  cart,
  openSearch,
}) => {
  const {
    cities: { onCitiesClickHandler },
    cart: { onClickHandler },
  } = useHeaderContext();

  const showingAnimation = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }

  70%{
    padding-top: 22px;
    max-height: 80px;
    padding-bottom: 22px;
  }

  100% {
    opacity: 1;
  `;

  const hidingAnimation = keyframes`
  0% {
    max-height: 80px;
  }

  100% {
    padding-top:0;
    max-height: 0;
    padding-bottom: 0;
  `;

  const opacityAnimation = keyframes`

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  `;

  const opacityAnimationHidden = keyframes`

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  `;

  const onButtonClickHandler = () => {
    clickHandler(!headerBottomState);
  };

  const theme = useTheme();

  return (
    <div
      className="header__bottom-container"
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
                animation: ${opacityAnimationHidden} ${animationDuration}s
                  forwards ease-in-out;
              `
            : css`
                animation: ${opacityAnimation} ${animationDuration}s forwards
                  ease-in-out;
              `
        }
      >
        <div className="header__bottom header-bottom">
          <div className="header-bottom__mobile">
            <Link
              href="/"
              css={css`
                margin-right: 20px;
              `}
            >
              <a>
                <SmallLogo width="28px" height="34px" />
              </a>
            </Link>
            <div
              css={css`
                position: relative;
              `}
            >
              <div
                className="cities"
                css={css`
                  margin-right: auto;
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
                  onClickHandler();
                }}
              />
              <span className="header-top__mobile-list-link-cart-value">
                {Object.keys(cart).length}
              </span>
            </a>
          </div>
          <div className="header-bottom__left">
            <Link href="/">
              <a>
                <Picture
                  containerClass="header-bottom__mobile-top-img"
                  src="img/logo"
                  width="230"
                  height="34"
                  alt="Логотип компании Лабдиагностика"
                />
              </a>
            </Link>
          </div>
          <div className="header-bottom__right">
            <a
              href="some"
              className="nav__button button"
              aria-label="Ссылка на страницу для записи к врачу, или попап если скрипт работает"
            >
              Записаться к врачу
            </a>
          </div>
          <ul
            css={css`
              display: none;
              padding: 0;
              list-style: none;
            `}
          />
          <Menu />
        </div>
      </div>
      {HeaderExpandButton(!isHidden, onButtonClickHandler)}
    </div>
  );
};

HeaderBottom.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  animationDuration: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  headerBottomState: PropTypes.bool.isRequired,
  cities: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
  }).isRequired,
  openSearch: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { cart } = state.cart;
  const { cities } = state.cities;

  return { cities, cart };
};

export default connect(mapStateToProps, null)(HeaderBottom);
