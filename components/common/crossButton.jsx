import PropTypes from 'prop-types';

const CrossButton = ({ buttonClass, label, action }) => (
  <button
    className={`${buttonClass} cross-button`}
    type="button"
    name="close-button"
    aria-label={label}
    onClick={action}
  />
);

CrossButton.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default CrossButton;
