import { css, useTheme } from '@emotion/react';

import PropTypes from 'prop-types';

const Paragraph = ({ text, withLinear = false, children }) => {
  const theme = useTheme();
  return (
    <p
      css={css`
        position: relative;
        margin-top: 26px;
        margin-bottom: 37px;
        line-height: 22px;
        word-wrap: pre;

        ${withLinear &&
        `&:before {
          position: absolute;
          left: -10px;
          display: block;
          width: 4px;
          height: 100%;
          background-image: ${theme.colors.linearGradient};
          content: '';
        }`}
      `}
    >
      {text || children}
    </p>
  );
};

Paragraph.defaultProps = {
  withLinear: false,
  text: '',
};

Paragraph.propTypes = {
  text: PropTypes.string,
  withLinear: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Paragraph;
