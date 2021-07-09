import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { format, getDate, getYear } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserFormState } from 'Redux/actions/actions';
import { css, useTheme } from '@emotion/react';
import { usePageContext } from 'components/MainLayout';
import SpecialistDayInfo from './specialist-day-info';

const SpecialistSheduleDays = ({
  arr,
  selectedMounth,
  nextMounth,
  prevMounth,
  swiperMounthRef,
  currentMounth,
  availableMounthes,
  userForm,
  setFormState,
  selectedYear,
  specialist,
  adress,
}) => {
  const QUANTITY_OF_SLIDES = 6;
  const currentDate = new Date();
  const [selectedDay, setSelectedDay] = useState(0);
  const [chosenEmpty, setChosenEmpty] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const theme = useTheme();
  const onTimeClickOpenPopup = usePageContext();

  const getFormatedDate = (date, pattern) => {
    return format(date, pattern, { locale: ru });
  };

  const onDaySlideClickHandler = (index) => {
    setChosenEmpty(Object.values(arr[index][1]).length === 0);
    setSelectedDay(index);
  };

  const onTimeClickHandler = (id) => {
    if (specialist) {
      setFormState({
        ...userForm,
        specialist,
        fields: {
          ...userForm.fields,
          firstField: {
            ...userForm.fields.firstField,
            city: (adress && adress.value.split(',')[0]) || null,
            center: (adress && adress.value) || null,
            spec: specialist.job[0],
            doctorsName: specialist.name,
          },
          secondField: {
            ...userForm.secondField,
            year: selectedYear,
            mounth: selectedMounth,
            day: Number(arr[selectedDay][0]) + 2,
            time: id + 1,
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
            day: Number(arr[selectedDay][0]) + 2,
            time: id + 1,
          },
        },
      });

    onTimeClickOpenPopup(true);
  };

  const getDaySlide = (obj, id) => {
    const date = getFormatedDate(
      new Date(
        getYear(currentDate.getFullYear()),
        selectedMounth,
        Number(obj[0]) + 1,
      ),
      'dd MMM',
    ).split(' ');

    const weekDay = getFormatedDate(
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
            {getDate(currentDate) - 1 === Number(arr[id][0])
              ? 'Сегодня'
              : weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}
          </p>
          <p className="specialist__shedule-date">
            {`${date[0]} ${date[1].charAt(0).toUpperCase() + date[1].slice(1)}`}
          </p>
        </li>
      </SwiperSlide>
    );
  };

  const createTimeElement = (data, action, id) => {
    return (
      <li className="specialist__shedule-table-time-list-item" id={data}>
        <a
          href="/"
          className="specialist__shedule-table-time"
          aria-label={`Записать на ${data}`}
          css={css`
            ${((id + 1 === userForm.fields.secondField.time &&
              specialist &&
              userForm.specialist &&
              JSON.stringify(specialist) ===
                JSON.stringify(userForm.specialist)) ||
              (!specialist && id + 1 === userForm.fields.secondField.time)) &&
            `background-color: ${theme.colors.green}; color:#fff;`}
          `}
          onClick={(evt) => {
            evt.preventDefault();
            action(id);
          }}
        >
          {data}
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

  const isMounthLast = () => {
    return Number(currentMounth) - Number(selectedMounth) === -2;
  };

  useEffect(() => {
    swiperRef.current?.swiper.slideTo(0);
    setSelectedDay(0);
  }, [selectedMounth]);

  return (
    <div className="specialist__shedule-table">
      {(!!activeIndex || !!selectedMounth) && (
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
          {arr.map((el, id) => getDaySlide(el, id))}
        </Swiper>
      </ul>
      {(!isMounthLast() || !isLastSlide(arr)) && (
        <button
          className="specialist__shedule-table-button specialist__shedule-table-button--next"
          type="button"
          aria-label="Следующая неделя"
          onClick={() => nextSlide(arr)}
        />
      )}
      <ul className="specialist__shedule-table-time-list">
        {!chosenEmpty &&
          Object.values(arr[selectedDay][1])
            .slice(0, 9)
            .map((el, index) =>
              createTimeElement(el, onTimeClickHandler, index),
            )}
        {Object.values(arr[selectedDay][1]).length > 10 && createEmptyElement()}
      </ul>
      {chosenEmpty && (
        <SpecialistDayInfo
          selectedDay={selectedDay}
          arr={arr}
          selectedMounth={selectedMounth}
          setCurrentDay={onDaySlideClickHandler}
          availableMounthes={{ ...availableMounthes }}
        />
      )}
    </div>
  );
};

SpecialistSheduleDays.defaultProps = {
  specialist: null,
  adress: null,
};

SpecialistSheduleDays.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectedMounth: PropTypes.number.isRequired,
  currentMounth: PropTypes.number.isRequired,
  nextMounth: PropTypes.func.isRequired,
  prevMounth: PropTypes.func.isRequired,
  swiperMounthRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  availableMounthes: PropTypes.arrayOf(PropTypes.array).isRequired,
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
  setFormState: PropTypes.func.isRequired,
  selectedYear: PropTypes.number.isRequired,
  specialist: PropTypes.objectOf(PropTypes.object),
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
