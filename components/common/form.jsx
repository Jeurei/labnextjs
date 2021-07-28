import React, { useState, useContext } from 'react';
import SectionInner from 'components/header/section-inner';
import { postData, serverRoutesMap } from 'Redux/actions/actions';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FormFieldset from './form-fieldset';
import FormFirstField from './form-first-field';
import FormThirdField from './form-third-field';
import TextareaInput from '../footer/textarea-input';

const formContext = React.createContext();
export const useFormContext = () => useContext(formContext);

const Form = ({ title = '', wFile = false }) => {
  const [formFields, setFormFields] = useState({
    email: '',
    name: '',
    tel: '',
    message: '',
    agree: false,
  });

  const router = useRouter();

  const [isFieldsValid, setIsFieldsValid] = useState({
    isFirstFieldValid: false,
  });

  const firstFieldValidHandler = (bool, inputs) => {
    setIsFieldsValid({ ...isFieldsValid, isFirstFieldValid: bool });
    setFormFields({ ...formFields, ...inputs });
  };

  const messageTypeHandler = (value) => {
    setFormFields({ ...formFields, message: value });
  };

  const checkboxChangeHandler = (bool) => {
    setFormFields({ ...formFields, agree: bool });
  };

  const onSubmitHandler = () => {
    postData(serverRoutesMap.FORM, { formFields, url: router.pathname });
  };

  const formState = {
    formFields,
    setFormFields,
    submit: onSubmitHandler,
    isAllValid: () =>
      isFieldsValid.isFirstFieldValid &&
      formFields.name &&
      formFields.tel &&
      formFields.agree,
  };

  return (
    <form action="post" className="form-section__form form">
      <formContext.Provider value={formState}>
        <FormFirstField action={firstFieldValidHandler} />
        <FormFieldset>
          <TextareaInput
            id="text"
            cols={30}
            rows={10}
            inputClass="form__input form__input--textarea"
            placeholder="Укажите интересующую вас услугу *"
            label="Поле для ввода вашего вопроса"
            action={messageTypeHandler}
            value={formFields.message}
          />
        </FormFieldset>
        <FormThirdField
          action={checkboxChangeHandler}
          submit={onSubmitHandler}
        />
      </formContext.Provider>
    </form>
  );
};

Form.defaultProps = {
  wFile: false,
  title: '',
};

Form.propTypes = {
  wFile: PropTypes.bool,
  title: PropTypes.string,
};

export default Form;
