import PropTypes from 'prop-types';
import Select from 'common/select';
import { useFilterContext } from './specialists';

const FilterBottomAdress = ({ selectData, action }) => {
  const { address } = useFilterContext();

  const onSelectChangeHandler = (value) => {
    action({ target: { type: 'select', name: 'address', value } });
  };

  return (
    <div className="filter__bottom-group filter__bottom-group--adress">
      <Select
        selectClass="filter__bottom-adress-select"
        data={selectData}
        placeholder="Выберите адрес"
        action={onSelectChangeHandler}
        defaultValue={address}
      />
    </div>
  );
};

FilterBottomAdress.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.func.isRequired,
};

export default FilterBottomAdress;
