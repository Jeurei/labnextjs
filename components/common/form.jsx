import React, { useContext } from 'react';
import { postData } from 'api';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTheme, css } from '@emotion/react';
import { serverRoutesMap } from 'Redux/actions/actions';
import { inputMasksMap, postTypesMap, telRegExp } from 'constants/constants';
import { Formik, Form, Field } from 'formik';
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import FormFieldset from './form-fieldset';
import FileInput from './file-input';
import FormInput from './form-input';
import FormIosCheckbox from './form-ios-checkbox';
import InfoPopup from './infoPopup';

const formContext = React.createContext();
export const useFormContext = () => useContext(formContext);

const FormI = ({ title = '', wFile = false }) => {
  const FORM_DEFAULT_STATE = {
    email: '',
    name: '',
    tel: '',
    message: '',
    agree: false,
  };

  const router = useRouter();
  const theme = useTheme();

  const onSubmitHandler = async (values, { setSubmitting }) => {
    await postData(
      serverRoutesMap.FORM,
      { values, url: router.pathname },
      postTypesMap.FEEDBACK_FORM,
    );
    setSubmitting(false);
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Это обязательное поле'),
    tel: yup
      .string()
      .matches(telRegExp, 'Номер телефона введен не полностью')
      .required('Это обязательное поле'),
    email: yup.string().email('Неверный формат email'),
    agree: yup.bool().oneOf([true]),
  });

  return (
    <Formik
      initialValues={FORM_DEFAULT_STATE}
      onSubmit={onSubmitHandler}
      validationSchema={validationSchema}
    >
      {({
        isSubmitting,
        handleChange,
        handleBlur,
        isValid,
        dirty,
        setSubmitting,
        values,
      }) => (
        <Form className="form-section__form form">
          {title && (
            <legend
              css={css`
                width: 100%;
                margin-bottom: 42px;
                color: ${theme.colors.colorText.hex};
                font-size: 16px;
                font-weight: 500;
              `}
            >
              {title}
            </legend>
          )}
          <FormFieldset>
            <FormInput name="name" type="text">
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Ваше имя"
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
                placeholder="Ваш email"
                className="form__input"
              />
            </FormInput>
          </FormFieldset>
          <FormFieldset>
            <Field
              name="message"
              as="textarea"
              placeholder="Укажите интересующую
            вас услугу"
              className="form__input form__input--textarea"
            />
            {wFile && <FileInput />}
          </FormFieldset>
          <FormFieldset>
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
            <button
              className="form__button"
              type="submit"
              disabled={!dirty || isSubmitting || !isValid}
            >
              Отправить
            </button>
          </FormFieldset>
          {isSubmitting && <InfoPopup />}
        </Form>
      )}
    </Formik>
  );
};

FormI.defaultProps = {
  wFile: false,
  title: '',
};

FormI.propTypes = {
  wFile: PropTypes.bool,
  title: PropTypes.string,
};

export default FormI;
