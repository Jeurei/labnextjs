import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CrossButton from './crossButton';
import FormFirstStep from './form-first-step';
import FormSecondStep from './form-second-step';
import FormThirdStep from './form-third-step';
import FormInfo from './form-info';
import FormConclusion from './form-conclusion';
import FormCompleted from './form-completed';

const formSteps = (action) => {
  return (
    <div className="specialist-form__steps-container">
      <ul className="specialist-form__steps">
        <li className="specialist-form__step">Конфигурация</li>
        <li className="specialist-form__step">Запись</li>
        <li className="specialist-form__step">Оплата</li>
      </ul>
      <CrossButton
        buttonClass="specialist-form__steps-close"
        label="Закрыть форму записи"
        action={action}
      />
    </div>
  );
};

const Form = ({ closeHandler }) => {
  const [formState, setFormState] = useState({
    firstField: {
      city: '',
      spec: '',
      center: '',
      doctorsName: '',
    },

    secondField: {
      date: '',
    },

    thirdField: {
      clientName: '',
      clientTel: '',
      clientEmail: '',
      payType: '',
      isAgreed: false,
    },
  });

  const [formCompleted, setFormCompletion] = useState(false);
  const [isFormValid, setFormValid] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const setInputs = (bool, obj) => {
    setFormValid(bool);
    setFormState({ ...formState, ...obj });
  };

  const stepsArr = [
    <FormFirstStep />,
    <FormSecondStep />,
    <FormThirdStep action={setInputs} />,
  ];

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    setFormCompletion(true);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const submitForm = (evt) => {
    evt.preventDefault();
  };

  const onButtonClickHandler = (evt, next = true) => {
    evt.preventDefault();

    if (currentStep === 2 && next) {
      submitForm(evt);
    }

    if (next) {
      nextStep();
    } else {
      prevStep();
    }
  };

  return (
    <section className="specialist__form-container">
      <div className="specialist__form-overlay" />
      {formCompleted ? (
        <FormCompleted />
      ) : (
        <form
          className="specialist__form specialist-form"
          onSubmit={(evt) => onSubmitHandler(evt)}
        >
          {formSteps(closeHandler)}
          {currentStep === 2 && <FormInfo />}
          <div className="specialist-form__form-steps-container">
            {stepsArr[currentStep]}
          </div>
          {currentStep === 1 && <FormInfo />}
          {currentStep === 2 && <FormConclusion />}
          <div className="specialist-form__bottom">
            <small className="specialist-form__steps-counter">
              Шаг {currentStep + 1} из 3
            </small>
            <div className="specialist-form__controls">
              <button
                type="button"
                className="specialist-form__control-button button"
                aria-label="Перейти на предыдущий шаг"
                disabled={!currentStep}
                onClick={(evt) => onButtonClickHandler(evt, false)}
              >
                Предыдущий шаг
              </button>
              <button
                type="button"
                className="specialist-form__control-button button"
                aria-label={currentStep === 2 ? 'Записаться' : 'Следующий шаг'}
                disabled={currentStep === 2 && !isFormValid}
                onClick={(evt) => onButtonClickHandler(evt, true)}
              >
                {currentStep === 2 ? 'Записаться' : 'Следующий шаг'}
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

Form.propTypes = {
  closeHandler: PropTypes.func.isRequired,
};

export default Form;
