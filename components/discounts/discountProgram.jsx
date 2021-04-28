import { css, useTheme } from '@emotion/react';
import React from 'react';
import { breakpointsMap } from 'constants/styles';

import PropTypes from 'prop-types';
import PageBuilder from 'components/common/pageBuilder';

const DiscountProgram = ({ data }) => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">{data.title}</h2>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
      >
        {data.page && <PageBuilder data={data.page} />}
      </div>
    </>
  );
};

DiscountProgram.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DiscountProgram;
