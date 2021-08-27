import { breakpointsMap } from 'constants/styles';
import { css, useTheme } from '@emotion/react';
import TextareaInput from 'components/common/textarea-input';
import CheckBox from 'components/common/checkBox';
import { postData } from 'api/';
import { serverRoutesMap } from 'Redux/actions/actions';
import { inputMasksMap, postTypesMap, telRegExp } from 'constants/constants';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import FormInput from 'components/common/Form-input';
import InputMask from 'react-input-mask';
import FormInvalidInput from 'components/common/form-invalid-input';
import InfoPopup from 'components/common/infoPopup';
import RefundDatePicker from './refundDatePicker';
import CardInputs from './cardInputs';

const DEFAULT_FORM_STATE = {
  name: '',
  tel: '',
  email: '',
  firstNums: '',
  lastNums: '',
  date: null,
  price: '',
  msg: '',
  personalAgreement: false,
  guarantee: false,
};

const RefundForm = () => {
  const NUMS_LENGTH = 3;
  const MINIMUS_MESSAGE_LENGTH = 10;
  const { colors } = useTheme();

  const router = useRouter();

  const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    tel: yup
      .string()
      .matches(telRegExp, 'Номер телефона введен не полностью')
      .required('Это обязательное поле'),
    email: yup
      .string()
      .email('Email введен неправильно')
      .required('Это обязательное поле'),
    firstNums: yup
      .string()
      .min(NUMS_LENGTH, 'Минимум 3 символа')
      .required('Это обязательное поле'),
    lastNums: yup
      .string()
      .min(NUMS_LENGTH, 'Минимум 3 символа')
      .required('Это обязательное поле'),
    date: yup
      .date()
      .min(new Date(), 'Дата должна быть как минимум сегодняшняя')
      .required('Это обязательное поле'),
    price: yup.string().required('Это обязательное поле'),
    msg: yup
      .string()
      .min(MINIMUS_MESSAGE_LENGTH, 'Опишите проблему, минимум 10 символов')
      .required('Это обязательное поле'),
    personalAgreement: yup.bool().oneOf([true]),
    guarantee: yup.bool().oneOf([true]),
  });

  const handleSubmit = async (values) => {
    const res = await postData(
      serverRoutesMap.FORM,
      { values, url: router.pathname },
      postTypesMap.REFUND_FORM,
    );
    return res;
  };

  return (
    <Formik
      initialValues={DEFAULT_FORM_STATE}
      validationSchema={validationSchema}
    >
      {({
        isSubmitting,
        handleChange,
        handleBlur,
        isValid,
        dirty,
        values,
        setSubmitting,
      }) => (
        <Form
          css={css`
            padding-bottom: 53px;
            margin-bottom: 29px;
            background-color: ${colors.white};
            box-shadow: ${colors.boxShadow};
          `}
        >
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
                background-image: ${colors.linearGradient};
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
              Анекта
            </h3>
          </div>
          <fieldset
            css={css`
              padding-top: 30px;
              padding-bottom: 30px;
              border: none;
              background-color: ${colors.white};

              .form__input {
                margin-bottom: 31px;
                border-color: ${colors.blue};
              }

              .form__invalid-input {
                bottom: 4px;
              }

              ${breakpointsMap.DESKTOP} {
                padding-right: 38px;
                padding-left: 43px;
              }
            `}
          >
            <FormInput name="name">
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Ваше ФИО"
                className="form__input"
              />
            </FormInput>
            <FormInput name="tel">
              <Field type="tel" name="tel">
                {({ field }) => (
                  <InputMask
                    {...field}
                    mask={inputMasksMap.tel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ваш телефон"
                    className="form__input"
                    id="tel"
                  />
                )}
              </Field>
            </FormInput>
            <FormInput name="email">
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Ваш email"
                className="form__input"
              />
            </FormInput>
            <CardInputs />
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
                  display: flex;
                  flex-direction: column;
                  flex-grow: 1;
                  justify-content: center;

                  ${breakpointsMap.DESKTOP} {
                    width: 150px;
                    margin-right: 40px;
                  }
                `}
              >
                <Field name="date" component={RefundDatePicker} />
                <FormInput name="price">
                  <Field
                    type="number"
                    placeholder="Сумма платежа:"
                    name="price"
                    id="price"
                    className="form__input"
                  />
                </FormInput>
                <div
                  css={css`
                    fieldset {
                      padding: 0;
                    }
                  `}
                >
                  <CheckBox
                    boxesData={{
                      name: 'personalAgreement',
                      title:
                        'Принимаю условия пользовательского соглашения на обработку персональных данных',
                    }}
                  />
                  <CheckBox
                    boxesData={{
                      name: 'guarantee',
                      title: 'Достоверность данных гарантирую',
                    }}
                  />
                </div>
              </div>
              <div
                css={css`
                  flex-grow: 3;
                  position: relative;

                  textarea {
                    width: 100%;
                    height: 100%;
                    border: 1px solid ${colors.blue};
                    padding-left: 24px;
                    padding-top: 29px;

                    &:focus,
                    &:active {
                      outline: none;
                    }
                  }

                  .form__invalid-input {
                    bottom: -30px;
                  }
                `}
              >
                <TextareaInput
                  name="msg"
                  cols={20}
                  rows={10}
                  inputClass="reciver-form__textarea"
                  placeholder="Краткое описание причины возврата:"
                />
                <ErrorMessage name="msg">
                  {(error) => <FormInvalidInput text={error} />}
                </ErrorMessage>
              </div>
            </div>
          </fieldset>
          <div
            css={css`
              width: 100%;
              padding-right: 39px;
              padding-left: 39px;
            `}
          >
            <button
              className="form__button button"
              type="submit"
              disabled={!dirty || isSubmitting || !isValid}
              css={css`
                width: 100%;
              `}
            >
              Отправить
            </button>
          </div>
          {isSubmitting && (
            <InfoPopup
              request={async () => handleSubmit(values)}
              closeHandler={() => setSubmitting(false)}
              errorMessage="Не удалось отправить форму"
            >
              <span>Ваша заявка успешно отправлена!</span>
            </InfoPopup>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RefundForm;
