import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserFormState } from 'Redux/actions/actions';
import { css, useTheme } from '@emotion/react';
import { ReactComponent as CorrectIcon } from 'icons/check-circle-solid.svg';
import { DEFAULT_USER_FORM_STATE } from 'constants/form';
import { allTrue } from 'components/utils/common';
import { getSpecialists } from 'api/';
import CrossButton from './crossButton';
import FormFirstStep from './form-first-step';
import FormSecondStep from './form-second-step';
import FormThirdStep from './form-third-step';
import FormInfo from './form-info';
import FormConclusion from './form-conclusion';
import FormCompleted from './form-completed';
import Load from './load';

const Form = ({ closeHandler, specialists, userForm, setFormState }) => {
  const [formCompleted, setFormCompletion] = useState(false);
  const [isFormValid, setFormValid] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const theme = useTheme();
  const store = useStore();
  const stepsChecksMap = {
    0:
      allTrue(userForm.fields.firstField) ||
      allTrue(userForm.fields.secondField),
    1:
      allTrue(userForm.fields.secondField) ||
      allTrue(userForm.fields.firstField),
    2:
      allTrue(userForm.fields.thirdField) ||
      allTrue(userForm.fields.secondField),
  };

  const formSteps = (action, onClickHandler) => {
    const onFirstClickHandler = () => {
      if (stepsChecksMap[0]) {
        onClickHandler(0);
      }
    };

    const onSecondClickHandler = () => {
      if (stepsChecksMap[1]) {
        onClickHandler(1);
      }
    };

    const onThirdClickHandler = () => {
      if (stepsChecksMap[2]) {
        onClickHandler(2);
      }
    };

    return (
      <div className="specialist-form__steps-container">
        <ul className="specialist-form__steps">
          <li className="specialist-form__step">
            <a
              css={css`
                position: relative;
                color: #fff;
              `}
              href="/"
              onClick={(evt) => {
                evt.preventDefault();
                onFirstClickHandler();
              }}
            >
              Конфигурация
              {allTrue(userForm.fields.firstField) && (
                <CorrectIcon
                  fill="currentColor"
                  width="23"
                  height="23"
                  css={css`
                    position: absolute;
                    top: -6px;
                    right: -39px;
                    color: ${theme.colors.green};
                  `}
                />
              )}
            </a>
          </li>
          <li className="specialist-form__step">
            <a
              css={css`
                position: relative;
                color: #fff;
              `}
              href="/"
              onClick={(evt) => {
                evt.preventDefault();
                onSecondClickHandler();
              }}
            >
              Запись
              {allTrue(userForm.fields.secondField) && (
                <CorrectIcon
                  fill="currentColor"
                  width="23"
                  height="23"
                  css={css`
                    position: absolute;
                    top: -6px;
                    right: -39px;
                    color: ${theme.colors.green};
                  `}
                />
              )}
            </a>
          </li>
          <li className="specialist-form__step">
            <a
              css={css`
                position: relative;
                color: #fff;
              `}
              href="/"
              onClick={(evt) => {
                evt.preventDefault();
                onThirdClickHandler();
              }}
            >
              Оплата
              {allTrue(userForm.fields.thirdField) && (
                <CorrectIcon
                  fill="currentColor"
                  width="23"
                  height="23"
                  css={css`
                    position: absolute;
                    top: -6px;
                    right: -35px;
                    color: ${theme.colors.green};
                  `}
                />
              )}
            </a>
          </li>
        </ul>
        <CrossButton
          buttonClass="specialist-form__steps-close"
          label="Закрыть форму записи"
          action={action}
        />
      </div>
    );
  };

  const onResetClickHandler = () => {
    setFormState(DEFAULT_USER_FORM_STATE);
  };

  const firstStepLastInputHandler = (obj) => {
    setFormState({ ...userForm, specialist: obj });
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    setFormCompletion(true);
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

  useEffect(() => {
    if (stepsChecksMap[0]) {
      setCurrentStep(2);
    } else if (allTrue(userForm.fields.firstField)) {
      setCurrentStep(1);
    }
  }, []);

  const onThirdStepHandlers = (bool, obj) => {
    setFormValid(bool);
    setFormState({
      ...userForm,
      fields: { ...userForm.fields, thirdField: { ...obj } },
    });
  };

  const stepsArr = [
    <FormFirstStep
      selects={userForm}
      specialists={specialists}
      action={setFormState}
      lastInputHandler={firstStepLastInputHandler}
      reset={onResetClickHandler}
      key="1"
    />,
    <FormSecondStep specialist={userForm.specialist} key="2" />,
    <FormThirdStep action={onThirdStepHandlers} userForm={userForm} key="3" />,
  ];

  useEffect(async () => {
    if (specialists.length === 0) {
      setLoading(true);
      try {
        await getSpecialists(store);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const onFormCompleteCloseClick = () => {
    closeHandler();
    setFormState(DEFAULT_USER_FORM_STATE);
  };

  return (
    <section className="specialist__form-container">
      <div className="specialist__form-overlay" />
      {formCompleted ? (
        <FormCompleted
          closeHandler={onFormCompleteCloseClick}
          specialist={userForm.specialist}
        />
      ) : (
        <form className="specialist__form specialist-form">
          {formSteps(closeHandler, setCurrentStep)}
          {currentStep === 2 && <FormInfo specialist={userForm.specialist} />}
          <div className="specialist-form__form-steps-container">
            <Load state={isLoading}>{stepsArr[currentStep]}</Load>
          </div>
          {currentStep === 1 && <FormInfo specialist={userForm.specialist} />}
          {currentStep === 2 && (
            <FormConclusion
              specialist={userForm.specialist}
              action={onThirdStepHandlers}
            />
          )}
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
                disabled={
                  (currentStep === 2 && !isFormValid) ||
                  !stepsChecksMap[currentStep]
                }
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
  specialists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.shape({
        value: PropTypes.number,
        label: PropTypes.string,
      }),
      job: PropTypes.arrayOf(PropTypes.string),
      ages: PropTypes.number,
      price: PropTypes.number,
      adresses: PropTypes.arrayOf(
        PropTypes.shape({
          city: PropTypes.string,
          center: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string,
              adress: PropTypes.string,
            }),
          ),
        }),
      ),
    }),
  ).isRequired,
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
  setFormState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { specialists, userForm } = state;

  return { specialists, userForm };
};

const mapDispatchToProps = (dispatch) => ({
  setFormState: bindActionCreators(setUserFormState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
