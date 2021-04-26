import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterBottomAdress from './filter-bottom-adress';
import FilterBottomAges from './filter-bottom-ages';
import FilterBottomCity from './filter-bottom-city';

const FilterBottom = ({ centresSelect, action, cities }) => {
  return (
    <div className="filter__bottom">
      <FilterBottomCity
        selectData={centresSelect.map((el) => ({
          value: Object.values(cities).find((elem) => el.city === elem.value)
            .value,
          label: Object.values(cities).find((elem) => el.city === elem.value)
            .label,
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
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { cities } = state;

  return { cities };
};

export default connect(mapStateToProps, null)(FilterBottom);
