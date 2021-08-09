import { useTheme, css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import PropTypes from 'prop-types';

const CardInput = ({ label, id, value, onChange }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          margin: 0;
          -webkit-appearance: none;
        }

        input[type='number'] {
          -moz-appearance: textfield;
        }

        ${breakpointsMap.DESKTOP} {
          flex-direction: row;
          align-items: center;
        }
      `}
    >
      <label
        htmlFor={id}
        css={css`
          display: flex;
          flex-grow: 1;
        `}
      >
        {label}
      </label>
      <input
        type="number"
        className="search__input"
        value={value}
        onChange={onChange}
        name={id}
        maxLength="3"
        id={id}
        css={css`
          padding-left: 28px;
          border: 1px solid ${theme.colors.blue};
          border-radius: 4px;

          ${breakpointsMap.DESKTOP} {
            max-width: 280px;
          }
        `}
      />
    </div>
  );
};

CardInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardInput;
