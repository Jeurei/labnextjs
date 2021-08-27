import { ReactComponent as DateIcon } from 'icons/shedule.svg';
import { useTheme, css } from '@emotion/react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ru from 'date-fns/locale/ru';

import PropTypes from 'prop-types';

const RefrencesDatePicker = ({
  name,
  form: { setFieldValue },
  field: { value },
}) => {
  const { colors } = useTheme();

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 31px;

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
          name={name}
          keyboard
          clearable
          autoOk
          onChange={(val) => {
            setFieldValue('date', val);
          }}
          placeholder="Введите дату приема"
          format="dd/MM/yyyy"
          invalidDateMessage="Неправильный формат даты"
          keyboardIcon={<DateIcon />}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

RefrencesDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RefrencesDatePicker;
