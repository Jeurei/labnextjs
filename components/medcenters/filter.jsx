import { breakpointsMap } from 'constants/styles';
import { css } from '@emotion/react';

const Filter = () => {
  return (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        list-style: none;

        .filter__checkbox-group {
          width: 100%;
          margin: 0;
          margin-bottom: 20px;
        }

        ${breakpointsMap.TABLET} {
          .filter__checkbox-group {
            width: 50%;
          }
        }

        ${breakpointsMap.DESKTOP} {
          .filter__checkbox-group {
            width: auto;
            margin-right: 20px;
          }
        }
      `}
    >
      <li className="filter__checkbox-group">
        <input
          type="checkbox"
          name="filter"
          id="holidaysoff"
          value="true"
          aria-label="Показать центры которые работают без выходных"
          className="filter__input filter__input--checkbox"
        />
        <label className="filter__label" htmlFor="holidaysoff">
          Работает без выходных
        </label>
      </li>
      <li className="filter__checkbox-group">
        <input
          type="checkbox"
          name="filter"
          id="accepting__doctors"
          value="true"
          aria-label="Показать центры в которых принимают врачи"
          className="filter__input filter__input--checkbox"
        />
        <label className="filter__label" htmlFor="accepting__doctors">
          Прием врачей
        </label>
      </li>
      <li className="filter__checkbox-group">
        <input
          type="checkbox"
          name="filter"
          id="uzi"
          value="true"
          aria-label="Показать центры где есть УЗИ"
          className="filter__input filter__input--checkbox"
        />
        <label className="filter__label" htmlFor="uzi">
          Узи
        </label>
      </li>
      <li className="filter__checkbox-group">
        <input
          type="checkbox"
          name="filter"
          id="sperm"
          value="true"
          aria-label="Показать центры в которых собирают эякулят"
          className="filter__input filter__input--checkbox"
        />
        <label className="filter__label" htmlFor="sperm">
          Кабинет сбора эякулята
        </label>
      </li>
      <li className="filter__checkbox-group">
        <input
          type="checkbox"
          name="filter"
          id="fgs"
          value="true"
          aria-label="Показать центры где можно получить справку фгс"
          className="filter__input filter__input--checkbox"
        />
        <label className="filter__label" htmlFor="fgs">
          Кабинет ФГС
        </label>
      </li>
    </ul>
  );
};

export default Filter;
