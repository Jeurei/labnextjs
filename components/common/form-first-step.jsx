import PropTypes from 'prop-types';
import { getSpecialistsNamesArray } from 'components/utils/specialists';
import { useMemo, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import ReactSelect from 'react-select';
import Select from './select';

const FormFirstStep = ({
  selects,
  specialists,
  action,
  lastInputHandler,
  reset,
}) => {
  const ONLINE_SELECT_TYPE = 'online';
  const ref = useRef();
  const specialistsArray = useMemo(() =>
    specialists.filter((el) => Number(el.avl)),
  );

  const firstSelectData = [
    { value: 'offline', label: 'В клинике' },
    { value: 'online', label: 'Online' },
  ];

  const filterHandler = (data) => {
    const {
      fields: {
        firstField: { center, spec, doctorsName },
      },
    } = selects;
    if (doctorsName.value && data.name.value !== doctorsName.value)
      return false;
    if (
      spec?.value &&
      !data.specializations.find((el) => el.value === spec.value)
    )
      return false;
    if (center?.value && data.centers && data.centers.id !== center.value)
      return false;

    return data;
  };

  const currentArr = useMemo(() => specialistsArray.filter(filterHandler), [
    selects,
  ]);

  const removeDuplicatedObjectsFromArray = (arr) =>
    [...new Set(arr.map(JSON.stringify))].map(JSON.parse);

  const getValueLabelObject = (value, label) => ({ value, label });

  const getSecondSecondSelectData = () =>
    removeDuplicatedObjectsFromArray(
      currentArr
        .map(
          (el) =>
            el.centers &&
            getValueLabelObject(el.centers.city.value, el.centers.city.label),
        )
        .filter(Boolean),
    );

  const getThirdSelectData = () =>
    removeDuplicatedObjectsFromArray(
      currentArr.map((el) => el.specializations).flat(),
    );

  const getFourthSelectData = () =>
    removeDuplicatedObjectsFromArray(
      currentArr
        .map(
          (el) =>
            el.centers &&
            getValueLabelObject(
              el.centers.id,
              `${el.centers.city.label}, ${el.centers.address}`,
            ),
        )
        .filter(Boolean),
    );

  const getFifthSelectData = () => getSpecialistsNamesArray(currentArr);

  const secondSelectData = getSecondSecondSelectData();

  const thirdSelectData = getThirdSelectData();

  const fourthSelectData = getFourthSelectData();

  const fifthSelectData = getFifthSelectData();

  const isReset = () =>
    selects.fields.firstField.city ||
    selects.fields.firstField.spec ||
    selects.fields.firstField.center ||
    selects.fields.firstField.doctorsName.name;

  useEffect(() => {
    if (
      currentArr.length === 1 &&
      JSON.stringify(currentArr[0]) !== JSON.stringify(selects.specialist)
    ) {
      lastInputHandler(currentArr[0]);
    }
  }, [currentArr]);

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
        {isReset() && (
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
                    value: selects.fields.firstField.city.value,
                    label: selects.fields.firstField.city.label,
                  }
                : null
            }
            onChange={(value) =>
              onChangeHandler({
                fields: {
                  ...selects.fields,
                  firstField: {
                    ...selects.fields.firstField,
                    city: {
                      value: value.value,
                      label: value.label,
                    },
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
                  value: selects.fields.firstField.spec.value,
                  label: selects.fields.firstField.spec.label,
                }
              : null
          }
          onChange={(value) =>
            onChangeHandler({
              fields: {
                ...selects.fields,
                firstField: {
                  ...selects.fields.firstField,
                  spec: {
                    value: value.value,
                    label: value.label,
                  },
                },
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
                    value: selects.fields.firstField.center.value,
                    label: selects.fields.firstField.center.label,
                  }
                : null
            }
            onChange={(value) =>
              onChangeHandler({
                fields: {
                  ...selects.fields,
                  firstField: {
                    ...selects.fields.firstField,
                    center: {
                      value: value.value,
                      label: value.label,
                    },
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
          isDisabled={selects.fields.firstField.name}
          noOptionsMessage={() => 'Не найдено'}
          placeholder="Выберите врача"
          options={fifthSelectData}
          value={
            selects.fields.firstField.doctorsName
              ? {
                  value: selects.fields.firstField.doctorsName.value,
                  label: selects.fields.firstField.doctorsName.label,
                }
              : null
          }
          onChange={(value) =>
            onChangeHandler({
              fields: {
                ...selects.fields,
                firstField: {
                  ...selects.fields.firstField,
                  doctorsName: {
                    value: value.value,
                    label: value.label,
                  },
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
