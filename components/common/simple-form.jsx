import { css, useTheme } from '@emotion/react';
import FormFieldset from 'components/footer/form-fieldset';
import PropTypes from 'prop-types';
import FileInput from 'common/file-input';
import FormFirstField from './form-first-field';
import FormThirdField from './form-third-field';
import TextareaInput from './textarea-input';

const SimpleForm = ({ title, wFile = false }) => {
  const theme = useTheme();

  return (
    <form
      action="post"
      className="form-section__form form"
      css={css`
        flex-wrap: wrap;
        padding: 0;
        margin-bottom: 43px;
      `}
    >
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
      <FormFirstField action={() => console.log(true)} />
      <FormFieldset>
        <TextareaInput
          id="text"
          cols={30}
          rows={10}
          inputClass="form__input form__input--textarea"
          placeholder="Укажите интересующую вас услугу *"
          label="Поле дляя ввода вашего вопроса"
          action={() => console.log(true)}
          value=""
        />
        {wFile && <FileInput />}
      </FormFieldset>
      <FormThirdField
        action={() => console.log(true)}
        isFirstFieldValid
        fieldsInputs={{}}
      />
    </form>
  );
};

SimpleForm.defaultProps = {
  wFile: false,
};

SimpleForm.propTypes = {
  title: PropTypes.string.isRequired,
  wFile: PropTypes.bool,
};

export default SimpleForm;
