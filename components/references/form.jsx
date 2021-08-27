import { breakpointsMap } from 'constants/styles';
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import DatePicker from 'components/common/datePicker';
import { Formik, Form, Field, FieldArray } from 'formik';
import FormInput from 'components/common/Form-input';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import RefrencesDatePicker from './referencesDatePicker';

const Patient = ({ el, index, helpers }) => {
  const theme = useTheme();
  return (
    <>
      <div
        css={css`
          position: relative;
          display: flex;
          width: 100%;
          padding: 0.35em 0.75em 0.625em;
          padding-top: 22px;
          padding-bottom: 20px;
          background-color: #f7f7f7;

          &:before {
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 4px;
            background-image: ${theme.colors.linearGradient};
            content: '';
          }

          ${breakpointsMap.DESKTOP} {
            padding-right: 43px;
            padding-left: 43px;
          }
        `}
      >
        <h3
          css={css`
            position: relative;

            margin: 0;
            margin-right: auto;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Пациент
        </h3>
        <button
          type="button"
          css={css`
            position: relative;
            display: block;
            padding: 0;
            padding-left: 10px;
            border: none;
            border-bottom: 2px solid ${theme.colors.colorText.hex};
            appearance: none;
            background: transparent;
            font-size: 16px;
            font-weight: 500;

            &:hover,
            &:active {
              color: ${theme.colors.colorText.hex};
            }

            &:before,
            &:after {
              position: absolute;
              top: 3px;
              left: 0;
              display: block;
              width: 2px;
              height: 10px;
              background-color: ${theme.colors.colorText.hex};
              content: '';
            }

            &:before {
              transform: rotate(90deg);
            }
          `}
          aria-label="Добавить ещё пациента?"
          onClick={() =>
            helpers.push({
              name: '',
              surname: '',
              date: null,
              dateOfService: null,
              dontKnow: false,
              notShure: false,
            })
          }
        >
          Добавить пациента
        </button>
      </div>
      <fieldset
        action="post"
        css={css`
          padding-top: 30px;
          padding-bottom: 30px;
          border: none;
          background-color: ${theme.colors.white};

          ${breakpointsMap.DESKTOP} {
            padding-right: 38px;
            padding-left: 43px;
          }
        `}
      >
        <FormInput name={`patients[${index}].surname`}>
          <Field
            type="text"
            name={`patients[${index}].surname`}
            placeholder="Фамилия получателя услуги (полностью):"
            className="search__input"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 31px;
              border-radius: 4px;
            `}
          />
        </FormInput>
        <FormInput name={`patients[${index}].name`}>
          <Field
            type="text"
            name={`patients[${index}].name`}
            placeholder="Имя получателя услуги (полностью):"
            className="search__input"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 31px;
              border-radius: 4px;
            `}
          />
        </FormInput>
        <Field
          name={`patients[${index}].date`}
          component={RefrencesDatePicker}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
            }
          `}
        >
          <div
            css={css`
              position: relative;
              width: 100%;

              div {
                margin-bottom: 0;
              }

              .input__datePicker {
                div {
                  width: 100%;
                }
              }

              ${breakpointsMap.DESKTOP} {
                width: 50%;
              }
            `}
          >
            <Field
              name={`patients[${index}].serviceDate`}
              component={RefrencesDatePicker}
            />
          </div>
          <div
            css={css`
              width: 100%;
              margin-top: 20px;

              .filter__input--checkbox + .filter__label::before {
                top: 8px !important;
              }

              ${breakpointsMap.DESKTOP} {
                width: 50%;
                padding-left: 20px;
                margin-top: 0;
              }
            `}
          >
            <div
              className="filter__checkbox-group"
              css={css`
                width: 100%;
                margin-bottom: 23px;
              `}
            >
              <input
                type="checkbox"
                name="date-of-get-checkbox"
                id="dont-remember"
                value="dont-remember"
                aria-label="Не помню что обращался"
                className="filter__input filter__input--checkbox"
              />
              <label
                className="filter__label"
                htmlFor="dont-remember"
                css={css`
                  display: block;

                  &:before {
                    top: -9px !important;
                  }
                `}
              >
                не помню дату получения услуги
              </label>
            </div>
            <div
              className="filter__checkbox-group"
              css={css`
                width: 100%;
              `}
            >
              <input
                type="checkbox"
                name="date-of-get-checkbox"
                id="not-sure"
                value="not-sure"
                aria-label="Не уверен что обращался"
                className="filter__input filter__input--checkbox"
              />
              <label
                className="filter__label"
                htmlFor="not-sure"
                css={css`
                  display: block;
                  padding-top: 8px;

                  &:before {
                    top: 0 !important;
                  }

                  &:after {
                    top: 6px !important;
                  }

                  ${breakpointsMap.TABLET} {
                    padding-top: 0;

                    &:before {
                      top: -6px !important;
                    }

                    &:after {
                      top: 0 !important;
                    }
                  }
                `}
              >
                вообще не уверен, что обращался в медцентр Лабдиагностика
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

const FormComponent = () => {
  const formInitialState = {
    surname: '',
    name: '',
    patients: [
      {
        name: '',
        surname: '',
        date: null,
        dateOfService: null,
        dontKnow: false,
        notShure: false,
      },
    ],
  };
  const theme = useTheme();
  const [quantityOfPatients, setQuantityOfPatients] = useState(1);

  const PersonalInfo = () => {
    return (
      <fieldset
        css={css`
          border: none;
          padding-bottom: 20px;

          ${breakpointsMap.DESKTOP} {
            padding-right: 38px;
            padding-left: 43px;
          }
        `}
      >
        <FormInput name="surname">
          <Field
            type="text"
            name="surname"
            placeholder="Фамилия налогоплательщика (полностью):"
            className="search__input"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              margin-bottom: 31px;
              border-radius: 4px;
            `}
          />
        </FormInput>
        <FormInput name="name">
          <Field
            type="text"
            name="name"
            placeholder="Имя налогоплательщика (полностью):"
            className="search__input"
            css={css`
              width: 100%;
              padding-left: 28px;
              border: 1px solid ${theme.colors.blue};
              border-radius: 4px;
            `}
          />
        </FormInput>
      </fieldset>
    );
  };

  Patient.propTypes = {
    el: PropTypes.objectOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    helpers: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Это обязательное поле'),
    surname: yup.string().required('Это обязательное поле'),
  });

  return (
    <Formik
      initialValues={formInitialState}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form
          css={css`
            background-color: ${theme.colors.white};

            .form__invalid-input {
              bottom: 0;
            }
          `}
        >
          <legend
            css={css`
              padding-top: 23px;
              margin-bottom: 15px;
              font-size: 13px;
              font-weight: 500;

              ${breakpointsMap.DESKTOP} {
                padding-left: 43px;
              }
            `}
          >
            Заполните личные данные
          </legend>
          <PersonalInfo />
          <FieldArray
            name="patients"
            render={(helpers) =>
              values.patients.map((el, index) => (
                <Patient data={el} helpers={helpers} index={index} />
              ))
            }
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
