import PropTypes from 'prop-types';
import { useTheme, css } from '@emotion/react';

const Dialog = ({ children }) => {
  const { colors } = useTheme();
  return (
    <div
      css={css`
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: ${colors.boxShadow};
      `}
    >
      {children}
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dialog;
