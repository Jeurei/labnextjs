import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { css, useTheme } from '@emotion/react';

const DefaultSearch = () => {
  const theme = useTheme();
  return (
    <div
      className="search__container-input-group"
      css={css`
        position: relative;
      `}
    >
      <SearchIcon
        width="25px"
        height="25px"
        fill="none"
        stroke="currentColor"
        css={css`
          position: absolute;
          top: 16px;
          left: 16px;
          color: #000;
        `}
      />
      <input
        type="text"
        className="search__input"
        placeholder="Введите название анализа"
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
        Введите ваш поисковый запрос…
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
          transform="scale(1)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="1"
        />
      </button>
    </div>
  );
};

export default DefaultSearch;
