import PropTypes from 'prop-types';

const MainContainer = ({ children }) => (
  <main className="main">{children}</main>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
