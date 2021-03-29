import { css, useTheme } from '@emotion/react';

import PropTypes from 'prop-types';

const LinearBottomButton = ({ children }) => {
  const theme = useTheme();
  return (
    <a
      href="/"
      type="button"
      css={css`
        position: relative;
        display: block;
        padding-bottom: 5px;
        margin-right: 30px;
        background-color: transparent;
        text-align: left;

        &:hover,
        &:active {
          color: ${theme.colors.colorText.hex};
        }

        &:before {
          position: absolute;
          bottom: 0;
          display: block;
          width: 100%;
          height: 4px;
          background-color: ${theme.colors.inactiveColor};
          content: '';
        }
      `}
    >
      {children}
    </a>
  );
};

LinearBottomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinearBottomButton;
