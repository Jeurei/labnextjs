import PropTypes from 'prop-types';

const TextareaInput = ({
  id,
  cols,
  rows,
  inputClass,
  placeholder,
  label,
  action,
  value,
}) => (
  <textarea
    id={id}
    name={id}
    cols={cols}
    rows={rows}
    className={inputClass}
    placeholder={placeholder}
    aria-label={label}
    value={value}
    onChange={(evt) => action(evt)}
  />
);

TextareaInput.propTypes = {
  id: PropTypes.string.isRequired,
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  inputClass: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextareaInput;
