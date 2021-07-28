import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { errorMessagesMap } from 'constants/form';
import FormInput from 'common/form-input';
import MaskedFormInput from 'common/masked-input';
import FormFieldset from './form-fieldset';
import { useFormContext } from './form';

const FormFirstField = ({ action }) => {
  const { formFields, setFormFields } = useFormContext();

  const [formValidation, setFormValidation] = useState({
    name: true,
    tel: true,
    email: true,
  });

  const changeValidation = (obj) => {
    setFormValidation({ ...formValidation, ...obj });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validationsMap = {
    name: () => formFields.name.length !== 0,
    tel: () => formFields.tel.replace(/[^0-9]/g, '').length === 11,
    email: () => validateEmail(formFields.email) || formFields.email === '',
  };

  const changeHandler = (evt) => {
    const { target } = evt;
    const { value, name } = target;

    setFormFields({ ...formFields, [name]: value });

    changeValidation({ [name]: validationsMap[name]() });
  };

  useEffect(() => {
    if (formValidation.tel && formValidation.name && formValidation.email) {
      action(true, formFields);
    } else {
      action(false, formFields);
    }
  }, [formValidation]);

  return (
    <FormFieldset>
      <FormInput
        name="name"
        id="name"
        inputClass="form__input"
        description="Введите ваше имя"
        placeholder="Ваше имя"
        type="text"
        descriptionId="name_descr"
        text="Введите имя"
        value={formFields.name}
        action={changeHandler}
        formValidation={formValidation.name}
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
        value={formFields.tel}
        action={changeHandler}
        formValidation={formValidation.tel}
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
        action={changeHandler}
        value={formFields.email}
        formValidation={formValidation.email}
        errorMessage={errorMessagesMap.EMAIL}
      />
    </FormFieldset>
  );
};

FormFirstField.propTypes = {
  action: PropTypes.func.isRequired,
};

export default FormFirstField;
