import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Form from 'common/form';
import { css, useTheme } from '@emotion/react';
import { numberWithSpaces } from 'utils/common';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserFormState } from 'Redux/actions/actions';
import SpecialistWorkTime from './specialist-work-time';

const Specialist = ({ data, userForm, setFormState, specialities }) => {
  const [specialistPopup, setSpecialistPopup] = useState(false);

  const closeHandler = () => {
    setSpecialistPopup(false);
  };

  const onButtonClickHandler = (spec) => {
    setFormState({
      ...userForm,
      specialist: spec,
    });
    setSpecialistPopup(true);
  };

  const specialistInfo = (specialist) => {
    const theme = useTheme();
    const agesMap = {
      1: 'Дети 0-18 лет',
      2: 'Взрослые',
      3: 'Дети 0-18 лет, взрослые',
    };

    return (
      <div className="specialist__info">
        <h3 className="specialist__name">
          <Link href="specialists/[id]" as={`specialists/${specialist.id}`}>
            <a>{specialist.name}</a>
          </Link>
        </h3>
        <ul className="specialist__info-list">
          <li className="specialist__info-item">
            Должность:{' '}
            <span
              css={css`
                font-weight: 500;
              `}
            >
              {specialist.specializations
                .map((el) =>
                  Object.values(specialities).find((elem) => elem.id === el),
                )
                .map((el) => el.name)
                .reduce((acc, curr) => `${acc}, ${curr}`)}
            </span>
          </li>
          <li className="specialist__info-item">
            Ведёт приём:
            <span
              css={css`
                font-weight: 500;
              `}
            >
              {agesMap[specialist.ages]}
            </span>
          </li>
          <li className="specialist__info-item">
            Первичный прием:
            <span
              className="specialist__price"
              css={css`
                font-weight: 500;
              `}
            >
              {numberWithSpaces(specialist.price)} ₽
            </span>
          </li>
          <li aria-label="Ссылка на услуги которые предоставляет данный специалист">
            <a
              className="specialist__info-item specialist__info-item--link"
              href="/"
            >
              Все услуги
            </a>
          </li>
        </ul>
        <button
          className="specialist__button button"
          type="button"
          aria-label="Записать на приём"
          onClick={() => onButtonClickHandler(specialist)}
        >
          Запишитесь на прием
        </button>
        <button
          type="button"
          className="specialist__button button"
          aria-label="Записать на онлайн консультацию"
          css={css`
            background-color: ${theme.colors.blue};
            text-transform: uppercase;

            &:hover,
            &:active {
              background-color: ${theme.colors.blue};
            }
          `}
        >
          online консультация
        </button>
        <p className="specialist__tel">
          Телефон для записи:
          <a
            href="tel:88003000789"
            css={css`
              font-weight: 500;
            `}
          >
            8 800 3000 789
          </a>
        </p>
      </div>
    );
  };

  return (
    <div className="specialists__specialist specialist">
      <div className="specialist__img-container">
        <Image
          className="specialist__img"
          src="/img/doctor.png"
          layout="fill"
          objectFit="cover"
          alt="Изображение специалиста"
        />
      </div>
      {specialistInfo(data)}
      <SpecialistWorkTime
        adresses={data.centers}
        time={data.time}
        specialist={data}
      />
      {specialistPopup && <Form closeHandler={closeHandler} data={data} />}
    </div>
  );
};

Specialist.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.arrayOf(PropTypes.string),
    ages: PropTypes.string,
    price: PropTypes.string,
    centers: PropTypes.arrayOf(PropTypes.any).isRequired,
    time: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
  setFormState: PropTypes.func.isRequired,
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
  specialities: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFormState: bindActionCreators(setUserFormState, dispatch),
});

const mapStateToProps = (state) => {
  const { userForm, specialities } = state;

  return { userForm, specialities };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialist);
