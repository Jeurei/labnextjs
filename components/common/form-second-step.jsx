import Picture from './picture';
import SpecialistShedule from '../specialists/specialist-shedule';

const FormSecondStep = () => {
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
            Мельникова Наталья Игоревна
          </h3>
          <p className="specialist-form__specialist-info-job">
            Должность: Дерматовенеролог
          </p>
          <p className="specialist-form__specialist-info-adress">
            Адрес: Пермь, пионерская 27{' '}
          </p>
        </div>
      </div>
      <SpecialistShedule />
    </div>
  );
};

export default FormSecondStep;
