import PropTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';
import { ReactComponent as CorrectIcon } from 'icons/check-circle-solid.svg';
import { ReactComponent as InCorrectIcon } from 'icons/times-solid.svg';
import { ErrorMessage, useFormikContext } from 'formik';

import FormInvalidInput from './form-invalid-input';

const FormInput = ({ name, children }) => {
  const theme = useTheme();
  const { touched, errors } = useFormikContext();

  return (
    <div className="form__input-container">
      {children}
      {touched[name] && !errors[name] && (
        <CorrectIcon
          fill="currentColor"
          width="23"
          height="23"
          css={css`
            position: absolute;
            top: 14px;
            right: 7px;
            color: ${theme.colors.green};
          `}
        />
      )}
      {touched[name] && errors[name] && (
        <InCorrectIcon
          fill="currentColor"
          width="23"
          height="23"
          css={css`
            position: absolute;
            top: 14px;
            right: 7px;
            color: ${theme.colors.red};
          `}
        />
      )}
      <ErrorMessage name={name}>
        {(error) => <FormInvalidInput text={error} />}
      </ErrorMessage>
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormInput;
