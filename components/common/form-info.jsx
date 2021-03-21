import { getFlatArr } from 'components/utils/filter';
import { getSpecialistAdress } from 'components/utils/specialists';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormInfo = ({ specialist, userForm }) => {
  const {
    secondField: { day, mounth, year, time },
  } = userForm;
  return (
    <div className="specialist-form__form-info">
      <p className="specialist-form__form-info-text">
        Вы будете записаны к {specialist.job[0]}
      </p>
      <p className="specialist-form__form-info-text">
        {getFlatArr(getSpecialistAdress(specialist))[0]}
      </p>
      <p className="specialist-form__form-info-text">к {specialist.name}</p>
      {time && year && day && mounth && (
        <p className="specialist-form__form-info-text">
          {day - 1}.{mounth > 9 ? mounth + 1 : `0${mounth + 1}`}.{year} в{' '}
          {specialist.time[year][mounth][day - 2][time - 1]}
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
