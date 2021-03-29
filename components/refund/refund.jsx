import { css, useTheme } from '@emotion/react';
import React from 'react';
import { breakpointsMap } from 'constants/styles';
import { ReactComponent as SheduleIcon } from 'icons/shedule.svg';

const Refund = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">
        Заявление для возврата денежных средств, оплаченных банковской картой на
        сайте
      </h2>
      <form
        action="post"
        css={css`
          padding-bottom: 53px;
          margin-bottom: 29px;
          background-color: ${theme.colors.white};
          box-shadow: ${theme.colors.boxShadow};
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            width: 100%;
            padding: 0.35em 0.75em 0.625em;
            padding-top: 22px;
            padding-bottom: 20px;
            background-color: #f7f7f7;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              display: block;
              width: 100%;
              height: 4px;
              background-image: ${theme.colors.linearGradient};
              content: '';
            }

            ${breakpointsMap.DESKTOP} {
              padding-right: 43px;
              padding-left: 43px;
            }
          `}
        >
          <h3
            css={css`
              position: relative;

              margin: 0;
              margin-right: auto;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Анекта
          </h3>
        </div>
        <fieldset
          action="post"
          css={css`
            padding-top: 30px;
            padding-bottom: 30px;
            border: none;
            background-color: ${theme.colors.white};

            ${breakpointsMap.DESKTOP} {
              padding-right: 38px;
              padding-left: 43px;
            }
          `}
        >
          <input
            type="text"
            className="search__input"
            placeholder="ФИО плательщика (полностью):"
            aria-label="Введите плательщика (полностью):"
            aria-describedby="reciever-surname"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 31px;
              border-radius: 4px;
            `}
          />
          <p className="visually-hidden" id="reciever-surname">
            Введите ФИО плательщика (полностью):
          </p>
          <input
            type="text"
            className="search__input"
            placeholder="Контактный номер телефона:"
            aria-label="ВВедите Контактный номер телефона:"
            aria-describedby="reciever-name"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 31px;
              border-radius: 4px;
            `}
          />
          <p className="visually-hidden" id="reciever-name">
            ВВедите Контактный номер телефона:
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: column;

              ${breakpointsMap.DESKTOP} {
                flex-direction: row;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                margin-bottom: 31px;

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                  margin: 0;
                  -webkit-appearance: none;
                }

                input[type='number'] {
                  -moz-appearance: textfield;
                }

                ${breakpointsMap.DESKTOP} {
                  width: 50%;
                }
              `}
            >
              <label
                htmlFor="first__card-nums"
                css={css`
                  display: flex;
                  flex-grow: 1;
                `}
              >
                Первые 3 цифры номера карты
              </label>
              <input
                type="number"
                className="search__input"
                name="first__card-nums"
                id="first__card-nums"
                css={css`
                  padding-left: 28px;
                  border: 1px solid ${theme.colors.blue};
                  border-radius: 4px;

                  ${breakpointsMap.DESKTOP} {
                    max-width: 280px;
                  }
                `}
              />
            </div>
            <div
              css={css`
                position: relative;
                display: flex;
                align-items: center;
                padding-right: 30px;
                margin-bottom: 31px;

                &:after {
                  position: absolute;
                  top: 16px;
                  right: 0;
                  display: flex;
                  width: 13px;
                  height: 13px;
                  align-items: center;
                  justify-content: center;
                  background-color: #8978f7;
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '!';
                }

                ${breakpointsMap.DESKTOP} {
                  width: 50%;

                  &:after {
                    top: 21px;
                  }
                }
              `}
            >
              <label
                htmlFor="last__card-nums"
                css={css`
                  flex-grow: 1;

                  ${breakpointsMap.DESKTOP} {
                    padding-left: 28px;
                  }
                `}
              >
                Последние 3 цифры номера карты
              </label>
              <input
                type="text"
                className="search__input"
                name="last__card-nums"
                id="last__card-nums"
                css={css`
                  padding-left: 28px;
                  border: 1px solid ${theme.colors.blue};
                  border-radius: 4px;

                  ${breakpointsMap.DESKTOP} {
                    max-width: 280px;
                  }
                `}
              />
            </div>
          </div>
          <div
            css={css`
              position: relative;
              margin-bottom: 31px;
            `}
          >
            <input
              type="date"
              className="search__input"
              placeholder="Дата платежа:"
              aria-label="Выберите дату платежа"
              aria-describedby="reciever-birthdate"
              css={css`
                width: 100%;
                padding-left: 28px;
                border: 1px solid ${theme.colors.blue};
                border-radius: 4px;
              `}
            />
            <p className="visually-hidden" id="reciever-birthdate">
              Введите дату платежа
            </p>
            <SheduleIcon
              fill="currentColor"
              stroke="currentColor"
              width="20px"
              height="20px"
              css={css`
                position: absolute;
                top: 13px;
                right: 13px;
                color: ${theme.colors.blue};
                font-weight: 400;
                stroke-width: 0;
              `}
            />
          </div>
        </fieldset>
        <div
          css={css`
            width: 100%;
            padding-right: 39px;
            padding-left: 39px;
          `}
        >
          <button
            className="button"
            type="submit"
            css={css`
              width: 100%;
              padding-top: 18px;
              padding-bottom: 18px;
              border: none;
              border-radius: 6px;
            `}
          >
            Отправить
          </button>
        </div>
      </form>
    </>
  );
};

export default Refund;
