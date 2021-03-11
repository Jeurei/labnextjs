import { ReactComponent as MarkIcon } from 'icons/mark-icon.svg';

const FormCompleted = () => {
  return (
    <div className="specialist-form__completed-container">
      <h3 className="specialist-form__completed-title">
        <MarkIcon className="specialist-form__completed-title-icon" />
      </h3>
      <p className="specialist-form__form-completed-text">
        Вы будете записаны к Акушер-гинеколог
      </p>
      <p className="specialist-form__form-completed-text">
        Мельникова Наталья Игоревна
      </p>
      <p className="specialist-form__form-completed-text">09.10.2020 в 8:00</p>
      <p className="specialist-form__form-completed-text">
        Вам на e-mail отправлено уведомление
      </p>
    </div>
  );
};

export default FormCompleted;
