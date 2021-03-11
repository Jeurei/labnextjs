import PropTypes from 'prop-types';

const CitiesModalItem = ({ cityName, action }) => (
  <li className="cities__list-item">
    <button
      className="cities__button"
      type="button"
      onClick={() => {
        action(cityName);
      }}
      aria-label={`Выбрать город ${cityName}`}
    >
      {cityName}
    </button>
  </li>
);

CitiesModalItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default CitiesModalItem;
