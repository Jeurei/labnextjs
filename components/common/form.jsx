import React, { useState, useContext } from 'react';
import { postData } from 'api';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTheme, css } from '@emotion/react';
import { serverRoutesMap } from 'Redux/actions/actions';
import { postTypesMap } from 'constants/constants';
import FormFieldset from './form-fieldset';
import FormFirstField from './form-first-field';
import FormThirdField from './form-third-field';
import TextareaInput from './textarea-input';
import FileInput from './file-input';

const formContext = React.createContext();
export const useFormContext = () => useContext(formContext);

const Form = ({ title = '', wFile = false }) => {
  const FORM_DEFAULT_STATE = {
    email: '',
    name: '',
    tel: '',
    message: '',
    agree: false,
  };
  const [formFields, setFormFields] = useState(FORM_DEFAULT_STATE);

  const resetForm = () => {
    setFormFields(FORM_DEFAULT_STATE);
  };

  const router = useRouter();

  const theme = useTheme();

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
    postData(
      serverRoutesMap.FORM,
      { formFields, url: router.pathname },
      postTypesMap.FEEDBACK_FORM,
    );
    resetForm();
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
      {title && (
        <legend
          css={css`
            width: 100%;
            margin-bottom: 42px;
            color: ${theme.colors.colorText.hex};
            font-size: 16px;
            font-weight: 500;
          `}
        >
          {title}
        </legend>
      )}
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
          {wFile && <FileInput />}
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
