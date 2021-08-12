import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionInner from 'components/header/section-inner';
import Filter from './filter';
import SpecialistsCatalog from './specialists-catalog';

const filterArrayByCategory = (arr, category) => {
  if (!category) {
    return arr;
  }

  return arr.filter((el) => el.job.includes(category));
};

const filterArrayByName = (arr, name) => {
  if (!name) {
    return arr;
  }

  return arr.filter((el) => el.name === name);
};

const filterArrayByCity = (arr, city) => {
  if (!city) {
    return arr;
  }

  return arr.filter((el) => {
    for (let i = 0; i < el.adresses.length; i += 1) {
      if (el.adresses[i].city === city) return true;
    }
    return false;
  });
};

const filterArrayByAges = (arr, ages) => {
  if (!ages || ages === 3) {
    return arr;
  }

  return arr.filter((el) => el.ages === 3 || el.ages === ages);
};

const Specialists = ({ specialists }) => {
  const [specialistsArr, setSpecialistsArr] = useState([...specialists]);
  const [currentFilter, setCurrentFilter] = useState({
    category: '',
    name: '',
    city: '',
    adress: '',
    ages: '',
  });

  const onChangeFiltersFieldsHanlder = (obj) => {
    setCurrentFilter({ ...currentFilter, ...obj });
  };

  const specialistsArray = useMemo(() => Object.values(specialists));

  const filter = {
    specialistsCategrories: [
      ...new Set(
        specialistsArray.map((el) => el.specializations).map(JSON.stringify),
      ),
    ]
      .map(JSON.parse)
      .flat()
      .filter(Boolean),
    centers: specialistsArray
      .map(
        (el) =>
          el.centers && {
            value: el.centers.id,
            label: `${el.centers.city.label},${el.centers.address}`,
          },
      )
      .filter(Boolean),

    specialistsNames: specialists.map((el) => el.name),
  };

  useEffect(() => {
    setSpecialistsArr(specialists);
  }, [specialists]);

  //  TODO:Переписать

  useEffect(() => {
    setSpecialistsArr(
      filterArrayByAges(
        filterArrayByCity(
          filterArrayByCategory(
            filterArrayByName([...specialists], currentFilter.name),
            currentFilter.category,
          ),
          currentFilter.city,
        ),
        currentFilter.ages,
      ),
    );
  }, [currentFilter]);

  return (
    <SectionInner>
      <h1 className="main__title">Специалисты</h1>
      <Filter filter={filter} action={onChangeFiltersFieldsHanlder} />
      <SpecialistsCatalog specialists={specialistsArray} />
    </SectionInner>
  );
};

Specialists.propTypes = {
  specialists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      job: PropTypes.arrayOf(PropTypes.string),
      ages: PropTypes.string,
      price: PropTypes.string,
      adresses: PropTypes.arrayOf(
        PropTypes.shape({
          city: PropTypes.string,
          center: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string,
              adress: PropTypes.string,
            }),
          ),
        }),
      ),
      image: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => {
  const { specialists } = state;

  return { specialists };
};

export default connect(mapStateToProps, null)(Specialists);
