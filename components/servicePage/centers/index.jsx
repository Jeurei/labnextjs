import { css } from '@emotion/react';
import React, { useState } from 'react';
import FormIosCheckbox from 'components/common/form-ios-checkbox';
import { breakpointsMap } from 'constants/styles';
import PositionsCatalog from 'common/positions-catalog';

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
        <FormIosCheckbox
          action={() => console.log(true)}
          id="centers__checkbox"
          name="centers__checkbox"
          label="Чтобы увидеть взрослое отделение"
        />
        <p>Детское отделение</p>
      </div>
      <PositionsCatalog />
    </section>
  );
};

export default Centers;
