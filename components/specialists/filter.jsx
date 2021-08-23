import PropTypes from 'prop-types';
import { filterDublicatesObjects } from 'utils/filter';
import FilterBottom from './filter-bottom';
import FilterTop from './filter-top';

const Filter = ({ specialistsArray, action }) => {
  const filter = {
    specialistsCategrories: [
      ...new Set(
        specialistsArray.map((el) => el.specializations).map(JSON.stringify),
      ),
    ]
      .map(JSON.parse)
      .flat()
      .filter(Boolean),
    centers: filterDublicatesObjects(
      specialistsArray
        .map(
          (el) =>
            el.centers && {
              value: el.centers.id,
              label: `${el.centers.city.label},${el.centers.address}`,
            },
        )
        .filter(Boolean),
    ),

    specialistsNames: specialistsArray.map((el) => el.name),
  };

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
  specialistsArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  action: PropTypes.func.isRequired,
};

export default Filter;
