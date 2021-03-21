import { getFlatArr } from 'components/utils/filter';
import PropTypes from 'prop-types';
import {
  getAllSpecialistsAdressesArray,
  getSpecialistCities,
  getSpecialistsCitiesArr,
  getSpecialistsJobsArray,
  getSpecialistsNamesArray,
  getSpecialistCenters,
} from 'components/utils/specialists';
import { useEffect, useState } from 'react';
import Select from './select';

// TODO:тут чутьчть подругому

const FormFirstStep = ({ selects, specialists, action, lastInputHandler }) => {
  const ONLINE_SELECT_TYPE = 'online';
  const [currentArr, setCurrentArr] = useState(specialists);

  const firstSelectData = [
    { value: 'offline', label: 'В клинике' },
    { value: 'online', label: 'Online' },
  ];

  const filterArrByCity = (arr) => {
    return arr.filter((el) =>
      selects.fields.firstField.city
        ? getSpecialistCities(el).includes(selects.fields.firstField.city)
        : el,
    );
  };

  const filterArrBySpec = (arr) => {
    return arr.filter((el) =>
      selects.fields.firstField.spec
        ? el.job.includes(selects.fields.firstField.spec)
        : el,
    );
  };

  const filterArrByCenter = (arr) => {
    return arr.filter((el) =>
      selects.fields.firstField.center
        ? getFlatArr(getSpecialistCenters(el)).includes(
            selects.fields.firstField.center,
          )
        : el,
    );
  };

  const filterArrByName = (arr) => {
    return arr.filter((el) =>
      selects.fields.firstField.doctorsName
        ? el.name === selects.fields.firstField.doctorsName
        : el,
    );
  };

  const secondSelectData = getSpecialistsCitiesArr(currentArr).map((el) => ({
    value: el,
    label: el,
  }));

  const thirdSelectData = getSpecialistsJobsArray(currentArr).map((el) => ({
    value: el,
    label: el,
  }));

  const fourthSelectData = getAllSpecialistsAdressesArray(currentArr).map(
    (el) => ({
      value: el,
      label: el,
    }),
  );

  const fifthSelectData = getSpecialistsNamesArray(currentArr).map((el) => ({
    value: el,
    label: el,
  }));

  useEffect(() => {
    setCurrentArr(
      filterArrByName(
        filterArrByCenter(filterArrBySpec(filterArrByCity([...specialists]))),
      ),
    );
  }, [selects]);

  if (
    currentArr.length === 1 &&
    JSON.stringify(currentArr[0]) !== JSON.stringify(selects.specialist)
  ) {
    lastInputHandler(currentArr[0]);
  }

  const onChangeHandler = (obj) => {
    action(obj);
  };

  return (
    <div className="specialist-form__form-step form-step">
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Тип записи</h3>
        <Select
          selectClass="form__step-select"
          placeholder="Выберите тип записи"
          data={firstSelectData}
          defaultValue={
            selects.fields.firstField.type
              ? firstSelectData.find(
                  (el) => el.value === selects.fields.firstField.type,
                )
              : firstSelectData[0]
          }
          action={(value) =>
            onChangeHandler({
              fields: {
                ...selects.fields,
                firstField: { ...selects.fields.firstField, type: value.value },
              },
            })
          }
        />
      </div>
      {selects.fields.firstField.type !== ONLINE_SELECT_TYPE && (
        <div className="form-step__select-container">
          <h3 className="form-step__select-title">Населенный пункт</h3>
          <Select
            selectClass="form__step-select"
            placeholder="Выберите населенный пункт"
            data={secondSelectData}
            defaultValue={
              selects.fields.firstField.city
                ? {
                    value: selects.fields.firstField.city,
                    label: selects.fields.firstField.city,
                  }
                : {}
            }
            action={(value) =>
              onChangeHandler({
                fields: {
                  ...selects.fields,
                  firstField: {
                    ...selects.fields.firstField,
                    city: value.value,
                  },
                },
              })
            }
          />
        </div>
      )}
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Специализация</h3>
        <Select
          selectClass="form__step-select"
          placeholder="Выберите специализацию"
          defaultValue={
            selects.fields.firstField.spec
              ? {
                  value: selects.fields.firstField.spec,
                  label: selects.fields.firstField.spec,
                }
              : {}
          }
          data={thirdSelectData}
          action={(value) =>
            onChangeHandler({
              fields: {
                ...selects.fields,
                firstField: { ...selects.fields.firstField, spec: value.value },
              },
            })
          }
        />
      </div>
      {selects.fields.firstField.type !== ONLINE_SELECT_TYPE && (
        <div className="form-step__select-container">
          <h3 className="form-step__select-title">Медицинский центр</h3>
          <Select
            selectClass="form__step-select"
            placeholder="Выберите медицинский центр"
            defaultValue={
              selects.fields.firstField.center
                ? {
                    value: selects.fields.firstField.center,
                    label: selects.fields.firstField.center,
                  }
                : {}
            }
            data={fourthSelectData}
            action={(value) =>
              onChangeHandler({
                fields: {
                  ...selects.fields,
                  firstField: {
                    ...selects.fields.firstField,
                    center: value.value,
                  },
                },
              })
            }
          />
        </div>
      )}
      <div className="form-step__select-container">
        <h3 className="form-step__select-title">Врач ФИО</h3>
        <Select
          selectClass="form__step-select"
          placeholder="Выберите врача"
          defaultValue={
            selects.fields.firstField.doctorsName || selects.specialist.name
              ? {
                  value:
                    selects.specialist.name ||
                    selects.fields.firstField.doctorsName,
                  label:
                    selects.specialist.name ||
                    selects.fields.firstField.doctorsName,
                }
              : {}
          }
          data={fifthSelectData}
          action={(value) =>
            onChangeHandler({
              fields: {
                ...selects.fields,
                firstField: {
                  ...selects.fields.firstField,
                  doctorsName: value.value,
                },
              },
            })
          }
        />
      </div>
    </div>
  );
};

FormFirstStep.propTypes = {
  action: PropTypes.func.isRequired,
  specialists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      job: PropTypes.arrayOf(PropTypes.string),
      ages: PropTypes.number,
      price: PropTypes.number,
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
  selects: PropTypes.objectOf(PropTypes.object).isRequired,
  lastInputHandler: PropTypes.func.isRequired,
};

export default FormFirstStep;
