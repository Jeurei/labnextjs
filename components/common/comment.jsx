import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { ReactComponent as Star } from 'icons/star.svg';

import PropTypes from 'prop-types';

const Comment = ({ data }) => {
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

          &:hover {
            .star {
              color: #ffab1a;
            }
          }
        `}
      >
        {new Array(5).fill().map((el, index) => (
          <Star
            className="star"
            fill={index <= data.rating ? '#FFAB1A' : '#ddd'}
          />
        ))}
      </div>
      <div
        css={css`
          padding-left: 33px;
        `}
      >
        <h3
          css={css`
            margin: 0;
            color: #4a4a4a;
            font-size: 12px;
            font-weight: 500;
          `}
        >
          {data.name}
        </h3>
        <small
          css={css`
            margin-bottom: 15px;
            font-size: 8px;
          `}
        >
          Посетитель медицинского центра «Лабдиагностика»
        </small>
      </div>
      <div
        css={css`
          padding-top: 15px;
          padding-left: 33px;
          font-size: 14px;
        `}
      >
        {data.review}
      </div>
      <div
        css={css`
          padding-top: 30px;
          padding-left: 59px;
          background-image: url('/img/quotes.svg');
          background-position: 35px 16px;

          background-repeat: no-repeat;
        `}
      >
        Ответ:
        <br />
        <small
          css={css`
            font-size: 8px;
          `}
        >
          От медицинского центра «Лабдиагностика»
        </small>
        <p
          css={css`
            padding-top: 15px;
            margin: 0;
          `}
        >
          {data.answer}
        </p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Comment;
