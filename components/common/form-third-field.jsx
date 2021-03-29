import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import FormIosCheckbox from 'common/form-ios-checkbox';
import FormFieldset from './form-fieldset';

const FormThirdField = ({ action, isFirstFieldValid, fieldsInputs }) => (
  <FormFieldset>
    <h3
      className="form__input-chekbox-title"
      css={css`
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
      `}
    >
      Оставьте свои контактные данные
    </h3>
    <div className="form__input-checkbox-container">
      <FormIosCheckbox
        action={action}
        id="agreement"
        name="agreement"
        label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
          конфиденциальности"
      />
      <small className="form__agreement-hint">
        Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
        конфиденциальности
      </small>
    </div>
    <button
      className={`form__button ${
        isFirstFieldValid &&
        fieldsInputs.name &&
        fieldsInputs.tel &&
        fieldsInputs.agree
          ? 'button'
          : 'button-inactive'
      }`}
      type="submit"
      css={
        isFirstFieldValid &&
        fieldsInputs.name &&
        fieldsInputs.tel &&
        fieldsInputs.agree
          ? css`
              background-color: #65bc29;
            `
          : css`
              background-color: #dedede;
            `
      }
      disabled={
        isFirstFieldValid &&
        fieldsInputs.name &&
        fieldsInputs.tel &&
        fieldsInputs.agree
      }
      onClick={(evt) => {
        evt.preventDefault();
        action();
      }}
    >
      Отправить
    </button>
  </FormFieldset>
);

FormThirdField.propTypes = {
  action: PropTypes.func.isRequired,
  isFirstFieldValid: PropTypes.bool.isRequired,
  fieldsInputs: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    tel: PropTypes.string,
    message: PropTypes.string,
    agree: PropTypes.bool,
  }).isRequired,
};

export default FormThirdField;
