import PropTypes from 'prop-types';
import { ReactComponent as ArrowRight } from 'icons/arrrow-right.svg';
import Link from 'next/link';
import { format, differenceInDays, fromUnixTime } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { numWord } from 'components/utils/common';

const formatDate = (date) => {
  return format(fromUnixTime(date), 'dd.MM.yyyy', { locale: ru });
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
            <div className="share__bottom">
              <p className="share__bottom-text">
                Срок действия акции:
                <time dateTime={formatDate(data.startDate)}>
                  {formatDate(data.startDate)}
                </time>{' '}
                -{' '}
                <time dateTime={formatDate(data.finishDate)}>
                  {formatDate(data.finishDate)}
                </time>
                <ArrowRight
                  width="17"
                  height="17"
                  className="share__icon"
                  fill="currentColor"
                />
              </p>
            </div>
          </article>
        </a>
      </Link>
    </li>
  );
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
