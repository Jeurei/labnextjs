import { css, useTheme } from '@emotion/react';

import PropTypes from 'prop-types';

const LinearTextBlock = ({ children }) => {
  const theme = useTheme();
  return (
    <p
      css={css`
        display: flex;
        justify-content: center;
        padding-top: 21px;
        padding-bottom: 25px;
        background-image: ${theme.colors.linearGradient};
        color: ${theme.colors.white};
        text-align: center;
      `}
    >
      {children}
    </p>
  );
};

LinearTextBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinearTextBlock;
