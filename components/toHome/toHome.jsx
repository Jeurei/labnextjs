import { css } from '@emotion/react';
import React from 'react';

import PropTypes from 'prop-types';
import PageBuilder from 'components/common/pageBuilder';
import SectionInner from 'components/header/section-inner';

const ToHome = ({ data }) => {
  return (
    <SectionInner>
      <div
        css={css`
          padding-bottom: 39px;
        `}
      >
        <h2 className="main__title">{data.title}</h2>
        {data.page && <PageBuilder data={data.page} />}
      </div>
    </SectionInner>
  );
};

ToHome.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ToHome;
