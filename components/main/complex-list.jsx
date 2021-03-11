import PropTypes from 'prop-types';
import ComplexListItem from './complex-list-item';

const ComplexList = ({ data }) => (
  <ul className="complex__list">
    {data.map((el) => (
      <ComplexListItem text={el} />
    ))}
  </ul>
);

ComplexList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ComplexList;
