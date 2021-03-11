import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import FormInvalidInput from './form-invalid-input';

const FormInput = ({
  name,
  id,
  inputClass,
  type,
  placeholder,
  description,
  text,
  descriptionId,
  action,
  formValidation,
  errorMessage,
}) => {
  const [inputState, setInputState] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onLoseFocusHandler = () => {
    action({ [name]: inputState });
    setIsFocused(false);
  };

  return (
    <div className="form__input-container">
      <label htmlFor={id} className="form__label visually-hidden">
        {text}
      </label>
      <input
        css={
          !formValidation &&
          !isFocused &&
          css`
            border-color: red;
          `
        }
        type={type}
        className={inputClass}
        id={id}
        name={name}
        placeholder={`${placeholder}*`}
        aria-describedby={descriptionId}
        value={inputState}
        onFocus={() => setIsFocused(true)}
        onChange={(evt) => {
          setInputState(evt.currentTarget.value);
          onLoseFocusHandler();
        }}
        onBlur={() => onLoseFocusHandler()}
      />
      <p className="visually-hidden" id={descriptionId}>
        {description}
      </p>
      {!formValidation && !isFocused && (
        <FormInvalidInput text={errorMessage} />
      )}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  inputClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  descriptionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  action: PropTypes.func.isRequired,
  formValidation: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default FormInput;
