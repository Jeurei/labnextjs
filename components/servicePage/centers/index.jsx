import { css } from '@emotion/react';
import React, { useState } from 'react';
import FormIosCheckbox from 'components/common/form-ios-checkbox';
import { breakpointsMap } from 'constants/styles';
import PositionsCatalog from 'common/positions-catalog';
import { Formik, Form, Field } from 'formik';

const Centers = () => {
  const [isAdults, setAdults] = useState(true);

  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 27px;

        ${breakpointsMap.TABLET} {
          align-items: flex-start;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <p
          css={css`
            margin-right: 15px;
          `}
        >
          Взрослое отделение
        </p>

        <label className="form__label form__label--checkbox">
          <input
            className="form__input"
            type="checkbox"
            onChange={(evt) => setAdults(evt.target.checked)}
            css={css`
              display: none;
            `}
          />
          <span className="form__input-checkbox-span" />
        </label>
        <p>Детское отделение</p>
      </div>
      <PositionsCatalog />
    </section>
  );
};

export default Centers;
