import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDate, getYear } from 'date-fns';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserFormState } from 'Redux/actions/actions';
import { css, useTheme } from '@emotion/react';
import { usePageContext } from 'components/MainLayout';
import { formatDate } from 'components/utils/common';

const SpecialistSheduleDays = ({
  days,
  selectedMounth,
  nextMounth,
  prevMounth,
  swiperMounthRef,
  currentMounth,
  userForm,
  setFormState,
  selectedYear,
  specialist,
  adress,
  specialistTime,
}) => {
  const QUANTITY_OF_SLIDES = 6;
  const currentDate = new Date();
  const [selectedDay, setSelectedDay] = useState(0);
  const [chosenEmpty, setChosenEmpty] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const theme = useTheme();
  const onTimeClickOpenPopup = usePageContext();

  const onDaySlideClickHandler = (index) => {
    setChosenEmpty(Object.values(days[index][1]).length === 0);
    setSelectedDay(index);
  };

  const onTimeClickHandler = (data) => {
    if (specialist) {
      setFormState({
        ...userForm,
        specialist,
        fields: {
          ...userForm.fields,
          firstField: {
            ...userForm.fields.firstField,
            city: {
              value: specialist.centers.city.value,
              label: specialist.centers.city.label,
            },
            center: {
              value: (adress && adress.value) || specialist.centers.id || null,
              label:
                (adress && adress.value) ||
                `${specialist.centers.city.label}, ${specialist.centers.address}` ||
                null,
            },
            spec: {
              value: specialist.specializations[0].value,
              label: specialist.specializations[0].label,
            },
            doctorsName: specialist.name,
          },
          secondField: {
            ...userForm.secondField,
            year: selectedYear,
            mounth: selectedMounth,
            day: Number(days[selectedDay][0]),
            time: data,
          },
        },
      });
    } else
      setFormState({
        ...userForm,
        fields: {
          ...userForm.fields,
          secondField: {
            ...userForm.secondField,
            year: selectedYear,
            mounth: selectedMounth,
            day: Number(days[selectedDay][0]),
            time: data,
          },
        },
      });

    onTimeClickOpenPopup(true);
  };

  const getDaySlide = (obj, id) => {
    const [day, mounth] = formatDate(
      new Date(
        getYear(currentDate.getFullYear()),
        selectedMounth,
        Number(obj[0]) + 1,
      ),
      'dd MMM',
    ).split(' ');

    const weekDay = formatDate(
      new Date(
        getYear(currentDate.getFullYear()),
        selectedMounth,
        Number(obj[0]) + 2,
      ),
      'iiiiii',
    );

    return (
      <SwiperSlide
        key={id}
        id={id}
        onClick={(evt) => onDaySlideClickHandler(evt.currentTarget.id)}
      >
        <li
          className={`specialist__shedule-list-item ${
            id === Number(selectedDay)
              ? 'specialist__shedule-list-item--today'
              : ''
          }`}
        >
          <p className="specialist__shedule-week-day">
            {getDate(currentDate) - 1 === Number(days[id][0])
              ? 'Сегодня'
              : weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}
          </p>
          <p className="specialist__shedule-date">
            {`${day} ${mounth[0].toUpperCase() + mounth.slice(1)}`}
          </p>
        </li>
      </SwiperSlide>
    );
  };

  const createTimeElement = (data, action, id) => {
    const START = 0;
    const END = 5;
    return (
      <li
        className="specialist__shedule-table-time-list-item"
        id={data}
        key={id}
      >
        <a
          href="/"
          className="specialist__shedule-table-time"
          aria-label={`Записать на ${data}`}
          css={css`
            ${((data === userForm.fields.secondField.time &&
              specialist &&
              userForm.specialist &&
              JSON.stringify(specialist) ===
                JSON.stringify(userForm.specialist)) ||
              (!specialist && id + 1 === userForm.fields.secondField.time)) &&
            `background-color: ${theme.colors.green}; color:#fff;`}
          `}
          onClick={(evt) => {
            evt.preventDefault();
            action(data);
          }}
        >
          {data.slice(START, END)}
        </a>
      </li>
    );
  };

  const createEmptyElement = () => {
    return (
      <li className="specialist__shedule-table-time-list-item">
        <a
          href="/"
          className="specialist__shedule-table-time"
          aria-label="Открыть список всех"
        >
          ...
        </a>
      </li>
    );
  };

  const isLastSlide = (array) => {
    return (
      swiperRef.current?.swiper.activeIndex + QUANTITY_OF_SLIDES ===
      array.length
    );
  };

  const prevSlide = useCallback(
    (isActive) => {
      if (!isActive) {
        swiperMounthRef.current?.swiper.slidePrev();
        prevMounth();
        setSelectedDay(0);
        onDaySlideClickHandler(selectedDay);
      } else {
        swiperRef.current?.swiper.slidePrev();
      }
    },
    [swiperRef],
  );

  const nextSlide = useCallback(
    (array) => {
      if (isLastSlide(array)) {
        swiperMounthRef.current?.swiper.slideNext();
        nextMounth();
        setSelectedDay(0);
        onDaySlideClickHandler(selectedDay);
      } else {
        swiperRef.current?.swiper.slideNext();
      }
    },
    [swiperRef],
  );

  useEffect(() => {
    swiperRef.current?.swiper.slideTo(0);
    setSelectedDay(0);
  }, [selectedMounth]);

  return (
    <div className="specialist__shedule-table">
      {!!activeIndex && (
        <button
          className="specialist__shedule-table-button specialist__shedule-table-button--before"
          type="button"
          aria-label="Предыдущая неделя"
          onClick={() => prevSlide(activeIndex)}
        />
      )}
      <ul className="specialist__shedule-list">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          noSwipingClass="swiper-slide"
          onSlideChange={() =>
            setActiveIndex(swiperRef.current?.swiper.activeIndex)
          }
        >
          {days.map((el, id) => getDaySlide(el, id))}
        </Swiper>
      </ul>
      {isLastSlide(days) && (
        <button
          className="specialist__shedule-table-button specialist__shedule-table-button--next"
          type="button"
          aria-label="Следующая неделя"
          onClick={() => nextSlide(days)}
        />
      )}
      <ul className="specialist__shedule-table-time-list">
        {!chosenEmpty &&
          Object.values(days[selectedDay][1])
            .slice(0, 9)
            .map((el, index) =>
              createTimeElement(el, onTimeClickHandler, index),
            )}
        {Object.values(days[selectedDay][1]).length > 10 &&
          createEmptyElement()}
      </ul>
    </div>
  );
};

SpecialistSheduleDays.defaultProps = {
  specialist: null,
  adress: null,
};

SpecialistSheduleDays.propTypes = {
  days: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectedMounth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  currentMounth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  nextMounth: PropTypes.func.isRequired,
  prevMounth: PropTypes.func.isRequired,
  swiperMounthRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
  setFormState: PropTypes.func.isRequired,
  selectedYear: PropTypes.number.isRequired,
  specialist: PropTypes.shape({
    id: PropTypes.string,
    specializations: PropTypes.arrayOf(PropTypes.any),
    name: PropTypes.string,
    centers: PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.objectOf(PropTypes.string),
      address: PropTypes.string,
    }).isRequired,
  }),
  specialistTime: PropTypes.objectOf(PropTypes.object).isRequired,
  adress: PropTypes.objectOf(PropTypes.object),
};

const mapDispatchToProps = (dispatch) => ({
  setFormState: bindActionCreators(setUserFormState, dispatch),
});

const mapStateToProps = (state) => {
  const { userForm } = state;

  return { userForm };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpecialistSheduleDays);
