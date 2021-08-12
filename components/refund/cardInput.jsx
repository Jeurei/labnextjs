import { useTheme, css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import PropTypes from 'prop-types';
import { ReactComponent as CorrectIcon } from 'icons/check-circle-solid.svg';

const CardInput = ({ label, id, value, onChange, validation }) => {
  const MIN_NUMS_LENGTH = 3;
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        position: relative;

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
        className="form__input"
        value={value}
        onChange={onChange}
        name={id}
        maxLength="3"
        id={id}
        css={css`
          padding-left: 28px;
          border: 1px solid ${theme.colors.blue};
          border-radius: 4px;
          margin-bottom: 0 !important;

          ${breakpointsMap.DESKTOP} {
            max-width: 280px;
          }
        `}
      />
      {validation && value.length === MIN_NUMS_LENGTH && (
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
    </div>
  );
};

CardInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validation: PropTypes.bool.isRequired,
};

export default CardInput;
