import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { Field, useFormikContext } from 'formik';
import CardInput from './cardInput';
import CardView from './cardView';

const CardInputs = () => {
  const { setFieldValue } = useFormikContext();
  const handleChange = (evt) => {
    const re = /^[0-9\b]+$/;
    const { target } = evt;
    const { value, name } = target;
    if (value === '' || (value.length <= 3 && re.test(value)))
      setFieldValue(name, value);
  };

  return (
    <>
      <div
        css={css`
          display: grid;
          row-gap: 10px;
          margin-bottom: 31px;
          position: relative;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 20px;

          ${breakpointsMap.DESKTOP} {
            row-gap: 0;
            column-gap: 50px;
            padding-right: 30px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            position: relative;

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              margin: 0;
              -webkit-appearance: none;
            }

            input[type='number'] {
              -moz-appearance: textfield;
            }

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
              align-items: center;
            }
          `}
        >
          <label
            htmlFor="firstNums"
            css={css`
              display: flex;
              flex-grow: 1;
              white-space: pre;
              margin-right: 20px;
            `}
          >
            Первые 3 цифры номера карты
          </label>
          <CardInput name="firstNums">
            <Field
              name="firstNums"
              id="firstNums"
              type="text"
              className="form__input"
              onChange={handleChange}
            />
          </CardInput>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              margin: 0;
              -webkit-appearance: none;
            }

            input[type='number'] {
              -moz-appearance: textfield;
            }

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
              align-items: center;
            }
          `}
        >
          <label
            htmlFor="lastNums"
            css={css`
              display: flex;
              flex-grow: 1;
              white-space: pre;
              margin-right: 20px;
            `}
          >
            Последние 3 цифры номера карты
          </label>
          <CardInput name="lastNums">
            <Field
              name="lastNums"
              id="lastNums"
              type="number"
              className="form__input"
              onChange={handleChange}
            />
          </CardInput>
        </div>
        <div
          css={css`
            display: none;

            ${breakpointsMap.DESKTOP} {
              display: block;
            }
          `}
        >
          <CardView />
        </div>
      </div>
    </>
  );
};

export default CardInputs;
