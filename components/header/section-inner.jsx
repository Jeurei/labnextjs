import PropTypes from 'prop-types';

const SectionInner = ({ children }) => (
  <div className="section__inner">{children}</div>
);

SectionInner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionInner;
