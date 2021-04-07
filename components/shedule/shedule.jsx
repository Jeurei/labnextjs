import React from 'react';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import Select from 'common/select';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const Shedule = () => {
  const theme = useTheme();

  return (
    <>
      <h2 className="main__title">Прайс по услугам</h2>
      <div className="filter__top">
        <Select
          selectClass="filter__select"
          placeholder="Веберите категорию"
          data={{}}
        />
        <div
          className="filter__search-container"
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
            placeholder="Введите название специальности или фио"
            aria-label="Введите название специальности или фио"
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
          <p className="visually-hidden" id="search-descr">
            Введите название специальности или фио
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
      <table
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 25px;
        `}
      >
        <thead
          css={css`
            display: none;

            ${breakpointsMap.DESKTOP} {
              display: block;
              padding: 0 17px;
              padding-bottom: 24px;
            }
          `}
        >
          <tr
            css={css`
              display: flex;
              padding-right: 149px;
            `}
          >
            <th
              css={css`
                margin-right: 17px;
                margin-right: 78px;
                font-size: 12px;
                font-weight: 400;
              `}
            >
              Код
            </th>
            <th
              css={css`
                margin-right: auto;
                font-size: 12px;
                font-weight: 400;
              `}
            >
              Номенклатура
            </th>
            <th
              css={css`
                margin-right: 129px;
                font-size: 12px;
                font-weight: 400;
              `}
            >
              Цена
            </th>
            <th
              css={css`
                margin-right: 0;
                font-size: 12px;
                font-weight: 400;
              `}
            >
              Запись
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            css={css`
              position: relative;
              display: flex;
              min-width: 100%;
              flex-direction: column;
              padding-top: 15px;
              background-color: #f7f7f7;

              &:before {
                position: absolute;
                top: 8px;
                left: 21px;
                display: block;
                width: 32px;
                height: 30px;
                background-image: url('img/doctor.svg');
                background-repeat: no-repeat;
                content: '';
              }
            `}
          >
            <td
              css={css`
                width: 100%;
                padding-bottom: 15px;
                padding-left: 120px;
                font-size: 16px;
                font-weight: 500;
              `}
            >
              Гинеколог
            </td>
            <tr
              css={css`
                position: relative;
                display: flex;
                min-width: 100%;
                flex-direction: column;
                padding: 13px 17px;
                margin-bottom: 10px;
                background-color: ${theme.colors.white};
                box-shadow: ${theme.colors.boxShadow};

                @media (min-width: 465px) {
                  flex-direction: row;
                  flex-wrap: wrap;
                }

                ${breakpointsMap.TABLET} {
                  padding-top: 40px;
                  padding-bottom: 43px;
                }
              `}
            >
              <td
                css={css`
                  display: flex;
                  width: 100%;
                  align-items: center;
                  margin-bottom: 10px;

                  ${breakpointsMap.TABLET} {
                    width: auto;
                    margin-right: 65px;
                    margin-bottom: 0;
                  }
                `}
              >
                18.110
              </td>
              <td
                css={css`
                  width: 100%;
                  margin-bottom: 10px;
                  font-size: 16px;

                  @media (min-width: 465px) {
                    display: flex;
                    width: auto;
                    align-items: center;
                    margin: 0;
                    margin-right: auto;
                  }

                  ${breakpointsMap.TABLET} {
                    margin-right: auto;
                  }
                `}
              >
                Первичный прием терапевта
              </td>
              <td
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  font-weight: 500;

                  @media (min-width: 465px) {
                    flex-direction: row;
                  }
                `}
              >
                <span
                  css={css`
                    margin-right: 10px;
                    margin-bottom: 10px;
                    font-size: 26px;

                    ${breakpointsMap.TABLET} {
                      margin-right: 73px;
                      margin-bottom: 0;
                    }
                  `}
                >
                  1 100 ₽
                </span>
                <button
                  type="button"
                  className="button"
                  css={css`
                    width: 100%;
                    padding-top: 15px;
                    padding-bottom: 17px;
                    border: none;
                    border-radius: 4px;

                    @media (min-width: 465px) {
                      width: 189px;
                    }
                  `}
                >
                  Записаться
                </button>
              </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Shedule;
