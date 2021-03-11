import React, { useRef, useEffect } from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ENTER_KEY_CODE } from 'constants/keys';
import Components from 'constants/components';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Select from './select';

const Search = ({ selectData, isModal = false }) => {
  const searchRef = useRef();

  const placeValueToSearch = (evt) => {
    evt.preventDefault();
    searchRef.current.value = evt.currentTarget.textContent;
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-bottom: 0;

          ${breakpointsMap.DESKTOP} {
            padding-right: 150px;
          }
        `}
      >
        <h2
          className="search__title"
          css={css`
            margin-right: auto;
            margin-bottom: 25px;
          `}
        >
          Простой и удобный поиск <br className="search__title-br" />
          <Typed
            strings={['Анализов^5000', 'Услуг^5000', 'Врачей^5000']}
            typeSpeed={50}
            backSpeed={50}
            loop
          >
            <span />
          </Typed>
        </h2>
        {isModal && (
          <small className="search__container-top-text">
            По какому разделу искать?
          </small>
        )}
      </div>

      <div className="search__container-input-group">
        <input
          type="text"
          className="search__input"
          placeholder="Введите ваш поисковый запрос…"
          aria-label="Введите что хотите найти"
          aria-describedby="search-descr"
          ref={searchRef}
        />
        <p className="visually-hidden" id="search-descr">
          Введите ваш поисковый запрос…
        </p>
        {isModal && (
          <Select
            selectClass="search__categories"
            data={selectData}
            placeholder="Все разделы"
          />
        )}
        <button
          className="search__button"
          type="button"
          name="search-button"
          aria-label="Кнопка поиска"
          css={css`
            g {
              opacity: 1 !important;
            }
          `}
        >
          <SearchIcon
            width="25px"
            height="25px"
            transform="scale(1)"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="1"
          />
        </button>
      </div>
      <small className="search__hint">
        <SearchIcon
          width="25px"
          height="25px"
          transform="scale(0.8)"
          fill="none"
          stroke="currentColor"
          className="search__hint-icon"
        />
        Например,
        <Typed
          strings={[
            'биохимический анализ крови^5000',
            'анализ на ковид^5000',
            'анализ на анализ^5000',
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        >
          <span
            className="search__hint-dotted"
            onClick={(evt) => {
              placeValueToSearch(evt);
            }}
            role="button"
            onKeyDown={(evt) => {
              if (evt.key === ENTER_KEY_CODE) placeValueToSearch(evt);
            }}
            tabIndex="0"
            aria-label="Поместить это текст в строку поиска"
          />
        </Typed>
      </small>
    </>
  );
};

Search.defaultProps = {
  isModal: false,
};

Search.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isModal: PropTypes.bool,
};

export default connect(null, null)(Search);
