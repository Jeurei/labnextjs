import { ReactComponent as MapMark } from 'icons/map-mark-icon.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { numWord } from 'components/utils/common';
import { PERM_ID } from 'constants/constants';

const MapLeftResults = ({ refProp, medcenters }) => {
  const arr = medcenters.map((el) => el.city === PERM_ID && el).filter(Boolean);

  const resultItem = (el) => {
    return (
      <li className="geo__result result" key={el.id}>
        <a
          href="./"
          className="result__link"
          aria-label="Показать на карте"
          onClick={(evt) => {
            evt.preventDefault();
            if (refProp.current) {
              refProp.current.panTo(
                el.coordinate.split(',').map((elem) => Number(elem)),
              );
            }
          }}
        >
          <MapMark
            className="geo__result-icon"
            width="8"
            height="8.4"
            fill="currentColor"
          />
          <p className="result__text">г. Пермь, {el.address}</p>
          <p className="result__options">
            Возможна оплата картой, есть вход с коляской
          </p>
        </a>
      </li>
    );
  };

  return (
    <>
      <h3 className="geo__results-title">
        Найдено <span className="geo__results-value">{arr.length}</span>{' '}
        {numWord(arr.length, ['отделение', 'отделения', 'отделений'])}
      </h3>
      <ul className="geo__results-list">{arr.map((el) => resultItem(el))}</ul>
    </>
  );
};

MapLeftResults.propTypes = {
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  medcenters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { medcenters } = state;

  return { medcenters };
};

export default connect(mapStateToProps, null)(MapLeftResults);
