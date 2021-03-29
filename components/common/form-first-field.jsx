import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { errorMessagesMap } from 'constants/form';
import FormInput from 'common/form-input';
import MaskedFormInput from 'common/masked-input';
import FormFieldset from './form-fieldset';

const FormFirstField = ({ action }) => {
  const [inputsField, setInputsField] = useState({
    name: '',
    email: '',
    tel: '',
  });
  const [formValidation, setFormValidation] = useState({
    isNameValid: true,
    isTelValid: true,
    isEmailValid: true,
  });

  const onChangeInputValueHandler = (obj) => {
    setInputsField({ ...inputsField, ...obj });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isRequiredAreNotEmpty = () => {
    if (inputsField.name && inputsField.tel) {
      return true;
    }
    return false;
  };

  const changeValidation = (obj) => {
    setFormValidation({ ...formValidation, ...obj });
  };

  const checkNameInput = (value) => {
    onChangeInputValueHandler(value);
    if (value.name.length !== 0) {
      changeValidation({ isNameValid: true });
    } else {
      changeValidation({ isNameValid: false });
    }
  };

  const checkTelInput = (value) => {
    onChangeInputValueHandler(value);
    if (value.tel.replace(/[^0-9]/g, '').length === 11) {
      changeValidation({ isTelValid: true });
    } else {
      changeValidation({ isTelValid: false });
    }
  };

  const checkEmailInput = (value) => {
    onChangeInputValueHandler(value);
    if (validateEmail(value.email)) {
      changeValidation({ isEmailValid: true });
    } else if (value.email !== '') {
      changeValidation({ isEmailValid: false });
    } else {
      changeValidation({ isEmailValid: true });
    }
  };

  useEffect(() => {
    if (
      formValidation.isNameValid &&
      formValidation.isEmailValid &&
      formValidation.isTelValid &&
      isRequiredAreNotEmpty()
    ) {
      action(true, inputsField);
    } else {
      action(false, inputsField);
    }
  }, [formValidation]);

  return (
    <FormFieldset>
      <FormInput
        name="name"
        id="name"
        inputClass="form__input"
        description="Введите ваше ФИО"
        placeholder="Ваше ФИО"
        type="text"
        descriptionId="fio__descr"
        text="Введите ФИО"
        action={checkNameInput}
        formValidation={formValidation.isNameValid}
        errorMessage={errorMessagesMap.NAME}
      />
      <MaskedFormInput
        name="tel"
        id="tel"
        inputClass="form__input"
        description="Введите ваш телефон"
        placeholder="Ваш телефон"
        type="tel"
        descriptionId="tel_descr"
        text="Введите номер телефона"
        action={checkTelInput}
        formValidation={formValidation.isTelValid}
        errorMessage={errorMessagesMap.TEL}
      />
      <FormInput
        name="email"
        id="email"
        inputClass="form__input"
        description="Введите ваш email"
        placeholder="Ваш email"
        type="email"
        descriptionId="email_descr"
        text="Введите email"
        action={checkEmailInput}
        formValidation={formValidation.isEmailValid}
        errorMessage={errorMessagesMap.EMAIL}
      />
    </FormFieldset>
  );
};

FormFirstField.propTypes = {
  action: PropTypes.func.isRequired,
};

export default FormFirstField;
