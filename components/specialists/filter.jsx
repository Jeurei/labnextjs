import PropTypes from 'prop-types';
import FilterBottom from './filter-bottom';
import FilterTop from './filter-top';

const Filter = ({ filter, action }) => {
  return (
    <section className="specialists__filter filter">
      <FilterTop
        categories={filter.specialistsCategrories}
        names={filter.specialistsNames}
        action={action}
      />
      <FilterBottom centresSelect={filter.centers} action={action} />
    </section>
  );
};

Filter.propTypes = {
  filter: PropTypes.objectOf(PropTypes.array).isRequired,
  action: PropTypes.func.isRequired,
};

export default Filter;
