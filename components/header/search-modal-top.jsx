import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from 'constants/components';
import Search from 'common/search';
import Hints from './hints';

const SearchModalContainerTop = ({ hints }) => (
  <div className="search__container-top">
    <Search isModal />
    <Hints hints={hints} />
  </div>
);
SearchModalContainerTop.propTypes = {
  hints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { hints } = state;

  return { hints };
};

export default connect(mapStateToProps, null)(SearchModalContainerTop);
