import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Image from 'next/image';
import { css } from '@emotion/react';

const formatDate = (date) => {
  return format(new Date(date), 'd MMMM yyyy', { locale: ru });
};

const formatDateForHtml = (date) => {
  return format(new Date(date), 'yyyy-M-d', { locale: ru });
};

const Article = ({ data }) => {
  return (
    <a href="./" className="articles__link">
      <article className="articles__article article">
        <div className="article__text">
          <time
            className="article__time"
            dateTime={formatDateForHtml(data.date)}
          >
            {formatDate(data.date)}.
          </time>
          <h3 className="article__title">{data.title}</h3>
        </div>
        <div
          className={`article__img-container${
            data.isNew ? ' article__img-container--new' : ''
          }`}
          css={css`
            & > div {
              width: 100%;
            }
          `}
        >
          <Image
            src={data.image}
            width="301"
            height="250"
            alt="Изображение статьи"
            className="article__img"
          />
        </div>
      </article>
    </a>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    isNew: PropTypes.bool,
    isNews: PropTypes.bool,
    isBlog: PropTypes.bool,
    isUseful: PropTypes.bool,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
