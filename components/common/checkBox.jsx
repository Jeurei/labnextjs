import { useTheme, css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

import PropTypes from 'prop-types';

const CheckBox = ({ boxesData, action }) => {
  const theme = useTheme();

  return (
    <fieldset
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0;
        border: none;
        margin-bottom: 31px;
        background-color: ${theme.colors.white};

        ${breakpointsMap.DESKTOP} {
          padding-right: 38px;
          padding-left: 43px;
        }
      `}
      key={boxesData.title}
    >
      <div
        css={css`
          width: 100%;
        `}
      >
        <div
          className="filter__checkbox-group"
          css={css`
            width: 100%;
            min-height: 100%;
          `}
        >
          <input
            type="checkbox"
            name={boxesData.name}
            id={boxesData.name}
            checked={boxesData.value}
            onChange={action}
            aria-label={boxesData.title}
            className="filter__input filter__input--checkbox"
          />
          <label
            className="filter__label"
            htmlFor={boxesData.name}
            css={css`
              display: flex;
              align-items: center;
              min-height: 31px;
            `}
          >
            {boxesData.title}
          </label>
        </div>
      </div>
    </fieldset>
  );
};

CheckBox.propTypes = {
  boxesData: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
  }).isRequired,
  action: PropTypes.func.isRequired,
};

export default CheckBox;
