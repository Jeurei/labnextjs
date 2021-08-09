import PropTypes from 'prop-types';

const FormConclusion = ({ specialist }) => {
  return (
    <div className="form-step__conclusion">
      <div className="form-step__conclusion-info-container">
        <div className="form-step__conclusion-info-container-text">
          <p className="form-step__conclusion-info-text">
            Первичный прием к {specialist.specializations[0].label}
          </p>
          <p className="form-step__conclusion-info-text">
            {specialist.name.label}
          </p>
        </div>
      </div>
      <span className="form-step__conclusion-price">{specialist.price} ₽</span>
    </div>
  );
};

FormConclusion.propTypes = {
  specialist: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FormConclusion;
