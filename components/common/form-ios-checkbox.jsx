import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import FormInvalidInput from './form-invalid-input';

const FormIosCheckbox = ({ name, children }) => (
  <>
    <h3 className="form__input-chekbox-title">Задайте свой вопрос</h3>
    <div className="form__input-checkbox-container">
      <label htmlFor={name} className="form__label form__label--checkbox">
        {children}
        <ErrorMessage name={name}>
          {(error) => <FormInvalidInput text={error} />}
        </ErrorMessage>
        <span className="form__input-checkbox-span" />
      </label>
      <small className="form__agreement-hint">
        Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
        конфиденциальности
      </small>
    </div>
  </>
);

FormIosCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormIosCheckbox;
