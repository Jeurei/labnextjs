import { css, useTheme } from '@emotion/react';
import CrossButton from 'components/common/crossButton';
import FormFieldset from 'components/common/form-fieldset';
import FormInput from 'components/common/Form-input';
import MaskedFormInput from 'components/common/masked-input';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const VacansyForm = ({ closeForm, openQuest }) => {
  const theme = useTheme();
  const Label = styled('Label')`
    margin-bottom: 7px;
    @media (min-width: 570px) {
      margin-bottom: 13px;
    }
  `;
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
          width: 320px;
          flex-direction: column;
          background-color: #fff;
          transform: translate(-50%, -50%);

          @media (min-width: 570px) {
            width: 568px;
          }
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

            .vacansy__close-button {
              top: 26px;

              &::before,
              &:after {
                background-color: #fff;
              }

              &:hover {
                &::before,
                &:after {
                  background-color: ${theme.colors.red};
                }
              }
            }
          `}
        >
          <h3
            css={css`
              font-size: 16px;
              font-weight: 400;
            `}
          >
            Отклик на вакансию: Бухгалтер
          </h3>
          <CrossButton buttonClass="vacansy__close-button" action={closeForm} />
        </div>
        <div
          css={css`
            max-height: 400px;
            padding: 15px 30px;
            overflow-y: scroll;

            fieldset {
              width: 100%;
              height: 100%;
            }

            input {
              padding-top: 15px;
              padding-bottom: 15px;
              border-color: ${theme.colors.blue};
              margin-bottom: 20px;
            }

            svg {
              top: 12px;
            }

            @media (min-width: 570px) {
              max-height: 100%;
              padding: 30px;
              overflow-y: visible;
            }
          `}
        >
          <FormFieldset>
            <Label htmlFor="client-vacansy-name">Ваше имя</Label>
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
            <Label htmlFor="client-vacansy-tel">Ваше телефон</Label>
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
            <Label htmlFor="client-vacansy-cv">Ваше резюме:</Label>
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
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                @media (min-width: 570px) {
                  flex-direction: row;
                }
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
                onClick={() => {
                  closeForm();
                  openQuest();
                }}
              >
                Заполнить анкету
              </button>
            </div>
            <p
              css={css`
                padding-bottom: 10px;
                margin: 0;
                margin-top: 20px;
                color: inherit;
                font-size: 13px;
                text-align: center;

                @media (min-width: 570px) {
                  padding-bottom: 0;
                  text-align: left;
                }
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

VacansyForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  openQuest: PropTypes.func.isRequired,
};

export default VacansyForm;
