import PropTypes from 'prop-types';

const CrossButton = ({ buttonClass, label, action, text = '' }) => (
  <button
    className={`${buttonClass} cross-button`}
    type="button"
    name="close-button"
    aria-label={label}
    onClick={action}
  />
);

CrossButton.defaultProps = {
  text: '',
};

CrossButton.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default CrossButton;
