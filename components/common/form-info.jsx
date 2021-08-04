import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormInfo = ({ specialist, userForm }) => {
  const {
    firstField: { spec },
    secondField: { day, mounth, year, time },
  } = userForm;

  const START = 0;
  const END = 5;

  return (
    <div className="specialist-form__form-info">
      <p className="specialist-form__form-info-text">
        Вы будете записаны к {spec.label}
      </p>
      <p className="specialist-form__form-info-text">
        {specialist.centers &&
          `${specialist.centers.city.label},${specialist.centers.address}`}
      </p>
      <p className="specialist-form__form-info-text">к {specialist.name}</p>
      {time && year && day && mounth && (
        <p className="specialist-form__form-info-text">
          {day - 1 > 9 ? day - 1 : `0${day - 1}`}.
          {mounth > 9 ? Number(mounth) + 1 : `0${Number(mounth) + 1}`}.{year} в{' '}
          {time.slice(START, END)}
        </p>
      )}
    </div>
  );
};

FormInfo.propTypes = {
  specialist: PropTypes.objectOf(PropTypes.object).isRequired,
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    userForm: { fields },
  } = state;

  return { userForm: fields };
};

export default connect(mapStateToProps, null)(FormInfo);
