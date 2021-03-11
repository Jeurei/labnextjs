import PropTypes from 'prop-types';
import FilterBottomAdress from './filter-bottom-adress';
import FilterBottomAges from './filter-bottom-ages';
import FilterBottomCity from './filter-bottom-city';

const FilterBottom = ({ centresSelect, action }) => {
  return (
    <div className="filter__bottom">
      <FilterBottomCity
        selectData={centresSelect.map((el) => ({
          value: el.city,
          label: el.city,
        }))}
        action={action}
      />
      <FilterBottomAdress selectData={centresSelect} action={action} />
      <FilterBottomAges action={action} />
    </div>
  );
};

FilterBottom.propTypes = {
  centresSelect: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.func.isRequired,
};

export default FilterBottom;
