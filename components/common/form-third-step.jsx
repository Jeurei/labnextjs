import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { errorMessagesMap } from 'constants/form';
import { css, useTheme } from '@emotion/react';
import FormIosCheckbox from './form-ios-checkbox';
import FormFieldset from '../footer/form-fieldset';
import FormInput from './form-input';
import MaskedFormInput from './masked-input';
import Select from './select';

const FormThirdStep = ({ action, userForm }) => {
  const theme = useTheme();
  const [inputsField, setInputsField] = useState({
    clientName: '',
    clientEmail: '',
    clientTel: '',
    type: '',
    isAgreed: '',
  });

  const [formValidation, setFormValidation] = useState({
    isNameValid: true,
    isTelValid: true,
    isEmailValid: true,
    isAgreed: false,
  });

  const onChangeInputValueHandler = (obj) => {
    setInputsField({ ...inputsField, ...obj });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isRequiredAreNotEmpty = () => {
    if (inputsField.clientName && inputsField.clientTel) {
      return true;
    }
    return false;
  };

  const changeValidation = (obj) => {
    setFormValidation({ ...formValidation, ...obj });
  };

  const checkNameInput = (value) => {
    onChangeInputValueHandler(value);
    if (value.clientName.length !== 0) {
      changeValidation({ isNameValid: true });
    } else {
      changeValidation({ isNameValid: false });
    }
  };

  const checkTelInput = (value) => {
    onChangeInputValueHandler(value);
    if (value.clientTel.replace(/[^0-9]/g, '').length === 11) {
      changeValidation({ isTelValid: true });
    } else {
      changeValidation({ isTelValid: false });
    }
  };

  const checkEmailInput = (value) => {
    onChangeInputValueHandler(value);
    if (validateEmail(value.clientEmail)) {
      changeValidation({ isEmailValid: true });
    } else if (value.clientEmail !== '') {
      changeValidation({ isEmailValid: false });
    } else {
      changeValidation({ isEmailValid: true });
    }
  };

  const onLastSelectHandler = (obj) => {
    onChangeInputValueHandler({ type: obj.value });
  };

  const agreementCheckHandler = (bool) => {
    onChangeInputValueHandler({ isAgreed: bool });
    changeValidation({ isAgreed: bool });
  };

  useEffect(() => {
    if (
      formValidation.isNameValid &&
      formValidation.isEmailValid &&
      formValidation.isTelValid &&
      formValidation.isAgreed &&
      isRequiredAreNotEmpty()
    ) {
      action(true, { thirdField: inputsField });
    } else {
      action(false, { thirdField: inputsField });
    }
  }, [formValidation]);

  return (
    <div
      className="specialist-form__form-step form-step"
      css={css`
        .form__input-container {
          svg {
            top: 19px;
          }
        }
        .form__input {
          height: 60px;
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
          id="spec-name"
          inputClass="form__input"
          description="Введите ваше имя"
          placeholder="Ваше имя"
          type="text"
          descriptionId="client-name_descr"
          text="Введите имя"
          action={checkNameInput}
          formValidation={formValidation.isNameValid}
          errorMessage={errorMessagesMap.NAME}
        />
        <MaskedFormInput
          name="clientTel"
          id="clientTel"
          inputClass="form__input"
          description="Введите ваш телефон"
          placeholder="Ваш телефон"
          type="tel"
          descriptionId="client-tel_descr"
          text="Введите номер телефона"
          action={checkTelInput}
          formValidation={formValidation.isTelValid}
          errorMessage={errorMessagesMap.TEL}
        />
        <FormInput
          name="clientEmail"
          id="clientEmail"
          inputClass="form__input"
          description="Введите ваш email"
          placeholder="Ваш email"
          type="email"
          descriptionId="client-_descr"
          text="Введите email"
          action={checkEmailInput}
          formValidation={formValidation.isEmailValid}
          errorMessage={errorMessagesMap.EMAIL}
        />
        <Select
          selectClass="form__step-select"
          placeholder="Выберите вариант оплаты"
          cssStr="height:60px"
          action={onLastSelectHandler}
          data={[
            { value: 'online', label: 'Оплата онлайн' },
            { value: 'offline', label: 'Оплата в центре' },
          ]}
        />
      </FormFieldset>
      <div className="form__input-checkbox-container">
        <FormIosCheckbox
          action={agreementCheckHandler}
          id="clientAgreement"
          name="clientAgreement"
          label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
          конфиденциальности"
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
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FormThirdStep;
