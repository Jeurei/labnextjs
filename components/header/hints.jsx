import PropTypes from 'prop-types';
import HintItem from './hints-item';

const Hints = ({ hints }) => {
  const MAX_QUANTITY_OF_HINTS_IN_GROUP = 3;
  const subarray = new Array(
    Math.ceil(hints.length / MAX_QUANTITY_OF_HINTS_IN_GROUP),
  )
    .fill()
    .map((el, i) =>
      hints.slice(
        i * MAX_QUANTITY_OF_HINTS_IN_GROUP,
        i * MAX_QUANTITY_OF_HINTS_IN_GROUP + MAX_QUANTITY_OF_HINTS_IN_GROUP,
      ),
    );

  return (
    <ul className="search-modal__search-examples">
      {subarray.map((el) => (
        <HintItem hints={el} />
      ))}
    </ul>
  );
};

Hints.propTypes = {
  hints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hints;
