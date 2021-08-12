import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import CardInput from './cardInput';
import CardView from './cardView';
import { useFormContext } from './refundForm';

const CardInputs = () => {
  const LENGTH_OF_NUMS = 3;
  const { formState, setFormState, formValidation } = useFormContext();
  const { firstNums, lastNums } = formState;

  const inputHandler = (evt) => {
    const { target } = evt;
    const { name, value } = target;

    const checkValue = () =>
      (value !== '' && !Number(value) && Number(value) !== 0) ||
      value.length > LENGTH_OF_NUMS;

    if (checkValue()) return;

    setFormState({ ...formState, [name]: value });
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
        <CardInput
          value={firstNums}
          onChange={inputHandler}
          label="Первые 3 цифры номера карты"
          id="firstNums"
          validation={firstNums}
        />
        <CardInput
          value={lastNums}
          onChange={inputHandler}
          label="Последние 3 цифры номера карты"
          id="lastNums"
          validation={lastNums}
        />
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
