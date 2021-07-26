import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

const Load = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          width: 100%;
          flex-direction: column;

          & > span {
            align-self: center;
          }
        `}
      >
        <ClipLoader
          color="red"
          loading
          css={css`
            display: block;
            border: 2px solid red;
            margin: 0 auto;
          `}
          size={100}
        />
      </div>
    </>
  );
};

Load.defaultProps = {
  state: false,
  children: undefined,
};

Load.propTypes = {
  state: PropTypes.bool,
  children: PropTypes.node,
};

export default Load;
