import PropTypes from 'prop-types';
import { ReactComponent as ArrowRightIcon } from 'icons/arrrow-right.svg';
import { numberWithSpaces } from 'utils/common';
import { ReactComponent as CovidIcon } from 'public/img/covid.svg';
import { css } from '@emotion/react';

const ActualOffer = ({ data }) => {
  return (
    <li className="actual-offers__list-item actual-offer">
      <a
        href="some"
        className="actual-offer__link actual-offer__link--covid"
        aria-label="Перейти на страницу с предложением"
      >
        <CovidIcon
          width="30"
          height="30"
          css={css`
            position: absolute;
            top: 35%;
            left: 15px;
          `}
        />
        <ArrowRightIcon
          className="actual-offers__icon"
          width="16.5"
          height="16.5"
          fill="currentColor"
        />
      </a>
      <a
        href="some"
        className="actual-offer__container"
        aria-label="Перейти на страницу с предложением"
      >
        <div className="actual-offer__list-item-top">
          <h3 className="actual-offer__title">{data.title}</h3>
          <p className="actual-offer__text">{data.text}</p>
        </div>
        <div className="actual-offer__list-item-bottom">
          <span className="actual-offer__price">
            {numberWithSpaces(data.price)} ₽
          </span>
          <p className="actual-offer__price-text">
            Стоимость
            <br />
            комплекса
          </p>
        </div>
      </a>
    </li>
  );
};

ActualOffer.defaultProps = {
  data: {},
};

ActualOffer.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default ActualOffer;
