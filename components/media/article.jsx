import { useTheme, css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { format } from 'date-fns';
import Image from 'next/image';

import PropTypes from 'prop-types';

const formatDate = (date) => {
  return format(new Date(date), 'k:mm');
};

const Article = ({ data }) => {
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
        src={data.image}
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
        {data.title}
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
          {formatDate(data.date)}
        </time>
      </div>
    </article>
  );
};

Article.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Article;
