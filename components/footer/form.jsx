import React, { useState } from 'react';
import SectionInner from 'containers/section-inner';
import FormFieldset from './form-fieldset';
import FormFirstField from './form-first-field';
import FormThirdField from './form-third-field';
import TextareaInput from './textarea-input';

// TODO: ввод должен сохранятся междустранично но покка страниц
// TODO: если можно отправить и фокус на инпуте с имейлом и он был верным а стал не верным можно отправить неправильный имейл

const Form = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    name: '',
    tel: '',
    message: '',
    agree: false,
  });

  const [isFieldsValid, setIsFieldsValid] = useState({
    isFirstFieldValid: false,
  });

  const firstFieldValidHandler = (bool, inputs) => {
    setIsFieldsValid({ ...isFieldsValid, isFirstFieldValid: bool });
    setFormFields({ ...formFields, ...inputs });
  };

  const messageTypeHandler = (value) => {
    setFormFields({ ...formFields, message: value });
  };

  const checkboxChangeHandler = (bool) => {
    setFormFields({ ...formFields, agree: bool });
  };

  const onSubmitHandler = () => {
    // TODO: пока сервера нет но тут будет диспатч
  };

  return (
    <section className="footer__section footer__section--form section form-section">
      <SectionInner>
        <h2 className="section__title">Задайте свой вопрос</h2>
        <form action="post" className="form-section__form form">
          <FormFirstField action={firstFieldValidHandler} />
          <FormFieldset>
            <TextareaInput
              id="text"
              cols={30}
              rows={10}
              inputClass="form__input form__input--textarea"
              placeholder="Укажите интересующую вас услугу *"
              label="Поле дляя ввода вашего вопроса"
              action={messageTypeHandler}
              value={formFields.message}
            />
          </FormFieldset>
          <FormThirdField
            action={checkboxChangeHandler}
            isFirstFieldValid={isFieldsValid.isFirstFieldValid}
            fieldsInputs={formFields}
          />
        </form>
      </SectionInner>
    </section>
  );
};

export default Form;
