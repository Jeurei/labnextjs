import { useTheme, css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Image from 'next/image';

const Article = () => {
  const theme = useTheme();
  return (
    <article
      css={css`
        display: flex;
        width: 320px;
        min-height: 269px;
        flex-direction: column;
        padding-bottom: 25px;
        margin-bottom: 33px;
        box-shadow: ${theme.colors.boxShadow};

        .articlePage__article {
          width: 100%;
        }

        ${breakpointsMap.TABLET} {
          width: 340px;
          margin-right: auto;
        }

        ${breakpointsMap.DESKTOP} {
          width: 269px;
          margin-right: 30px;

          &:nth-of-type(4n) {
            margin-right: 0;
          }
        }
      `}
    >
      <Image
        src="/img/articlesimg.png"
        width="269"
        height="269"
        imgClass="articlePage__article"
      />
      <h3
        css={css`
          padding-top: 27px;
          padding-right: 21px;
          padding-left: 19px;
          margin: 0;
          margin-bottom: 12px;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        Врачи диагностировали у Байдена две трещины в костях ноги
      </h3>
      <div
        css={css`
          display: flex;
          padding-left: 34px;
        `}
      >
        <time
          css={css`
            position: relative;
            margin-right: 21px;

            &:before {
              position: absolute;
              top: 3px;
              left: -14px;
              display: block;
              width: 9px;
              height: 9px;
              background-image: url('img/clock.svg');
              background-repeat: no-repeat;
              background-size: 9px 9px;
              content: '';
            }
          `}
        >
          12:35
        </time>
        <span
          css={css`
            position: relative;

            &:before {
              position: absolute;
              top: 3px;
              left: -14px;
              display: block;
              width: 12px;
              height: 7.5px;
              background-image: url('img/views.svg');
              background-repeat: no-repeat;
              background-size: 12px 7.5px;
              content: '';
            }
          `}
        >
          532
        </span>
      </div>
    </article>
  );
};

export default Article;
