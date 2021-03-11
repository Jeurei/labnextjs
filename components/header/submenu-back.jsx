import PropTypes from 'prop-types';
import SubmenuButton from './submenu-button';

const SubMenuBack = ({ action, title }) => (
  <div className="nav__submenu-controll-container">
    <SubmenuButton
      additionClass="nav__submenu-button-container--back"
      action={action}
    />
    <h3 className="nav_-submenu-title">{title}</h3>
  </div>
);

SubMenuBack.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SubMenuBack;
