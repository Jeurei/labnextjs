import PropTypes from 'prop-types';
import Select from 'common/select';

const FilterBottomAdress = ({ selectData, action }) => {
  const onSelectChangeHandler = ({ value }) => {
    action({ adress: value });
  };

  return (
    <div className="filter__bottom-group filter__bottom-group--adress">
      <Select
        selectClass="filter__bottom-adress-select"
        data={selectData}
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
