import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import CrossButton from 'common/crossButton';
import { showing } from '../utils/animation';
import CitiesModalItem from './cities-modal-item';

const CitiesModal = ({ citiesData, closeHandler, setCurrentCity }) => {
  return (
    <div
      className="cities__modal"
      css={css`
        animation: ${showing} 0.2s ease-in-out;
      `}
    >
      <h3 className="cities__title">Выберете ваш населённый пункт</h3>
      <ul className="cities__list">
        {Object.values(citiesData).map((el) => (
          <CitiesModalItem cityName={el.value} action={setCurrentCity} />
        ))}
      </ul>
      <CrossButton
        buttonClass="cities__modal-close"
        label="Закрыть модальное окно с выбором города"
        action={closeHandler}
      />
    </div>
  );
};
CitiesModal.propTypes = {
  citiesData: PropTypes.objectOf(PropTypes.string).isRequired,
  closeHandler: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
};

export default CitiesModal;
