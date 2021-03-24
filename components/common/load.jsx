import { css } from '@emotion/react';
import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

const Load = ({ state = false, children }) => {
  const [color, setColor] = useState('red');

  return (
    <>
      {state ? (
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
            color={color}
            loading={state}
            css={css`
              display: block;
              border: 2px solid red;
              margin: 0 auto;
            `}
            size={100}
          />
        </div>
      ) : (
        children
      )}
    </>
  );
};

Load.defaultProps = {
  state: false,
};

Load.propTypes = {
  state: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Load;
