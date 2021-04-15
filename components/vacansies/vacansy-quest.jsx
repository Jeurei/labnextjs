import { css, useTheme } from '@emotion/react';
import CrossButton from 'components/common/crossButton';
import FormFieldset from 'components/common/form-fieldset';
import FormInput from 'components/common/form-input';
import MaskedFormInput from 'components/common/masked-input';
import TextareaInput from 'components/common/textarea-input';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const VacansyQuest = ({ closeQuest }) => {
  const theme = useTheme();

  const Label = styled('label')`
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
            Анкета на вакансию: Бухгалтер
          </h3>
          <CrossButton
            buttonClass="vacansy__close-button"
            action={closeQuest}
          />
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

            .form__input {
              padding-top: 15px;
              padding-bottom: 15px;
              border-color: ${theme.colors.blue};
              margin-bottom: 10px;

              &--textarea {
                min-height: 100px;
              }
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
            <Label htmlFor="client-vacansy-name">Имя, Фамилия, Отчество</Label>
            <FormInput
              name="client-vacansy-name"
              id="client-vacansy-name"
              inputClass="form__input"
              description="Введите ваше ФИО"
              placeholder="Ваше ФИО"
              type="text"
              descriptionId="client-name_descr"
              text="Введите ФИО"
            />
            <Label htmlFor="client-vacansy-cv">Ваш возраст:</Label>
            <FormInput
              name="client-vacansy-сv"
              id="client-vacansy-cv"
              inputClass="form__input"
              description="Ваш возраст"
              placeholder="Ваш возраст"
              type="number"
              descriptionId="client-name_descr"
              text="Введите ваш возраст"
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
            <Label htmlFor="client-vacansy-works">
              Бывшее (-ые) места работы
            </Label>
            <TextareaInput
              name="client-vacansy-works"
              id="client-vacansy-works"
              inputClass="form__input form__input--textarea"
              cols={30}
              rows={10}
              description="Опишите ваш предыдущий опыт работы (где работали, какой список обязанностей выполняли)"
              placeholder="Опишите ваш предыдущий опыт работы (где работали, какой список обязанностей выполняли)"
              descriptionId="client-works_descr"
              label="Опишите ваш предыдущий опыт работы (где работали, какой список обязанностей выполняли)"
              text="Опишите ваш предыдущий опыт работы (где работали, какой список обязанностей выполняли)"
            />
            <Label htmlFor="client-vacansy-ed">Образование</Label>
            <TextareaInput
              name="client-vacansy-ed"
              id="client-vacansy-ed"
              inputClass="form__input form__input--textarea"
              cols={30}
              rows={10}
              description="Напишите какие учебные заведения заканчивали, по каким специальностям и в каком году"
              placeholder="Напишите какие учебные заведения заканчивали, по каким специальностям и в каком году"
              descriptionId="client-ed_descr"
              label="Напишите какие учебные заведения заканчивали, по каким специальностям и в каком году"
              text="Напишите какие учебные заведения заканчивали, по каким специальностям и в каком году"
            />
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
            onClick={() => closeQuest()}
          >
            Завершить
          </button>
        </div>
      </form>
    </>
  );
};

VacansyQuest.propTypes = {
  closeQuest: PropTypes.func.isRequired,
};

export default VacansyQuest;
