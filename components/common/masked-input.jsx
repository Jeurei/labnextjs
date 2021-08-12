import { useState } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { css, useTheme } from '@emotion/react';
import { ReactComponent as CorrectIcon } from 'icons/check-circle-solid.svg';
import { ReactComponent as InCorrectIcon } from 'icons/times-solid.svg';
import FormInvalidInput from './form-invalid-input';

const inputMasksMap = {
  tel: '+7 (999) 999-99-99',
};

const MaskedFormInput = ({
  name,
  id,
  inputClass,
  type,
  placeholder,
  description,
  text,
  descriptionId,
  action,
  value,
  formValidation,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const onBlurHandler = (evt) => {
    action(evt);
    setIsFocused(false);
  };

  return (
    <div className="form__input-container">
      <label htmlFor={id} className="form__label visually-hidden">
        {text}
      </label>
      <InputMask
        type={type}
        className={inputClass}
        id={id}
        name={name}
        placeholder={`${placeholder}*`}
        aria-describedby={descriptionId}
        mask={inputMasksMap[type]}
        value={value}
        onFocus={() => setIsFocused(true)}
        onChange={(evt) => action(evt)}
        onBlur={(evt) => onBlurHandler(evt)}
        css={css`
          border-color: ${!formValidation &&
          !isFocused &&
          `${theme.colors.red} !important`};
          border-color: ${formValidation &&
          !isFocused &&
          value.length !== 0 &&
          `${theme.colors.green}`};
        `}
      />
      <p className="visually-hidden" id={descriptionId}>
        {description}
      </p>
      {formValidation && !isFocused && value.length !== 0 && (
        <CorrectIcon
          fill="currentColor"
          width="23"
          height="23"
          css={css`
            position: absolute;
            top: 14px;
            right: 7px;
            color: ${theme.colors.green};
          `}
        />
      )}
      {!formValidation && !isFocused && (
        <>
          <InCorrectIcon
            fill="currentColor"
            width="23"
            height="23"
            css={css`
              position: absolute;
              top: 14px;
              right: 7px;
              color: ${theme.colors.red};
            `}
          />
          <FormInvalidInput text={errorMessage} />
        </>
      )}
    </div>
  );
};

MaskedFormInput.defaultProps = {
  inputClass: '',
};

MaskedFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  inputClass: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  descriptionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  action: PropTypes.func.isRequired,
  formValidation: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MaskedFormInput;
