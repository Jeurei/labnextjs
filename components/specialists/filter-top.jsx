import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'common/select';
import SearchList from 'common/searchList';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const FilterTop = ({ categories, names, action }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSearchListShown, setSearchListShown] = useState(false);
  const theme = useTheme();
  const onSearchInputFocusHandler = () => {
    setSearchListShown(true);
  };

  const onSearchInputBlurHandler = () => {
    setSearchListShown(false);
  };

  const onSelectChangeHandler = ({ value }) => {
    action({ category: value });
  };

  const onSearchListElementClickHandler = (value) => {
    setInputValue(value);
    action({ name: value });
  };

  return (
    <div className="filter__top">
      <Select
        selectClass="filter__select"
        data={categories.map((el) => ({
          value: el.value,
          label: el.label,
        }))}
        placeholder="Выбрать специалиста"
        action={onSelectChangeHandler}
      />
      <div
        className="filter__search-container"
        css={css`
          position: relative;
        `}
      >
        <SearchIcon
          width="13px"
          height="13px"
          fill="none"
          stroke="currentColor"
          css={css`
            position: absolute;
            top: 18px;
            left: 21px;
            color: #000;

            ${breakpointsMap.DESKTOP} {
              top: 21px;
            }
          `}
        />
        <input
          type="text"
          className="search__input"
          placeholder="Введите ФИО врача"
          aria-label="Введите ФИО врача"
          value={inputValue}
          onFocus={() => onSearchInputFocusHandler()}
          onBlur={() => onSearchInputBlurHandler()}
          onChange={(evt) => setInputValue(evt.currentTarget.value)}
          aria-describedby="search-filter-descr"
          css={css`
            padding-left: 44px;
            border: 1px solid ${theme.colors.blue};
            &:before {
              position: absolute;
              top: 0;
              left: 0;
              display: block;
              width: 13px;
              height: 13px;
              background-image: url('img/search-icon.svg');
              content: '';
            }
          `}
        />
        {isSearchListShown && (
          <SearchList
            classname="filter__search-list"
            data={names}
            value={inputValue}
            action={onSearchListElementClickHandler}
          />
        )}
        <p className="visually-hidden" id="search-descr">
          Введите ФИО врача
        </p>
        <button
          className="search__button"
          type="button"
          name="search-button"
          aria-label="Кнопка поиска"
        >
          <SearchIcon
            width="25px"
            height="25px"
            transform="scale(1.2)"
            fill="none"
            stroke="currentColor"
          />
        </button>
      </div>
    </div>
  );
};

FilterTop.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  action: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterTop;
