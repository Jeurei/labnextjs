import { css, useTheme } from '@emotion/react';
import React from 'react';
import { ReactComponent as SheduleIcon } from 'icons/shedule.svg';
import { breakpointsMap } from 'constants/styles';
import Select from 'common/select';

const ToHome = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding-bottom: 39px;
      `}
    >
      <h2 className="main__title">Выезд на дом</h2>
      <div>
        <h3
          css={css`
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Заботьтесь о своем здоровье, не выходя из дома!
        </h3>
        <ol
          css={css`
            padding: 0;
            padding-left: 14px;
            margin-bottom: 20px;
            font-weight: 500;
          `}
        >
          <li>
            Оформите заявку на сайте или по телефону, выбрав удобную для Вас
            дату и время
          </li>
          <li>Дождитесь приезда процедурной медицинской сестры</li>
          <li>Получите результаты исследований на e-mail</li>
        </ol>
      </div>
      <div
        css={css`
          background-color: #f7f7f7;
          box-shadow: ${theme.colors.boxShadow};
        `}
      >
        <h3
          css={css`
            position: relative;
            padding-top: 22px;
            padding-bottom: 20px;
            padding-left: 29px;
            margin: 0;
            font-size: 16px;
            font-weight: 500;

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
          `}
        >
          Заказать на дом выезд медицинской бригады
        </h3>
        <form
          action="post"
          css={css`
            padding-right: 10px;
            padding-left: 10px;
            background-color: ${theme.colors.white};
          `}
        >
          <legend
            css={css`
              padding-top: 43px;
              margin-bottom: 35px;
              font-size: 13px;
              font-weight: 500;

              ${breakpointsMap.DESKTOP} {
                padding-left: 43px;
              }
            `}
          >
            Выберите желаемое время
          </legend>
          <fieldset
            css={css`
              display: flex;
              flex-direction: column;
              padding: 0;
              border: none;
              margin-bottom: 38px;
              background-color: ${theme.colors.white};

              ${breakpointsMap.DESKTOP} {
                padding-right: 38px;
                padding-left: 43px;
              }
            `}
          >
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
                  width: 100%;
                  ${breakpointsMap.DESKTOP} {
                    width: 50%;
                    margin-right: 26px;
                  }
                `}
              >
                <div
                  css={css`
                    position: relative;
                    margin-bottom: 10px;
                  `}
                >
                  <input
                    type="date"
                    className="search__input"
                    placeholder="Дата рождения получателя услуги:"
                    aria-label="Выберите дату рождения"
                    aria-describedby="reciever-birthdate"
                    css={css`
                      width: 100%;
                      height: 60px;
                      padding-left: 28px;
                      border: 1px solid ${theme.colors.blue};
                      border-radius: 4px;
                    `}
                  />
                  <p className="visually-hidden" id="reciever-birthdate">
                    Введите дату рождения получателя
                  </p>
                  <SheduleIcon
                    fill="currentColor"
                    stroke="currentColor"
                    width="20px"
                    height="20px"
                    css={css`
                      position: absolute;
                      top: 20px;
                      right: 13px;
                      color: ${theme.colors.blue};
                      font-weight: 400;
                      stroke-width: 0;
                    `}
                  />
                </div>
              </div>
              <div
                css={css`
                  width: 100%;

                  .select {
                    height: 60px;
                  }

                  ${breakpointsMap.DESKTOP} {
                    width: 50%;
                  }
                `}
              >
                <Select
                  selectClass="specialist__adress"
                  placeholder="Выберите 17:00"
                />
              </div>
            </div>
            <input
              type="text"
              className="search__input"
              placeholder="Ваше имя"
              aria-label="Введите имя"
              aria-describedby="order-name"
              css={css`
                height: 60px;
                padding-left: 28px;
                border: 1px solid ${theme.colors.blue};
                margin-top: 10px;
                margin-bottom: 10px;
                border-radius: 4px;
              `}
            />
            <p className="visually-hidden" id="taxpayer-name">
              Введите ваше имя
            </p>
            <textarea
              type="text"
              className="search__input"
              placeholder="Укажите ваш адрес или особенности проезда"
              aria-label="Укажите ваш адрес или особенности проезда"
              aria-describedby="order-message"
              css={css`
                min-height: 185px;
                padding-left: 28px;
                border: 1px solid ${theme.colors.blue};
                margin-bottom: 28px;
                border-radius: 4px;
              `}
            />
            <p className="visually-hidden" id="order-message">
              Укажите ваш адрес или особенности проезда
            </p>
            <div
              css={css`
                width: 100%;
                margin-top: 20px;

                ${breakpointsMap.DESKTOP} {
                  width: 50%;
                  margin-top: 0;
                }
              `}
            >
              <div
                className="filter__checkbox-group"
                css={css`
                  width: 100%;
                  margin-bottom: 23px;
                `}
              >
                <input
                  type="checkbox"
                  name="order-guarantee"
                  id="order-guarantee"
                  value="order-guarantee"
                  aria-label="Достоверность данных гарантирую"
                  className="filter__input filter__input--checkbox"
                />
                <label
                  className="filter__label"
                  htmlFor="order-guarantee"
                  css={css`
                    display: block;
                  `}
                >
                  Достоверность данных гарантирую
                </label>
              </div>
              <div
                className="filter__checkbox-group"
                css={css`
                  width: 100%;
                `}
              >
                <input
                  type="checkbox"
                  name="order-agree"
                  id="order-agree"
                  value="order-agree"
                  aria-label="Принимаю условия пользовательского соглашения на обработку персональных данных"
                  className="filter__input filter__input--checkbox"
                />
                <label
                  className="filter__label"
                  htmlFor="not-sure"
                  css={css`
                    display: block;

                    &:before {
                      top: 0 !important;
                    }

                    &:after {
                      top: 6px !important;
                    }

                    ${breakpointsMap.TABLET} {
                      &:before {
                        top: -6px !important;
                      }

                      &:after {
                        top: 0 !important;
                      }
                    }
                  `}
                >
                  Принимаю условия пользовательского соглашения на обработку
                  персональных данных
                </label>
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="button"
            css={css`
              width: 100%;
              padding-top: 15px;
              padding-bottom: 17px;
              border: none;
              margin-bottom: 38px;
              border-radius: 4px;
            `}
          >
            Заказать выезд
          </button>
        </form>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 31px;
            padding-right: 10px;
            padding-bottom: 24px;
            background-image: ${theme.colors.linearGradient};
            color: ${theme.colors.white};
          `}
        >
          <p
            css={css`
              font-size: 13px;
              text-align: center;
            `}
          >
            Если вы по какой-либо причине решили отменить вызов, пожалуйста,
            сообщите о своём решении до 17:00 по телефону:
          </p>
          <span
            css={css`
              margin-top: 15px;
              margin-bottom: 15px;
              font-size: 22px;
            `}
          >
            8 800 3000 789
          </span>
          <p
            css={css`
              font-size: 13px;
              text-align: center;
            `}
          >
            Оплата производится в день взятия крови только в рублях. В стоимость
            вызова не включается стоимость исследований.
          </p>
        </div>
        <div
          css={css`
            padding-top: 40px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            background-color: ${theme.colors.white};
          `}
        >
          <h3
            css={css`
              margin: 0;
              font-size: 22px;
              font-weight: 500;
              line-height: 22px;
            `}
          >
            Ограничения по взятию биоматериала на дому
          </h3>
          <ul
            css={css`
              padding: 0;
              padding-left: 18px;
              font-weight: 500;
              list-style: none;
            `}
          >
            <li
              css={css`
                position: relative;

                &:before {
                  position: absolute;
                  top: 5px;
                  left: -18px;
                  display: block;
                  width: 7px;
                  height: 7px;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  content: '';
                }
              `}
            >
              Сахарный диабет
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToHome;
