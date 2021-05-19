import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import PageBuilder from 'components/common/pageBuilder';
import SectionInner from 'containers/section-inner';

const Maintaince = ({ data }) => {
  return (
    <>
      <SectionInner>
        <h2
          className="main__title"
          css={css`
            margin-bottom: 40px;
          `}
        >
          {data.title}
        </h2>
      </SectionInner>
      {data.page && <PageBuilder data={data.page} />}
    </>
  );
};

Maintaince.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Maintaince;
