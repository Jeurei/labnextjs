import { css, useTheme } from '@emotion/react';

const CirclesUL = () => {
  const theme = useTheme();
  return (
    <ul
      css={css`
        padding: 0;
        padding-left: 18px;
        list-style: none;
      `}
    >
      <li
        css={css`
          position: relative;

          &:before {
            position: absolute;
            top: 5px;
            left: -18px;
            display: block;
            width: 7px;
            height: 7px;
            background-color: ${theme.colors.blue};
            border-radius: 50%;
            content: '';
          }
        `}
      >
        острый
      </li>
    </ul>
  );
};

export default CirclesUL;
