import PropTypes from 'prop-types';

import Picture from './picture';
import SpecialistShedule from '../specialists/specialist-shedule';

const FormSecondStep = ({ specialist }) => {
  return (
    <div className="specialist-form__form-step form-step">
      <div className="specialist-form__specialist-info-container">
        <Picture
          src="img/spec-photo"
          alt="Фотография выбранного врача"
          imgClass="specialist-form__specialist-info-img"
          containerClass="specialist-form__specialist-info-img-container"
        />
        <div className="specialist-form__specialist-info">
          <h3 className="specialist-form__specialist-info-name">
            {specialist.name}
          </h3>
          <p className="specialist-form__specialist-info-job">
            Должность: {specialist.specializations.map((el) => el.label)}
          </p>
          <p className="specialist-form__specialist-info-adress">
            Адрес:{' '}
            {specialist.centers &&
              `${specialist.centers.city.label},${specialist.centers.address}`}
          </p>
        </div>
      </div>
      <SpecialistShedule specialist={specialist} />
    </div>
  );
};

FormSecondStep.propTypes = {
  specialist: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FormSecondStep;
