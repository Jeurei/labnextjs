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
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import ReactSelect from 'react-select';
import Select from './select';

import CrossButton from './crossButton';

const FormFirstStep = ({
  selects,
  specialists,
  action,
  lastInputHandler,
  reset,
}) => {
  const ONLINE_SELECT_TYPE = 'online';
  const [currentArr, setCurrentArr] = useState(specialists);
  const ref = useRef();

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
      <div
        className="form-step__select-container"
        css={css`
          position: relative;
        `}
      >
        <h3 className="form-step__select-title">Тип записи</h3>
        {(selects.fields.firstField.city ||
          selects.fields.firstField.spec ||
          selects.fields.firstField.center ||
          selects.fields.firstField.doctorsName) && (
          <button
            className="form__first-step-reset cross-button"
            type="button"
            name="close-button"
            onClick={reset}
            css={css`
              right: 0;
              width: auto;
              padding-right: 20px;

              &::before,
              &::after {
                right: 8px;
                left: auto;
              }
            `}
          >
            Сбросить
          </button>
        )}
        <Select
          selectClass="form__step-select"
          placeholder="Выберите тип записи"
          ref={ref}
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
          <ReactSelect
            className="form__step-select"
            classNamePrefix="select"
            noOptionsMessage={() => 'Не найдено'}
            placeholder="Выберите населенный пункт"
            isDisabled={selects.fields.firstField.city}
            options={secondSelectData}
            value={
              selects.fields.firstField.city
                ? {
                    value: selects.fields.firstField.city,
                    label: selects.fields.firstField.city,
                  }
                : null
            }
            onChange={(value) =>
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
        <ReactSelect
          className="form__step-select"
          classNamePrefix="select"
          isDisabled={selects.fields.firstField.spec}
          noOptionsMessage={() => 'Не найдено'}
          placeholder="Выберите специализацию"
          options={thirdSelectData}
          value={
            selects.fields.firstField.spec
              ? {
                  value: selects.fields.firstField.spec,
                  label: selects.fields.firstField.spec,
                }
              : null
          }
          onChange={(value) =>
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
          <ReactSelect
            className="form__step-select"
            classNamePrefix="select"
            isDisabled={selects.fields.firstField.center}
            noOptionsMessage={() => 'Не найдено'}
            placeholder="Выберите медицинский центр"
            options={fourthSelectData}
            value={
              selects.fields.firstField.center
                ? {
                    value: selects.fields.firstField.center,
                    label: selects.fields.firstField.center,
                  }
                : null
            }
            onChange={(value) =>
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
        <ReactSelect
          className="form__step-select"
          classNamePrefix="select"
          isDisabled={selects.fields.firstField.doctorsName}
          noOptionsMessage={() => 'Не найдено'}
          placeholder="Выберите врача"
          options={fifthSelectData}
          value={
            selects.fields.firstField.doctorsName
              ? {
                  value: selects.fields.firstField.doctorsName,
                  label: selects.fields.firstField.doctorsName,
                }
              : null
          }
          onChange={(value) =>
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
  reset: PropTypes.func.isRequired,
};

export default FormFirstStep;
