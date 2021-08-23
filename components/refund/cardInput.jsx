import { useTheme, css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useFormikContext, ErrorMessage } from 'formik';
import { ReactComponent as CorrectIcon } from 'icons/check-circle-solid.svg';
import { ReactComponent as InCorrectIcon } from 'icons/times-solid.svg';
import FormInvalidInput from 'components/common/form-invalid-input';

const CardInput = ({ name, children }) => {
  const theme = useTheme();
  const { touched, errors } = useFormikContext();

  return (
    <div
      css={css`
        position: relative;
        width: 100%;

        .form__input {
          margin-bottom: 0;
        }

        .form__invalid-input {
          bottom: -30px;
        }
      `}
    >
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

CardInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};

export default CardInput;
