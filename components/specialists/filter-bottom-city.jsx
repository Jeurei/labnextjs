import PropTypes from 'prop-types';
import Select from 'common/select';
import { useFilterContext } from './specialists';

const FilterBottomCity = ({ selectData, action }) => {
  const { address } = useFilterContext();

  const onSelectChangeHandler = (value) => {
    action({ target: { type: 'select', name: 'address', value } });
  };

  return (
    <div className="filter__bottom-group filter__bottom-group--city">
      <h3 className="filter__bottom-group-title">Медицинский центр</h3>
      <Select
        selectClass="filter__bottom-city-select"
        data={selectData}
        placeholder="Выберите город"
        action={onSelectChangeHandler}
        defaultValue={address}
      />
    </div>
  );
};

FilterBottomCity.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.array).isRequired,
  action: PropTypes.func.isRequired,
};

export default FilterBottomCity;
