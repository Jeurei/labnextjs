import { css } from '@emotion/react';
import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as MailIcon } from 'icons/mail.svg';
import { breakpointsMap } from 'constants/styles';
import PositionsCatalog from 'components/common/positions-catalog';
import SheduleTable from 'components/common/shedule-table';
import DoctorOnline from 'common/doctorOnline';
import ReferencesSlider from 'components/common/references-slider';
import Comment from 'components/common/comment';
import MedCenterForm from './mecenterForm';
import MedCenterFeatures from './medCenterFeatures';

// TODO: разбить на компоненты

const MedCenter = () => {
  return (
    <div
      css={css`
        .section__inner {
          padding-left: 0;
        }
      `}
    >
      <h2
        className="main__title"
        css={css`
          margin-bottom: 53px;
        `}
      >
        Лабдиагностика г. Пермь, ул. Хабаровская, 56
      </h2>
      <div
        css={css`
          padding-right: 5px;
          padding-left: 5px;
          margin-bottom: 31px;
        `}
      >
        <span
          css={css`
            position: relative;
            padding-left: 13px;
            margin-right: 60px;
          `}
        >
          <TelIcon
            fill="#000"
            width="9"
            height="10"
            css={css`
              position: absolute;
              top: 0;
              left: 0;
            `}
          />
          +7 (999) 999-99-99
        </span>
        <span
          css={css`
            position: relative;
            padding-left: 16px;
          `}
        >
          <MailIcon
            fill="#000"
            width="9"
            height="7"
            css={css`
              position: absolute;
              top: 3px;
              left: 0;
            `}
          />
          info@labdiag.ru
        </span>
      </div>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
        `}
      >
        <h3
          css={css`
            margin-top: 0;
            margin-bottom: 35px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Описание
        </h3>
        <p
          css={css`
            margin: 0;
            margin-bottom: 20.5px;
            font-size: 13px;
            line-height: 22px;
          `}
        >
          Приемы врачей и УЗИ ведутся по предварительной записи, тел.: (342) 2
          700 789, доб. 803.
          <br /> Забор анализов в порядке живой очереди, без записи.
        </p>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <SheduleTable />
        <MedCenterForm />
      </div>
      <div
        css={css`
          padding-top: 37px;
          padding-right: 5px;
          padding-left: 5px;
        `}
      >
        <h3
          css={css`
            margin: 0;
            margin-bottom: 38px;
            font-size: 16px;
            font-weight: 400;
          `}
        >
          Выбор специалсита
        </h3>
        <PositionsCatalog />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 37px;
          padding-right: 5px;
          padding-left: 5px;

          ${breakpointsMap.TABLET} {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        `}
      >
        <h3
          css={css`
            width: 100%;
            margin: 0;
            margin-bottom: 38px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Эндокринологи
        </h3>
        {new Array(4).fill().map(() => (
          <DoctorOnline />
        ))}
      </div>
      <MedCenterFeatures />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-right: 5px;
          padding-left: 5px;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <ReferencesSlider title="Лицензия" />
        <ReferencesSlider title="СЭЗ" />
      </div>
      <div
        css={css`
          padding-right: 5px;
          padding-left: 5px;
        `}
      >
        <h3
          css={css`
            margin: 0;
            margin-right: auto;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 400;
          `}
        >
          Отзывы
        </h3>
        <div
          css={css`
            display: grid;
            column-gap: 40px;
            grid-template-columns: repeat(2, 1fr);
          `}
        >
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default MedCenter;
