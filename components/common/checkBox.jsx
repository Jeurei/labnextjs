import { useTheme, css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { Field } from 'formik';

import PropTypes from 'prop-types';

const CheckBox = ({ boxesData }) => {
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
          <Field
            type="checkbox"
            name={boxesData.name}
            id={boxesData.name}
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
  }).isRequired,
};

export default CheckBox;
