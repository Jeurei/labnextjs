import PropTypes from 'prop-types';
import { getSpecialistAdress } from 'components/utils/specialists';
import { getFlatArr } from 'components/utils/filter';
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
            Должность: {specialist.job}
          </p>
          <p className="specialist-form__specialist-info-adress">
            Адрес: {getFlatArr(getSpecialistAdress(specialist))[0]}
          </p>
        </div>
      </div>
      <SpecialistShedule time={specialist.time} />
    </div>
  );
};

FormSecondStep.propTypes = {
  specialist: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FormSecondStep;
