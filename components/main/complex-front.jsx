import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from 'constants/keys';
import { ReactComponent as ExpandIcon } from 'icons/expand-icon.svg';
import { ReactComponent as ArrowRight } from 'icons/arrow-right.svg';
import Image from 'next/image';
import ComplexList from './complex-list';

const ComplexFront = ({ action, data }) => {
  const MAX_QUANTITY_IN_LIST = 4;

  return (
    <div className="complex__front">
      <a
        href="some"
        className="complex__link"
        aria-label="Перейти на страницу с комплексом"
      >
        <Image
          src="/img/complex.png"
          width="270"
          height="193"
          layout="responsive"
          alt="Изображение комплекса"
          className="complex__img"
        />
      </a>
      <a href="some" className="complex__link">
        <h3 className="complex__title">{data.title}</h3>
      </a>
      <div className="complex__text-container">
        <p className="complex__text">Пояснение</p>
        <ComplexList data={data.list.slice(0, MAX_QUANTITY_IN_LIST)} />
      </div>
      <a
        href="some"
        className="complex__expand-button"
        aria-label="нажмите что развернуть все анализы"
        onClick={(evt) => {
          evt.preventDefault();
          action(true);
        }}
        onKeyDown={(evt) => {
          evt.preventDefault();
          if (evt.key === ENTER_KEY_CODE) action(true);
        }}
        role="button"
        tabIndex="0"
      >
        Показать все анализы
        <ExpandIcon
          className="complex__expand-icon"
          width="10"
          height="16"
          stroke="currentColor"
          fill="none"
        />
      </a>
      <div className="complex__bottom-container">
        <div className="complex__bottom-container-top">
          <p className="complex__price-text">Цена комплекса</p>
          <div className="complex__price-container">
            <span className="complex__price complex__price--old">
              {data.oldPrice} ₽
            </span>
            <span className="complex__price">{data.price} ₽</span>
          </div>
        </div>
        <div className="complex__bottom-container-bottom">
          <p className="complex__bottom-container-bottom-text">
            Включает 6 анализов
          </p>
          <ArrowRight
            className="complex__icon"
            width="26.5"
            height="26.5"
            fill="currentColor"
            stroke="currentColor"
          />
        </div>
      </div>
    </div>
  );
};

ComplexFront.propTypes = {
  action: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default ComplexFront;
