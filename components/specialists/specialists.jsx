import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import {
  findSpecialistCenter,
  findSpecialistJobs,
} from 'components/utils/specialists';
import SectionInner from 'containers/section-inner';
import { filterDublicatesObjects, getFlatArr } from '../utils/filter';
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

const Specialists = ({ specialists, medcenters, specialities }) => {
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
  const filter = {
    specialistsCategrories: getFlatArr(
      [
        ...new Set(getFlatArr(specialists.map((el) => el.specializations))),
      ].map((el) => findSpecialistJobs(el, Object.values(specialities))),
    ),
    centers: getFlatArr(
      filterDublicatesObjects(
        getFlatArr(specialists.map((el) => el.centers)).map((el) => {
          return findSpecialistCenter(el, medcenters);
        }),
      ),
    ),
    specialistsNames: specialists.map((el) => el.name),
  };

  useEffect(() => {
    setSpecialistsArr(specialists);
  }, [specialists]);

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
      <SpecialistsCatalog specialists={specialistsArr} />
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
    }),
  ).isRequired,
  medcenters: PropTypes.arrayOf(PropTypes.object).isRequired,
  specialities: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  const { specialists, medcenters, specialities } = state;

  return { specialists, medcenters, specialities };
};

export default connect(mapStateToProps, null)(Specialists);
