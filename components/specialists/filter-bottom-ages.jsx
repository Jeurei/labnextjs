import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FilterBottomAges = ({ action }) => {
  const [firstInputState, setFirstInputState] = useState(false);
  const [secondInputState, setSecondInputState] = useState(false);

  useEffect(() => {
    if (firstInputState && secondInputState) {
      action({ ages: 3 });
    } else if (secondInputState) {
      action({ ages: 1 });
    } else if (firstInputState) {
      action({ ages: 2 });
    } else {
      action({ ages: 0 });
    }
  }, [firstInputState, secondInputState]);

  return (
    <div className="filter__bottom-group filter__bottom-group--ages">
      <h3 className="filter__bottom-group-title">Возраст пациента</h3>
      <div className="filter__checkbox-group">
        <input
          type="checkbox"
          name="age-18"
          id="age-18"
          value="18"
          aria-label="Возраст больше 18"
          className="filter__input filter__input--checkbox"
          selected={firstInputState}
          onChange={() => {
            setFirstInputState(!firstInputState);
          }}
        />
        <label className="filter__label" htmlFor="age-18">
          Взрослый 18+
        </label>
      </div>
      <div className="filter__checkbox-group">
        <input
          type="checkbox"
          name="age"
          id="age"
          value="0"
          aria-label="Возраст меньше 18"
          className="filter__input filter__input--checkbox"
          selected={secondInputState}
          onChange={() => {
            setSecondInputState(!secondInputState);
          }}
        />
        <label className="filter__label" htmlFor="age">
          Детский
        </label>
      </div>
    </div>
  );
};

FilterBottomAges.propTypes = {
  action: PropTypes.func.isRequired,
};

export default FilterBottomAges;
