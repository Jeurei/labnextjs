import { css, useTheme } from '@emotion/react';

const NumericUl = () => {
  const theme = useTheme();
  return (
    <ul
      css={css`
        padding: 0;
        padding-left: 18px;

        counter-reset: counter;
        list-style: none;
      `}
    >
      <li
        css={css`
          position: relative;

          &:before {
            position: absolute;
            top: -2px;
            left: -23px;
            display: block;
            width: 18px;
            height: 18px;
            background-color: ${theme.colors.blue};
            border-radius: 50%;
            content: '';
          }

          &:after {
            position: absolute;
            top: -1px;
            left: -17px;
            display: block;
            width: 18px;
            height: 18px;
            color: ${theme.colors.white};
            content: counter(counter);
            counter-increment: counter;
          }
        `}
      >
        острый
      </li>
    </ul>
  );
};

export default NumericUl;
