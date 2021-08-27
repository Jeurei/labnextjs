import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import InputMask from 'react-input-mask';
import { Formik, Form, Field } from 'formik';
import FormInput from 'components/common/Form-input';
import PropTypes from 'prop-types';
import { inputMasksMap, postTypesMap, telRegExp } from 'constants/constants';
import FormIosCheckbox from 'components/common/form-ios-checkbox';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { postData } from 'api/';
import { serverRoutesMap } from 'Redux/actions/actions';
import InfoPopup from 'components/common/infoPopup';

const TimePickerComponent = ({
  name,
  form: { setFieldValue },
  field: { value },
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        ampm={false}
        emptyLabel="Желаемое время"
        value={value}
        onChange={(val) => {
          setFieldValue('date', val);
        }}
        name={name}
        css={css`
          flex-grow: 1;
          div {
            min-width: 170px;
            height: 37px;
            padding-left: 10px;
            background-color: #fff;
          }

          input {
            color: rgba(74, 74, 74, 0.6);
            font-size: 12px;
          }
        `}
      />
    </MuiPickersUtilsProvider>
  );
};

TimePickerComponent.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
};

const MedCenterForm = () => {
  const theme = useTheme();
  const formInitialValues = {
    name: '',
    date: null,
    tel: '',
    agree: false,
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required('Это обязательно поле'),
    date: yup.date().required('Это обязательное поле'),
    tel: yup
      .string()
      .matches(telRegExp, 'Номер телефона введен не полностью')
      .required('Это обязательное поле'),
    agree: yup.bool().oneOf([true]),
  });
  const router = useRouter();

  const onSubmitHandler = async (values) => {
    const res = await postData(
      serverRoutesMap.FORM,
      { values, url: router.pathname },
      postTypesMap.MEDCENTERS_FORM,
    );

    return res;
  };

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          isSubmitting,
          dirty,
          isValid,
          setSubmitting,
          values,
        }) => (
          <Form
            css={css`
              display: flex;
              flex-direction: column;
              padding-top: 28px;
              padding-right: 35px;
              padding-bottom: 42px;
              padding-left: 35px;
              background-image: url('img/analyze-q-bg.png'),
                linear-gradient(
                  to left,
                  RGBA(250, 0, 235, 1),
                  RGBA(154, 102, 245, 1),
                  RGBA(43, 215, 255, 1)
                );
              background-position: 0 0;
              background-repeat: no-repeat;
              background-size: cover;
              color: ${theme.colors.white};
              @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
                background-image: url('img/analyze-q-bg@2x.png'),
                  linear-gradient(
                    to left,
                    RGBA(250, 0, 235, 1),
                    RGBA(154, 102, 245, 1),
                    RGBA(43, 215, 255, 1)
                  );
              }

              .form__input--tel {
                background-color: #fff;
                border: none;
                appearance: none;
                min-width: 276px;
                height: 37px;
              }

              .form__input-checkbox-container {
                margin-bottom: 0;
              }

              ${breakpointsMap.DESKTOP} {
                width: 600px;
                padding-right: 24px;
                padding-left: 24px;
              }
            `}
          >
            <legend
              css={css`
                width: 100%;
                margin-bottom: 25px;
                font-size: 22px;
                text-align: center;
              `}
            >
              Обратный звонок
            </legend>
            <div
              css={css`
                display: flex;
                flex-direction: column;

                .MuiInput-underline::before,
                .MuiInput-underline::after {
                  display: none;
                }

                .form__invalid-input {
                  bottom: -10px;
                }

                .form__input-container {
                  width: 50%;

                  svg {
                    top: 8px;
                  }

                  ${breakpointsMap.TABLET} {
                    margin-right: 16px;
                  }
                }

                ${breakpointsMap.TABLET} {
                  flex-direction: row;
                }
              `}
            >
              <FormInput name="name">
                <Field
                  type="text"
                  name="name"
                  placeholder="Ваше имя *"
                  css={css`
                    height: 37px;
                    flex-grow: 1;
                    padding-left: 14px;
                    border: none;
                    margin-bottom: 15px;
                    appearance: none;
                    min-width: 100%;
                    color: ${theme.colors.colorText.hex};
                  `}
                />
              </FormInput>
              <Field name="date" component={TimePickerComponent} />
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 15px;

                ${breakpointsMap.TABLET} {
                  flex-direction: row;
                }

                .form__input-container {
                  margin-right: 20px;

                  svg {
                    top: 8px;
                  }
                }

                .medCenter__form-tel {
                  min-width: 264px;
                  height: 37px;

                  &:placeholder-shown {
                    color: rgba(74, 74, 74, 0.6);
                  }
                }
              `}
            >
              <div
                css={css`
                  .form__invalid-input {
                    bottom: -26px;
                  }
                `}
              >
                <FormInput name="tel">
                  <Field type="tel" name="tel">
                    {({ field }) => (
                      <InputMask
                        {...field}
                        mask={inputMasksMap.tel}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Телефон"
                        className="form__input form__input--tel"
                        id="tel"
                      />
                    )}
                  </Field>
                </FormInput>
              </div>
              <FormIosCheckbox name="agree">
                <Field
                  type="checkbox"
                  className="form__input form__input--checkbox"
                  id="agree"
                  name="agree"
                  aria-label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
                  конфиденциальности"
                />
              </FormIosCheckbox>
            </div>
            <div
              css={css`
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
              `}
            >
              <small
                css={css`
                  font-size: 9px;
                `}
              >
                Звонки обрабатываются по будням с 08.00 до 20.00
              </small>
              <button
                className="button"
                type="submit"
                aria-label="Отправить форму"
                disabled={!dirty || isSubmitting || !isValid}
                onClick={() => setSubmitting(true)}
                css={css`
                  width: 210px;
                  align-self: center;
                  padding-top: 15px;
                  padding-bottom: 17px;
                  border-radius: 6px;

                  &:disabled {
                    background-color: ${theme.colors.inactiveColor};
                  }
                `}
              >
                Отправить
              </button>
            </div>
            {isSubmitting && (
              <InfoPopup
                request={async () => onSubmitHandler(values)}
                closeHandler={() => setSubmitting(false)}
                errorMessage="Не удалось отправить форму"
              >
                <span>Ваша заявка успешно отправлена!</span>
              </InfoPopup>
            )}
          </Form>
        )}
      </Formik>
      <form action="post" />
    </div>
  );
};

export default MedCenterForm;
