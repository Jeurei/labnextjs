import PageBuilder from 'components/common/pageBuilder';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Illness = ({ data }) => {
  return (
    <>
      <h2
        className="main__title"
        css={css`
          margin-bottom: 40px;
        `}
      >
        {data.title}
      </h2>
      {data.page && <PageBuilder data={data.page} />}
    </>
  );
};

Illness.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Illness;
