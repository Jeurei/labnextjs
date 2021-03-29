import { breakpointsMap } from 'constants/styles';
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import DatePicker from 'components/common/datePicker';

const Form = () => {
  const theme = useTheme();
  const [quantityOfPatients, setQuantityOfPatients] = useState(1);

  const onAddClickHandler = (evt) => {
    evt.preventDefault();
    setQuantityOfPatients((prev) => prev + 1);
  };

  const PersonalInfo = () => {
    return (
      <fieldset
        css={css`
          border: none;

          ${breakpointsMap.DESKTOP} {
            padding-right: 38px;
            padding-left: 43px;
          }
        `}
      >
        <input
          type="text"
          className="search__input"
          placeholder="Фамилия налогоплательщика (полностью):"
          aria-label="Введите фамилию налогоплательщика"
          aria-describedby="taxpayer-surname"
          css={css`
            width: 100%;
            padding-left: 28px;
            border: 1px solid ${theme.colors.blue};
            margin-bottom: 31px;
            border-radius: 4px;
          `}
        />
        <p className="visually-hidden" id="taxpayer-surname">
          Введите фамилию налогоплательщика
        </p>
        <input
          type="text"
          className="search__input"
          placeholder="Имя налогоплательщика (полностью):"
          aria-label="Введите имя налогоплательщика"
          aria-describedby="taxpayer-name"
          css={css`
            width: 100%;
            padding-left: 28px;
            border: 1px solid ${theme.colors.blue};
            border-radius: 4px;
          `}
        />
        <p className="visually-hidden" id="taxpayer-name">
          Введите имя налогоплательщика
        </p>
      </fieldset>
    );
  };

  const Patient = () => {
    return (
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
          placeholder="Фамилия получателя услуги (полностью)::"
          aria-label="Введите фамилию получателя"
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
          Введите фамилию получателя
        </p>
        <input
          type="text"
          className="search__input"
          placeholder="Имя получателя (полностью):"
          aria-label="Введите имя получателя"
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
          Введите имя получателя
        </p>
        <div
          css={css`
            position: relative;
            margin-bottom: 31px;

            .input__datePicker {
              width: 100%;

              div {
                width: 100%;
              }
            }
          `}
        >
          <DatePicker label="Введите дату приема" />
        </div>
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
              position: relative;
              width: 100%;

              .input__datePicker {
                div {
                  width: 100%;
                }
              }

              ${breakpointsMap.DESKTOP} {
                width: 50%;
              }
            `}
          >
            <DatePicker label="Введите дату получения услуги" />
          </div>
          <div
            css={css`
              width: 100%;
              margin-top: 20px;

              ${breakpointsMap.DESKTOP} {
                width: 50%;
                padding-left: 20px;
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
                name="date-of-get-checkbox"
                id="dont-remember"
                value="dont-remember"
                aria-label="Не помню что обращался"
                className="filter__input filter__input--checkbox"
              />
              <label
                className="filter__label"
                htmlFor="dont-remember"
                css={css`
                  display: block;
                `}
              >
                не помню дату получения услуги
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
                name="date-of-get-checkbox"
                id="not-sure"
                value="not-sure"
                aria-label="Не уверен что обращался"
                className="filter__input filter__input--checkbox"
              />
              <label
                className="filter__label"
                htmlFor="not-sure"
                css={css`
                  display: block;
                  padding-top: 8px;

                  &:before {
                    top: 0 !important;
                  }

                  &:after {
                    top: 6px !important;
                  }

                  ${breakpointsMap.TABLET} {
                    padding-top: 0;

                    &:before {
                      top: -6px !important;
                    }

                    &:after {
                      top: 0 !important;
                    }
                  }
                `}
              >
                вообще не уверен, что обращался в медцентр Лабдиагностика
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    );
  };

  return (
    <form
      action="post"
      css={css`
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
        Заполните личные данные
      </legend>
      <PersonalInfo />
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
          Пациент
        </h3>
        <a
          href="/"
          css={css`
            position: relative;
            display: block;
            padding: 0;
            padding-left: 10px;

            border: none;
            border-bottom: 2px solid ${theme.colors.colorText.hex};
            appearance: none;
            background: transparent;
            font-size: 16px;
            font-weight: 500;

            &:hover,
            &:active {
              color: ${theme.colors.colorText.hex};
            }

            &:before,
            &:after {
              position: absolute;
              top: 3px;
              left: 0;
              display: block;
              width: 2px;
              height: 10px;
              background-color: ${theme.colors.colorText.hex};
              content: '';
            }

            &:before {
              transform: rotate(90deg);
            }
          `}
          aria-label="Добавить ещё пациента?"
          onClick={(evt) => onAddClickHandler(evt)}
        >
          Добавить пациента
        </a>
      </div>
      {new Array(quantityOfPatients).fill().map(() => (
        <Patient />
      ))}
    </form>
  );
};

export default Form;
