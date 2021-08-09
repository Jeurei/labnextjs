import { ReactComponent as DateIcon } from 'icons/shedule.svg';
import { useTheme, css } from '@emotion/react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ru from 'date-fns/locale/ru';

import PropTypes from 'prop-types';

const RefundDatePicker = ({ value, onChange }) => {
  const { colors } = useTheme();

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 31px;
        padding-top: 20px;

        .MuiFormControl-root {
          border: 1px solid ${colors.blue};
          padding: 10px;
          border-radius: 4px;
          width: 100%;
        }

        .MuiInput-underline {
          &::before,
          &::after {
            display: none;
          }
        }

        .MuiFormHelperText-root.Mui-error {
          position: absolute;
          bottom: -20px;
        }
      `}
    >
      <MuiPickersUtilsProvider locale={ru} utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={value}
          onChange={(data) => onChange(data)}
          minDate={new Date()}
          placeholder="например: 01/01/2021"
          format="dd/mm/yyyy"
          invalidDateMessage="Неправильный формат даты"
          minDateMessage="Нельзя записаться раньше чем сегодняшнее число"
          keyboardIcon={<DateIcon />}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

RefundDatePicker.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RefundDatePicker;
