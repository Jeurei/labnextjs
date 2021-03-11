import PropTypes from 'prop-types';
import Select from './select';

// TODO:тут чутьчть подругому

const FormFirstStep = ({ selects }) => {
  return (
    <div className="specialist-form__form-step form-step">
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Населенный пункт</h3>
        <Select selectClass="form__step-select" />
      </div>
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Специализация</h3>
        <Select selectClass="form__step-select" />
      </div>
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Медицинский центр</h3>
        <Select selectClass="form__step-select" />
      </div>
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Врач ФИО</h3>
        <Select selectClass="form__step-select" />
      </div>
    </div>
  );
};

FormFirstStep.propTypes = {
  selects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormFirstStep;
