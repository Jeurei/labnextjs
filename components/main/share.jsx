import PropTypes from 'prop-types';
import { ReactComponent as ArrowRight } from 'icons/arrrow-right.svg';
import Link from 'next/link';
import { differenceInDays, fromUnixTime } from 'date-fns';
import { formatDate, numWord } from 'components/utils/common';
import { css } from '@emotion/react';

const ShareBottom = ({ date }) => {
  const FORMAT_WAY = 'dd.MM.yyyy';

  const startDate = () => formatDate(date.start, FORMAT_WAY);

  const endDate = () => formatDate(date.end, FORMAT_WAY);

  return (
    <div className="share__bottom">
      <p className="share__bottom-text">
        Срок действия акции:
        <time
          dateTime={startDate()}
          css={css`
            padding-left: 5px;
          `}
        >
          {startDate()}
        </time>{' '}
        - <time dateTime={endDate()}>{endDate()}</time>
        <ArrowRight
          width="17"
          height="17"
          className="share__icon"
          fill="currentColor"
        />
      </p>
    </div>
  );
};

const Share = ({ data }) => {
  const dif = differenceInDays(
    fromUnixTime(data.finishDate),
    fromUnixTime(data.startDate),
  );

  return (
    <li className="shares__list-item">
      <Link href="/shares/[id]" as={`/shares/${data.id}`}>
        <a className="shares__link" aria-label="Перейти на страницу акции">
          <article
            className={`shares__article share share--robot ${
              dif > 0 && 'share--limited'
            }`}
            data-amount={`${dif} ${numWord(dif, ['день', 'дня', 'дней'])}`}
          >
            <div className="share__top">
              <h3 className="share__title">{data.title}</h3>
              <p className="share__text">{data.text}</p>
            </div>
            <ShareBottom
              date={{ start: data.startDate, end: data.finishDate }}
            />
          </article>
        </a>
      </Link>
    </li>
  );
};

ShareBottom.propTypes = {
  date: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }).isRequired,
};

Share.defaultProps = {
  data: {},
  id: undefined,
  startDate: PropTypes.string,
  finishDate: PropTypes.string,
};

Share.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
    startDate: PropTypes.string,
    finishDate: PropTypes.string,
  }),
};

export default Share;
