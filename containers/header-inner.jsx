import PropTypes from 'prop-types';

const HeaderInner = ({ children }) => (
  <div className="header__inner">{children}</div>
);

HeaderInner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderInner;
