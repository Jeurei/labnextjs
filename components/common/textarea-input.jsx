import { Field } from 'formik';
import PropTypes from 'prop-types';

const TextareaInput = ({
  name,
  cols,
  rows,
  inputClass,
  placeholder,
  label,
}) => (
  <Field
    as="textarea"
    id={name}
    name={name}
    cols={cols}
    rows={rows}
    className={inputClass}
    placeholder={placeholder}
    aria-label={label}
  />
);

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  inputClass: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextareaInput;
