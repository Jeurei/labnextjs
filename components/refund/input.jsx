import { useTheme, css } from '@emotion/react';

import PropTypes from 'prop-types';

const Input = ({ type = 'text', placeholder, id }) => {
  const theme = useTheme();

  return (
    <>
      <input
        type={type}
        className="search__input"
        placeholder={placeholder}
        aria-label={`Введите ${placeholder}`}
        aria-describedby={id}
        css={css`
          width: 100%;
          padding-left: 28px;
          border: 1px solid ${theme.colors.blue};
          margin-bottom: 31px;
          border-radius: 4px;
        `}
      />
      <p className="visually-hidden" id={id}>
        {placeholder}
      </p>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
