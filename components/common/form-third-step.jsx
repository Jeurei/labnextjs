import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { errorMessagesMap } from 'constants/form';
import { css, useTheme } from '@emotion/react';
import FormFieldset from 'components/common/form-fieldset';
import { telValidation, validateEmail } from 'constants/constants';
import FormIosCheckbox from './form-ios-checkbox';
import FormInput from './Form-input';
import MaskedFormInput from './masked-input';
import Select from './select';

const FormThirdStep = ({ action }) => {
  const theme = useTheme();
  const [formFields, setFormFields] = useState({
    clientName: '',
    clientEmail: '',
    clientTel: '',
    type: '',
    clientAgreement: '',
  });

  const [formValidation, setFormValidation] = useState({
    clientName: true,
    clientEmail: true,
    clientTel: true,
    clientAgreement: false,
  });

  const validationsMap = {
    clientName: () => formFields.clientName.length !== 0,
    clientTel: () => telValidation(formFields.clientTel),
    clientEmail: () =>
      validateEmail(formFields.clientEmail) || formFields.clientEmail === '',
    clientAgreement: () => !formFields.clientAgreement,
  };

  const changeValidation = (obj) => {
    setFormValidation({ ...formValidation, ...obj });
  };

  const changeHandler = (evt) => {
    const { target } = evt;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setFormFields({ ...formFields, [name]: value });

    changeValidation({ [name]: validationsMap[name]() });
  };

  const onLastSelectHandler = (obj) => {
    setFormFields({ ...formFields, type: obj.value });
  };

  const isFieldsNotEmpty = () =>
    formValidation.clientTel &&
    formValidation.clientName &&
    formValidation.clientEmail &&
    formValidation.clientAgreement;

  useEffect(() => {
    if (isFieldsNotEmpty()) {
      action(true, formFields);
    } else {
      action(false, formFields);
    }
  }, [formValidation]);

  return (
    <div
      className="specialist-form__form-step form-step"
      css={css`
        .form__input-container {
          svg {
            top: 8px;
          }
        }
        .form__input {
          height: 38px;
          border-color: ${theme.colors.blue};
          margin-bottom: 23px;
        }

        .form__invalid-input {
          bottom: -4px;
        }
      `}
    >
      <h3 className="form-step__title">Заполните личные данные</h3>
      <FormFieldset>
        <FormInput
          name="clientName"
          id="clientName"
          inputClass="form__input"
          description="Введите ваше имя"
          placeholder="Ваше имя"
          type="text"
          descriptionId="name_descr"
          text="Введите имя"
          value={formFields.clientName}
          action={changeHandler}
          formValidation={formValidation.clientName}
          errorMessage={errorMessagesMap.NAME}
        />
        <MaskedFormInput
          name="clientTel"
          id="clientTel"
          inputClass="form__input"
          description="Введите ваш телефон"
          placeholder="Ваш телефон"
          type="tel"
          descriptionId="tel_descr"
          text="Введите номер телефона"
          value={formFields.clientTel}
          action={changeHandler}
          formValidation={formValidation.clientTel}
          errorMessage={errorMessagesMap.TEL}
        />
        <FormInput
          name="clientEmail"
          id="clientEmail"
          inputClass="form__input"
          description="Введите ваш email"
          placeholder="Ваш email"
          type="email"
          descriptionId="email_descr"
          text="Введите email"
          action={changeHandler}
          value={formFields.clientEmail}
          formValidation={formValidation.clientEmail}
          errorMessage={errorMessagesMap.EMAIL}
        />
        <Select
          selectClass="form__step-select"
          placeholder="Выберите вариант оплаты"
          action={onLastSelectHandler}
          data={[
            { value: 'online', label: 'Оплата онлайн' },
            { value: 'offline', label: 'Оплата в центре' },
          ]}
        />
      </FormFieldset>
      <div className="form__input-checkbox-container">
        <h3 className="form__input-chekbox-title">Задайте свой вопрос</h3>
        <FormIosCheckbox
          action={changeHandler}
          id="clientAgreement"
          name="clientAgreement"
          label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
          конфиденциальности"
          value={formFields.clientAgreement}
        />
        <small className="form__agreement-hint">
          Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
          конфиденциальности
        </small>
      </div>
    </div>
  );
};

FormThirdStep.propTypes = {
  action: PropTypes.func.isRequired,
};

export default FormThirdStep;
