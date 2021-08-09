import { breakpointsMap } from 'constants/styles';
import { css, useTheme } from '@emotion/react';
import React, { useState, useContext } from 'react';
import TextareaInput from 'components/common/textarea-input';
import CheckBox from 'components/common/checkBox';
import { postData } from 'api/';
import { serverRoutesMap } from 'Redux/actions/actions';
import {
  postTypesMap,
  telValidation,
  validateEmail,
} from 'constants/constants';
import { useRouter } from 'next/router';
import Input from './input';
import CardInputs from './cardInputs';
import RefundDatePicker from './refundDatePicker';

const DEFAULT_FORM_STATE = {
  name: '',
  tel: '',
  email: '',
  nums: {
    firstNums: '',
    lastNums: '',
  },
  date: null,
  msg: 'Краткое описание причины возврата:',
  personalAgreement: false,
  guarantee: false,
};

const FormContext = React.createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

const RefundForm = () => {
  const NUMS_LENGTH = 3;
  const { colors } = useTheme();
  const [formState, setFormState] = useState(DEFAULT_FORM_STATE);
  const [isFormValid, setFormValid] = useState(false);

  const router = useRouter();

  const validateNums = (str) => str.length === NUMS_LENGTH;

  const formValidationMap = {
    name: () => !!formState.name,
    tel: () => telValidation(formState.tel),
    email: () => validateEmail(formState.email),
    firstNums: () => validateNums(formState.nums.firstNums),
    lastNums: () => validateNums(formState.nums.lastNums),
    date: () => !!formState.date,
    msg: () => !!formState.msg,
    personalAgreement: () => formState.personalAgreement,
    guarantee: () => formState.guarantee,
  };

  const formContextValues = {
    formState,
    setFormState,
  };

  const inputHandler = (evt) => {
    const { target } = evt;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setFormState({ ...formState, [name]: value });
  };

  const handleDateChange = (data) => {
    setFormState({ ...formState, date: data });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    postData(
      serverRoutesMap.FORM,
      { formState, url: router.pathname },
      postTypesMap.REFUND_FORM,
    );
  };

  return (
    <form
      action="post"
      css={css`
        padding-bottom: 53px;
        margin-bottom: 29px;
        background-color: ${colors.white};
        box-shadow: ${colors.boxShadow};
      `}
      onSubmit={handleSubmit}
    >
      <FormContext.Provider value={formContextValues}>
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
          action="post"
          css={css`
            padding-top: 30px;
            padding-bottom: 30px;
            border: none;
            background-color: ${colors.white};

            ${breakpointsMap.DESKTOP} {
              padding-right: 38px;
              padding-left: 43px;
            }
          `}
        >
          <Input type="text" placeholder="Ваше ФИО" id="reciever-name" />
          <Input
            type="tel"
            placeholder="Контактный номер телефона:"
            id="reciever-tel"
          />
          <Input
            type="email"
            placeholder="Адрес электронной почты"
            id="reciever-email"
          />
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
              <RefundDatePicker
                value={formState.date}
                onChange={handleDateChange}
              />
              <Input
                type="number"
                placeholder="Сумма платежа:"
                id="reciever-price"
              />
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
                    value: formState.personalAgreement,
                    title:
                      'Принимаю условия пользовательского соглашения на обработку персональных данных',
                  }}
                  action={inputHandler}
                />
                <CheckBox
                  boxesData={{
                    name: 'guarantee',
                    value: formState.guarantee,
                    title: 'Достоверность данных гарантирую',
                  }}
                  action={inputHandler}
                />
              </div>
            </div>
            <div
              css={css`
                flex-grow: 3;

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
              `}
            >
              <TextareaInput
                id="msg"
                cols={20}
                rows={10}
                inputClass="reciver-form__textarea"
                placeholder="Краткое описание причины возврата:"
                label="Краткое описание причины возврата:"
                value={formState.msg}
                action={inputHandler}
              />
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
            className="button"
            type="submit"
            css={css`
              width: 100%;
              padding-top: 18px;
              padding-bottom: 18px;
              border: none;
              border-radius: 6px;
            `}
          >
            Отправить
          </button>
        </div>
      </FormContext.Provider>
    </form>
  );
};

export default RefundForm;
