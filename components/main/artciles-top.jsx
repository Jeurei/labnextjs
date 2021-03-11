import PropTypes from 'prop-types';
import { filterTypesMap } from 'constants/filter';
import { ReactComponent as GrowArrow } from 'icons/grow-arrow.svg';
import { css } from '@emotion/react';

const ArticlesTop = ({ action, currentFilter }) => {
  const ACTIVE_CLASS = 'articles__sort-item--active';
  const onClickHandler = (evt) => {
    evt.preventDefault();
    action(evt.currentTarget.dataset.type);
  };

  return (
    <div className="articles__top">
      <ul className="articles__sort">
        <li
          className={`articles__sort-item ${
            currentFilter === filterTypesMap.ALL && ACTIVE_CLASS
          }`}
        >
          <button
            className="articles__sort-button"
            type="button"
            aria-label="Переключить сортировку на все"
            name="sort-button-all"
            data-type="ALL"
            onClick={(evt) => onClickHandler(evt)}
          >
            Все
          </button>
        </li>
        <li
          className={`articles__sort-item ${
            currentFilter === filterTypesMap.NEWS && ACTIVE_CLASS
          }`}
        >
          <button
            className="articles__sort-button"
            type="button"
            aria-label="Переключить сортировку на новости"
            name="sort-button-news"
            data-type="NEWS"
            onClick={(evt) => onClickHandler(evt)}
          >
            Новости
          </button>
        </li>
        <li
          className={`articles__sort-item ${
            currentFilter === filterTypesMap.BLOG && ACTIVE_CLASS
          }`}
        >
          <button
            className="articles__sort-button"
            type="button"
            aria-label="Переключить сортировку на блог"
            name="sort-button-blog"
            data-type="BLOG"
            onClick={(evt) => onClickHandler(evt)}
          >
            Блог
          </button>
        </li>
        <li
          className={`articles__sort-item ${
            currentFilter === filterTypesMap.USEFUL && ACTIVE_CLASS
          }`}
        >
          <button
            className="articles__sort-button"
            type="button"
            aria-label="Переключить сортировку на полезные статьи"
            name="sort-button-articles"
            data-type="USEFUL"
            onClick={(evt) => onClickHandler(evt)}
          >
            Полезные статьи
          </button>
        </li>
      </ul>
      <a
        href="./"
        className="articles__link-button button"
        aria-label="В пресс центр"
      >
        В пресс-центр
        <GrowArrow
          width="9"
          height="9"
          fill="currentColor"
          css={css`
            position: absolute;
            top: 8px;
            right: 7px;
            color: #fff;
          `}
        />
      </a>
    </div>
  );
};

ArticlesTop.propTypes = {
  action: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default ArticlesTop;
