import { useTheme, css, keyframes } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { ReactComponent as FileIcon } from 'icons/file.svg';
import { ReactComponent as LinkIcon } from 'icons/link.svg';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormInput from 'components/common/Form-input';
import * as yup from 'yup';
import { inputMasksMap, telRegExp } from 'constants/constants';
import FormInvalidInput from 'components/common/form-invalid-input';
import InputMask from 'react-input-mask';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from 'components/common/PDF';
import { isNode } from 'utils/common';

const FormComponent = () => {
  const DEFAULT_FORM_STATE = {
    email: '',
    tel: '',
    comment: '',
  };

  const theme = useTheme();

  const showingAimation = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

  const DashedContainer = styled.div`
    position: relative;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    border-bottom: 1px dashed ${theme.colors.colorText.hex};

    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      border-bottom: none;
    }

    ${breakpointsMap.DESKTOP} {
      padding-top: 22px;
      padding-bottom: 22px;
    }
  `;

  const SpanContainer = styled('span')`
    font-size: 14px;
  `;

  const OrderInfo = () => (
    <>
      <DashedContainer>
        <SpanContainer
          css={css`
            margin-right: auto;
          `}
        >
          Анализ
        </SpanContainer>
        <span
          css={css`
            position: relative;
            font-size: 15px;
          `}
        >
          1 100 ₽
        </span>
      </DashedContainer>
      <DashedContainer>
        <SpanContainer
          css={css`
            margin-right: auto;
          `}
        >
          Взятие биоматериала
        </SpanContainer>
        <span
          css={css`
            position: relative;
            font-size: 15px;
          `}
        >
          1 100 ₽
        </span>
      </DashedContainer>
      <DashedContainer>
        <SpanContainer
          css={css`
            margin-right: auto;
          `}
        >
          Стоимость
        </SpanContainer>
        <span
          css={css`
            font-size: 26px;
          `}
        >
          1 100 ₽
        </span>
      </DashedContainer>
      <DashedContainer>
        <SpanContainer
          css={css`
            margin-right: auto;
          `}
        >
          Оплата
        </SpanContainer>
        <span
          css={css`
            position: relative;
            font-size: 14px;
          `}
        >
          Онлайн / В медцентре
        </span>
      </DashedContainer>
    </>
  );

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Это обязательное поле')
      .email('Неверный формат'),
    tel: yup
      .string()
      .matches(telRegExp, 'Номер телефона введен не полностью')
      .required('Это обязательное поле'),
    comment: yup
      .string()
      .min(5, 'Минимум 5 символов')
      .required('Это обязательное поле'),
  });

  return (
    <div
      css={css`
        order: -1;
        padding-top: 26px;

        ${breakpointsMap.DESKTOP} {
          width: 270px;
          align-self: flex-start;
          order: 0;
          box-shadow: ${theme.colors.boxShadow};
        }
      `}
    >
      <div
        css={css`
          padding-right: 18px;
          padding-bottom: 12px;
          padding-left: 18px;

          .form__input--textarea {
            height: 113px;
          }

          .form__input-checkbox-container {
            flex-direction: column;
          }
        `}
      >
        <OrderInfo />
        <DashedContainer>
          <Formik
            initialValues={DEFAULT_FORM_STATE}
            validationSchema={validationSchema}
          >
            {({ dirty, isValid, isSubmitting, handleChange, handleBlur }) => (
              <Form
                css={css`
                  width: 100%;

                  .form__input {
                    border-color: ${theme.colors.blue};
                    border-radius: 5px;
                    margin-bottom: 20px;
                  }

                  .form__invalid-input {
                    bottom: -5px;
                  }
                `}
              >
                <FormInput name="email" type="email">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ваш e-mail *"
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
                <div
                  css={css`
                    position: relative;
                  `}
                >
                  <Field
                    name="comment"
                    as="textarea"
                    placeholder="Комментарий *"
                    className="form__input form__input--textarea"
                  />
                  <ErrorMessage name="comment">
                    {(error) => <FormInvalidInput text={error} />}
                  </ErrorMessage>
                </div>
                <div
                  className="form__input-checkbox-container"
                  css={css`
                    margin-bottom: 9px;
                  `}
                >
                  <small
                    className="form__agreement-hint"
                    css={css`
                      font-size: 10px;
                      letter-spacing: -0.2px;
                      line-height: 14px;
                    `}
                  >
                    Нажимая на кнопку отправить вы соглашаетесь с нашей
                    политикой конфиденциальности
                  </small>
                </div>
                <button
                  type="submit"
                  className="button"
                  disabled={!dirty || isSubmitting || !isValid}
                  css={css`
                    width: 100%;
                    padding-top: 17px;
                    padding-bottom: 19px;
                    border: none;
                    margin-bottom: 23px;

                    &:disabled {
                      background-color: ${theme.colors.inactiveColor};
                    }
                  `}
                >
                  Оплатить
                </button>
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  <span
                    css={css`
                      position: relative;
                      padding-left: 48px;

                      &:before {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        width: 28px;
                        height: 28px;
                        background-image: ${theme.colors.linearGradient};
                        border-radius: 50%;
                        content: '';
                      }

                      &:after {
                        position: absolute;
                        top: 5px;
                        left: 5px;
                        display: block;
                        width: 18px;
                        height: 18px;
                        background-image: url('img/white-clock.svg');
                        content: '';
                      }
                    `}
                  >
                    Принимаем анализы
                    <br />
                    7:30-19:00
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </DashedContainer>
        <DashedContainer>
          <a
            href="/"
            css={css`
              position: relative;
              padding-bottom: 9px;
              margin-right: auto;
              font-size: 12px;

              &:before {
                position: absolute;
                bottom: 0;
                left: 0;
                display: block;
                width: 102px;
                height: 4px;
                background-image: ${theme.colors.linearGradient};
                content: '';
              }
            `}
          >
            Адреса и время работы <br />
            медицинских центров
          </a>
          <ul
            css={css`
              display: flex;
              padding: 0;
              margin: 0;
              list-style: none;
            `}
          >
            <li>
              {!isNode() ? (
                <PDFDownloadLink
                  css={css`
                    width: 23px;
                    height: 26px;
                  `}
                  fileName="check.pdf"
                  document={<PDF />}
                >
                  <FileIcon width="21px" height="27px" />
                </PDFDownloadLink>
              ) : null}
            </li>
            <li
              css={css`
                margin-left: 16px;
              `}
            >
              <a
                href="/"
                onClick={(evt) => {
                  evt.preventDefault();
                }}
                css={css`
                  position: relative;
                  width: 22px;
                  height: 22px;

                  &:hover:after {
                    position: absolute;
                    z-index: 10;
                    top: calc(-100% - 39px);
                    left: -106px;
                    display: flex;
                    width: 136px;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 0 8px 0;
                    animation: ${showingAimation} 0.3s forwards ease-in-out;
                    background-color: ${theme.colors.blue};
                    border-radius: 4px;
                    color: ${theme.colors.white};
                    content: 'Скопировать ссылку';
                    font-size: 11px;
                    text-align: center;
                    text-transform: none;
                  }

                  &:hover:before {
                    position: absolute;
                    z-index: 1;
                    top: -23px;
                    left: 10px;
                    display: flex;
                    width: 8px;
                    height: 8px;
                    animation: ${showingAimation} 0.3s forwards ease-in-out;
                    background-color: ${theme.colors.blue};
                    content: '';
                    transform: rotate(45deg);
                  }
                `}
              >
                <LinkIcon width="22px" height="22px" />
              </a>
            </li>
          </ul>
        </DashedContainer>
      </div>
    </div>
  );
};

export default FormComponent;
