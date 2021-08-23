import PropTypes from 'prop-types';

const searchListItem = (text, action = false) => {
  return (
    <li className="search__list-item">
      <a
        className="search__list-link"
        onMouseDown={(evt) => action(evt)}
        onClick={(evt) => evt.preventDefault()}
        href="/"
      >
        {text.label}
      </a>
    </li>
  );
};

const SearchList = ({ classname, data, value, action }) => {
  const onListElementClickHandler = (evt) => {
    evt.preventDefault();
    action(evt.target.textContent);
  };

  const onResetClickHandler = (evt) => {
    evt.preventDefault();
    action('');
  };

  const currArray = value
    ? data.filter((el) => {
        if (!value) {
          return el;
        }
        if (el.label.toLowerCase().includes(value.toLowerCase())) {
          return el;
        }
        return false;
      })
    : data;

  return !(currArray.length === 1 && currArray[0] === value) ? (
    <ul className={`${classname} search__list`}>
      {currArray.length
        ? currArray.map((el) => searchListItem(el, onListElementClickHandler))
        : searchListItem('Нет врачей с таким именем', onResetClickHandler)}
    </ul>
  ) : (
    ''
  );
};

SearchList.propTypes = {
  classname: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default SearchList;
