import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from 'icons/header-search-icon.svg';

const SearchButton = ({ buttonClass, label, action = false }) => (
  <button
    className={buttonClass}
    type="button"
    aria-label={label}
    name="search-button"
  >
    <SearchIcon
      className="header-top__list-icon header-top__list-icon--search"
      width="19"
      height="19"
      fill="currentColor"
      strokeWidth="1px"
      onClick={
        action
          ? (evt) => {
              evt.preventDefault();
              action();
            }
          : () => null
      }
    />
  </button>
);

SearchButton.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default SearchButton;
