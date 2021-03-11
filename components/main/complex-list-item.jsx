import PropTypes from 'prop-types';

const ComplexListItem = ({ text }) => (
  <li className="complex__list-item">{text}</li>
);

ComplexListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ComplexListItem;
