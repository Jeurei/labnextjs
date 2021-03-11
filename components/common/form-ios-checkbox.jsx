import PropTypes from 'prop-types';

const FormIosCheckbox = ({ action, id, name, label }) => (
  <label htmlFor={id} className="form__label form__label--checkbox">
    <input
      type="checkbox"
      className="form__input form__input--checkbox"
      id={id}
      name={name}
      aria-label={label}
      onChange={(evt) => action(evt.currentTarget.checked)}
    />
    <span className="form__input-checkbox-span" />
  </label>
);

FormIosCheckbox.propTypes = {
  action: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormIosCheckbox;
