import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { ReactComponent as Star } from 'icons/star.svg';

const Comment = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        padding-top: 35px;
        padding-bottom: 34px;
        margin-bottom: 31px;
        box-shadow: ${theme.colors.boxShadow};

        &:before {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 7px;
          background-image: ${theme.colors.linearGradient};
          content: '';
        }

        ${breakpointsMap.DESKTOP} {
          margin-right: auto;
        }
      `}
    >
      <div
        css={css`
          padding-left: 33px;
          margin-bottom: 13px;
        `}
      >
        {new Array(5).fill().map(() => (
          <Star
            fill="currentColor"
            css={css`
              color: #ddd;
              cursor: pointer;

              &:hover {
                color: #ffab1a;
              }
            `}
          />
        ))}
      </div>
      <div
        css={css`
          padding-left: 53px;
        `}
      >
        Вопрос
      </div>
      <div
        css={css`
          padding-top: 30px;
          padding-left: 79px;
          background-image: url('/img/quotes.svg');
          background-position: 50px 16px;

          background-repeat: no-repeat;
        `}
      >
        Ответ
      </div>
    </div>
  );
};

export default Comment;
