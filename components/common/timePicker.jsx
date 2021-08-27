import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker as Time,
} from '@material-ui/pickers';
import { css, useTheme } from '@emotion/react';
import { ReactComponent as SheduleIcon } from 'icons/shedule.svg';

const TimePicker = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        margin-right: 30px;
      `}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Time
          ampm={false}
          emptyLabel="Время приема"
          value={null}
          css={css`
            flex-grow: 1;

            div {
              width: 245px;
              height: 54px;
              padding-left: 10px;
              border: 1px solid ${theme.colors.blue};
              background-color: #fff;
              border-radius: 4px;

              &:before {
                display: none;
              }
            }

            input {
              color: rgba(74, 74, 74, 0.6);
              font-size: 12px;
            }
          `}
        />
      </MuiPickersUtilsProvider>
      <SheduleIcon
        width="20"
        height="20"
        css={css`
          position: absolute;
          top: 16px;
          right: 10px;
        `}
      />
    </div>
  );
};

export default TimePicker;
