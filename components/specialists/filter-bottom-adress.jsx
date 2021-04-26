import PropTypes from 'prop-types';
import Select from 'common/select';
import { connect } from 'react-redux';
import { filterDublicatesObjects, getFlatArr } from '../utils/filter';

const FilterBottomAdress = ({ selectData, action, cities }) => {
  const onSelectChangeHandler = ({ value }) => {
    action({ adress: value });
  };

  const data = filterDublicatesObjects(
    selectData.map((center) => ({
      value: `${cities[center.city].label}-${center.name}`,
      label: `${cities[center.city].label}, ${center.name}`,
    })),
  ).filter(
    (v, i, a) =>
      a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
  );

  return (
    <div className="filter__bottom-group filter__bottom-group--adress">
      <Select
        selectClass="filter__bottom-adress-select"
        data={data}
        placeholder="Выберете адрес (все)"
        action={onSelectChangeHandler}
      />
    </div>
  );
};

FilterBottomAdress.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { cities } = state;

  return { cities };
};

export default connect(mapStateToProps, null)(FilterBottomAdress);
