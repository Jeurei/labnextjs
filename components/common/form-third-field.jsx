import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import FormIosCheckbox from 'common/form-ios-checkbox';
import FormFieldset from './form-fieldset';
import { useFormContext } from './form';

const FormThirdField = ({ action, submit }) => {
  const {
    isAllValid,
    formFields: { agree },
  } = useFormContext();

  return (
    <FormFieldset>
      <h3 className="form__input-chekbox-title">Задайте свой вопрос</h3>
      <div className="form__input-checkbox-container">
        <FormIosCheckbox
          action={action}
          value={agree}
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
          isAllValid() ? 'button' : 'button-inactive'
        }`}
        type="submit"
        css={
          isAllValid()
            ? css`
                background-color: #65bc29;
              `
            : css`
                background-color: #dedede;
              `
        }
        disabled={!isAllValid()}
        onClick={(evt) => {
          evt.preventDefault();
          submit();
        }}
      >
        Отправить
      </button>
    </FormFieldset>
  );
};

FormThirdField.propTypes = {
  action: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default FormThirdField;
