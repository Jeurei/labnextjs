import { css, useTheme } from '@emotion/react';
import React from 'react';
import { ReactComponent as SheduleIcon } from 'icons/shedule.svg';
import { breakpointsMap } from 'constants/styles';
import Select from 'common/select';

import PropTypes from 'prop-types';
import PageBuilder from 'components/common/pageBuilder';

const ToHome = ({ data }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding-bottom: 39px;
      `}
    >
      <h2 className="main__title">{data.title}</h2>
      {data.page && <PageBuilder data={data.page} />}
    </div>
  );
};

ToHome.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ToHome;
