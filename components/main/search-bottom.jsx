import { ReactComponent as AnalyseIcon } from 'icons/analyse.svg';
import { ReactComponent as CenterIcon } from 'icons/center.svg';
import { ReactComponent as DoctorIcon } from 'icons/doctor.svg';
import { ReactComponent as SheduleIcon } from 'icons/shedule.svg';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
// TODO: Возможно это тоже тянется с серва

const SearchBottom = () => {
  const router = useRouter();
  return (
    <div className="search__container">
      <div className="search__controls">
        <button
          type="button"
          className="search__control search__control--analyse"
          aria-label="Нажмите чтобы перейти к записям на анализ"
          name="analyse-button"
          onClick={() => router.push('/services/lab')}
        >
          <span
            css={css`
              position: relative;
            `}
          >
            <AnalyseIcon
              className="search__controll-icon"
              fill="currentColor"
              width="31"
              height="33"
            />
            Выбрать анализы
          </span>
        </button>
        <button
          type="button"
          className="search__control search__control--center"
          aria-label="Нажмите чтобы выбирать медицинские центры"
          name="center-button"
          onClick={() => router.push('/centers')}
        >
          <span
            css={css`
              position: relative;
            `}
          >
            <CenterIcon
              className="search__controll-icon"
              fill="currentColor"
              width="31"
              height="32"
            />
            Выбрать медицинский центр
          </span>
        </button>
        <button
          type="button"
          className="search__control search__control--doctor"
          aria-label="Нажмите чтобы перейти к выбору специалиста"
          name="doctor-button"
          onClick={() => router.push('/specialists')}
        >
          <span
            css={css`
              position: relative;
            `}
          >
            <DoctorIcon
              className="search__controll-icon"
              fill="currentColor"
              width="27"
              height="35"
            />
            Запись к врачу
          </span>
        </button>
        <button
          type="button"
          className="search__control search__control--shedule"
          aria-label="Нажмите чтобы узнать расписсания врачей"
          name="shedule-button"
          onClick={() => router.push('/shedule')}
        >
          <span
            css={css`
              position: relative;
            `}
          >
            <SheduleIcon
              className="search__controll-icon"
              fill="currentColor"
              width="28"
              height="28"
            />
            Расписание приема врачей
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBottom;
