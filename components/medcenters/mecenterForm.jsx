import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MaskedFormInput from 'components/common/masked-input';

const MedCenterForm = () => {
  const theme = useTheme();
  return (
    <div>
      <form
        action="post"
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 28px;
          padding-right: 35px;
          padding-bottom: 42px;
          padding-left: 35px;
          background-image: url('img/analyze-q-bg.png'),
            linear-gradient(
              to left,
              RGBA(250, 0, 235, 1),
              RGBA(154, 102, 245, 1),
              RGBA(43, 215, 255, 1)
            );
          background-position: 0 0;
          background-repeat: no-repeat;
          background-size: cover;
          color: ${theme.colors.white};
          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url('img/analyze-q-bg@2x.png'),
              linear-gradient(
                to left,
                RGBA(250, 0, 235, 1),
                RGBA(154, 102, 245, 1),
                RGBA(43, 215, 255, 1)
              );
          }

          ${breakpointsMap.DESKTOP} {
            width: 600px;
            padding-right: 24px;
            padding-left: 24px;
          }
        `}
      >
        <legend
          css={css`
            width: 100%;
            margin-bottom: 25px;
            font-size: 22px;
            text-align: center;
          `}
        >
          Обратный звонок
        </legend>
        <div
          css={css`
            display: flex;
            flex-direction: column;

            ${breakpointsMap.TABLET} {
              flex-direction: row;
            }
          `}
        >
          <input
            type="text"
            placeholder="Ваше имя *"
            css={css`
              height: 37px;
              flex-grow: 1;
              padding-top: 9px;
              padding-bottom: 11px;
              padding-left: 14px;
              border: none;
              margin-bottom: 15px;
              appearance: none;
              color: ${theme.colors.colorText.hex};

              ${breakpointsMap.TABLET} {
                margin-right: 16px;
              }
            `}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <TimePicker
              ampm={false}
              emptyLabel="Желаемое время"
              value={null}
              css={css`
                flex-grow: 1;
                div {
                  min-width: 170px;
                  height: 37px;
                  padding-left: 10px;
                  background-color: #fff;
                }

                input {
                  color: rgba(74, 74, 74, 0.6);
                  font-size: 12px;
                }
              `}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 15px;

            ${breakpointsMap.TABLET} {
              flex-direction: row;
            }

            .form__input-container {
              margin-right: 20px;

              svg {
                top: 8px;
              }
            }

            .medCenter__form-tel {
              min-width: 264px;
              height: 37px;

              &:placeholder-shown {
                color: rgba(74, 74, 74, 0.6);
              }
            }
          `}
        >
          <MaskedFormInput
            type="tel"
            name="center-form-tel"
            placeholder="Телефон "
            description="Введите свой телефон"
            inputClass="medCenter__form-tel"
            errorMessage="Введите номер в правильном формате"
            descriptionId="center-form-tel-descr"
            id="center-form-tel"
          />
          <div
            className="form__input-checkbox-container"
            css={css`
              margin-bottom: 0;
            `}
          >
            <label
              htmlFor="agree"
              className="form__label form__label--checkbox"
              css={css`
                ${breakpointsMap.DESKTOP} {
                  margin-right: 0;
                }
              `}
            >
              <input
                type="checkbox"
                className="form__input form__input--checkbox"
                id="agree"
                name="agree"
                aria-label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой конфиденциальности"
              />
              <span className="form__input-checkbox-span" />
            </label>
            <small className="form__agreement-hint">
              Нажимая на кнопку отправить вы{' '}
              <br
                css={css`
                  display: none;
                  ${breakpointsMap.TABLET} {
                    display: block;
                  }
                `}
              />
              соглашаетесь с нашей политикой
              <br
                css={css`
                  display: none;
                  ${breakpointsMap.TABLET} {
                    display: block;
                  }
                `}
              />{' '}
              конфиденциальности
            </small>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
          `}
        >
          <small
            css={css`
              font-size: 9px;
            `}
          >
            Звонки обрабатываются по будням с 08.00 до 20.00
          </small>
          <button
            className="button"
            type="submit"
            aria-label="Отправить форму"
            css={css`
              width: 210px;
              align-self: center;
              padding-top: 15px;
              padding-bottom: 17px;
              border-radius: 6px;
            `}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default MedCenterForm;
