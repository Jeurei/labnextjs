import PropTypes from 'prop-types';
import Hint from './hint';

const HintItem = ({ hints }) => (
  <li className="search-modal__search-examples-item">
    {hints.map((el) => (
      <Hint hint={el} />
    ))}
  </li>
);

HintItem.propTypes = {
  hints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HintItem;
