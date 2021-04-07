import { css, useTheme } from '@emotion/react';
import CrossButton from 'components/common/crossButton';
import FormFieldset from 'components/common/form-fieldset';
import FormInput from 'components/common/form-input';
import MaskedFormInput from 'components/common/masked-input';

const VacansyForm = () => {
  const theme = useTheme();
  return (
    <>
      <div className="specialist__form-overlay" />
      <form
        css={css`
          position: fixed;
          z-index: 25000;
          top: 50%;
          left: 50%;
          display: flex;
          overflow: hidden;
          width: 568px;
          min-height: 669px;
          max-height: 669px;
          flex-direction: column;
          background-color: #fff;
          transform: translate(-50%, -50%);
        `}
      >
        <div
          css={css`
            display: flex;
            min-height: 70px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: 0;
            background: linear-gradient(264deg, #768bf8, #c23df1);
            color: #fff;
            font-weight: 400;
            list-style: none;
          `}
        >
          <h3
            css={css`
              font-size: 13px;
              font-weight: 400;
            `}
          >
            Отклик на вакансию: Бухгалтер
          </h3>
          <CrossButton />
        </div>
        <div
          css={css`
            padding: 30px;

            fieldset {
              width: 100%;
              height: 100%;
            }

            input {
              border-color: ${theme.colors.blue};
            }

            svg {
              top: 12px;
            }
          `}
        >
          <FormFieldset>
            <label
              htmlFor="client-vacansy-name"
              css={css`
                margin-bottom: 13px;
              `}
            >
              Ваше имя
            </label>
            <FormInput
              name="client-vacansy-name"
              id="client-vacansy-name"
              inputClass="form__input"
              description="Введите ваше имя"
              placeholder="Ваше имя"
              type="text"
              descriptionId="client-name_descr"
              text="Введите имя"
            />
            <label
              htmlFor="client-vacansy-tel"
              css={css`
                margin-bottom: 13px;
              `}
            >
              Ваше телефон
            </label>
            <MaskedFormInput
              name="client-vacansy-tel"
              id="client-vacansy-tel"
              inputClass="form__input"
              description="Введите ваш телефон"
              placeholder="Ваш телефон"
              type="tel"
              descriptionId="client-tel_descr"
              text="Введите номер телефона"
            />
            <label
              htmlFor="client-vacansy-cv"
              css={css`
                margin-bottom: 13px;
              `}
            >
              Ваше резюме:
            </label>
            <FormInput
              name="client-vacansy-сv"
              id="client-vacansy-cv"
              inputClass="form__input"
              description="Ссылка на ваше резюме"
              placeholder="Ссылка на ваше резюме"
              type="text"
              descriptionId="client-name_descr"
              text="Введите имя"
            />
            <p
              css={css`
                margin: 0;
                margin-bottom: 20px;
                color: inherit;
                font-size: 13px;
              `}
            >
              Или прикрепите файл в формате .docx (Microsoft Office Word) или
              .pdf
            </p>
            <div
              css={css`
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <label
                className="button"
                htmlFor="vacansy-file"
                css={css`
                  width: 225px;
                  height: 48px;
                `}
              >
                Выбрать файл
              </label>
              <input
                type="file"
                name="vacansy-file"
                id="vacansy-file"
                css={css`
                  display: none;
                `}
                aria-hidden="true"
              />
              <span>или</span>
              <button
                className="button"
                type="button"
                css={css`
                  width: 225px;
                  height: 48px;
                `}
              >
                Заполнить анкету
              </button>
            </div>
            <p
              css={css`
                margin: 0;
                margin-top: 20px;
                color: inherit;
                font-size: 13px;
              `}
            >
              Нажимая кнопку «ОТПРАВИТЬ» вы соглашаетесь с нашей политикой
              конфиденциальности !
            </p>
          </FormFieldset>
        </div>
        <div
          css={css`
            display: flex;
            width: 100%;
            align-items: center;
            padding: 25px 30px;
            background-color: ${theme.colors.colorText.hex};
          `}
        >
          <button
            className="button"
            type="button"
            css={css`
              width: 100%;
              height: 48px;
            `}
          >
            Отправить
          </button>
        </div>
      </form>
    </>
  );
};

export default VacansyForm;
