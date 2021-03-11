import PropTypes from 'prop-types';
import Select from 'common/select';
import { filterDublicatesObjects, getFlatArr } from '../utils/filter';

const FilterBottomAdress = ({ selectData, action }) => {
  const onSelectChangeHandler = ({ value }) => {
    action({ adress: value });
  };

  const data = filterDublicatesObjects(
    getFlatArr(
      selectData.map((city) =>
        city.center.map((center) => ({
          value: `${city.city}-${center.adress}`,
          label: `${city.city}, ${center.adress}, ${center.name}`,
        })),
      ),
    ).filter(
      (v, i, a) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
    ),
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
};

export default FilterBottomAdress;
