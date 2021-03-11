import PropTypes from 'prop-types';
import Select from 'common/select';
import { filterDublicatesObjects } from '../utils/filter';

const FilterBottomCity = ({ selectData, action }) => {
  const onSelectChangeHandler = ({ value }) => {
    action({ city: value });
  };

  return (
    <div className="filter__bottom-group filter__bottom-group--city">
      <h3 className="filter__bottom-group-title">Медицинский центр</h3>
      <Select
        selectClass="filter__bottom-city-select"
        data={filterDublicatesObjects(selectData)}
        placeholder="Выберите город"
        action={onSelectChangeHandler}
      />
    </div>
  );
};

FilterBottomCity.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.func.isRequired,
};

export default FilterBottomCity;
