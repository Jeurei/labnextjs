import { useTheme, css } from '@emotion/react';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { breakpointsMap } from 'constants/styles';
import PropTypes from 'prop-types';

const SearchInput = ({ placeholder }) => {
  const theme = useTheme();

  return (
    <div
      className="search__container-input-group"
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
          top: 16px;
          left: 16px;
          color: #000;

          ${breakpointsMap.DESKTOP} {
            top: 21px;
          }
        `}
      />
      <input
        type="text"
        className="search__input"
        placeholder={placeholder}
        aria-label="Введите что хотите найти"
        aria-describedby="search-descr"
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
      <p className="visually-hidden" id="search-descr">
        {placeholder}
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
          fill="none"
          stroke="currentColor"
        />
      </button>
    </div>
  );
};

SearchInput.defaultProps = {
  placeholder: 'Введите ваш поисковый запрос',
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchInput;
