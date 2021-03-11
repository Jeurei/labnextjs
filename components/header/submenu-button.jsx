import PropTypes from 'prop-types';

const SubmenuButton = ({ action, label, additionClass }) => (
  <button
    type="button"
    className={`nav__submenu-button-container ${additionClass}`}
    aria-label={`Открыть подменю пункта ${label}`}
    onClick={() => {
      action();
    }}
  >
    <div className="nav__submenu-button" />
  </button>
);

SubmenuButton.defaultProps = {
  additionClass: '',
};

SubmenuButton.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  additionClass: PropTypes.string,
};

export default SubmenuButton;
