import React, { useState, useMemo, useContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionInner from 'components/header/section-inner';
import Filter from './filter';
import SpecialistsCatalog from './specialists-catalog';

const filterContext = React.createContext();
export const useFilterContext = () => useContext(filterContext);

const Specialists = ({ specialists }) => {
  const SPECIALISTS_CARE_OF_EVERYBODY_VALUE = 3;
  const [currentFilter, setCurrentFilter] = useState({
    category: '',
    name: '',
    address: '',
    ages: '',
  });

  const onChangeFiltersFieldsHanlder = (evt) => {
    const { target } = evt;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setCurrentFilter({ ...currentFilter, [name]: value });
  };

  const filterHandler = (data) => {
    if (
      currentFilter.name &&
      data.name.label.toLowerCase() !== currentFilter.name.toLowerCase()
    )
      return false;
    if (
      currentFilter.category &&
      !data.specializations.find(
        (el) => el.value === currentFilter.category.value,
      )
    )
      return false;
    if (
      currentFilter.ages &&
      Number(data.ages) !== currentFilter.ages &&
      Number(data.ages) !== SPECIALISTS_CARE_OF_EVERYBODY_VALUE
    )
      return false;
    if (
      currentFilter.address &&
      data.centers &&
      !data.centers.id !== currentFilter.address.value
    )
      return false;
    return true;
  };

  const specialistsArray = useMemo(
    () => Object.values(specialists).filter(filterHandler),
    [currentFilter],
  );

  return (
    <SectionInner>
      <h1 className="main__title">Специалисты</h1>
      <filterContext.Provider value={currentFilter}>
        <Filter
          specialistsArray={specialists}
          action={onChangeFiltersFieldsHanlder}
        />
      </filterContext.Provider>
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
