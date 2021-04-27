import PropTypes from 'prop-types';
import { css } from '@emotion/react';

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
    cols={cols}
    rows={rows}
    className={inputClass}
    placeholder={placeholder}
    aria-label={label}
    value={value}
    css={css`
      height: 130px;
    `}
    onChange={(evt) => action(evt.currentTarget.value)}
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
