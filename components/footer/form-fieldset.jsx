import PropTypes from 'prop-types';

const FormFieldset = ({ children }) => (
  <fieldset className="form__input-group">{children}</fieldset>
);

FormFieldset.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormFieldset;
