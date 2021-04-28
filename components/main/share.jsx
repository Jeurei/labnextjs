import PropTypes from 'prop-types';
import { ReactComponent as ArrowRight } from 'icons/arrrow-right.svg';
import Link from 'next/link';
import { format, differenceInDays } from 'date-fns';
import { ru } from 'date-fns/locale';

const formatDate = (date) => {
  return format(Number(date), 'dd.M.yyyy', { locale: ru });
};

const Share = ({ data }) => {
  return (
    <li className="shares__list-item">
      <Link href="/shares/[id]" as={`/shares/${data.id}`}>
        <a className="shares__link" aria-label="Перейти на страницу акции">
          <article
            className={`shares__article share share--robot ${
              differenceInDays(
                new Date(Number(data.finishDate)),
                new Date(Number(data.startDate)),
              ) > 0 && 'share--limited'
            }`}
            data-amount={differenceInDays(
              new Date(Number(data.finishDate)),
              new Date(Number(data.startDate)),
            )}
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
};

Share.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    finishDate: PropTypes.string.isRequired,
  }),
};

export default Share;
