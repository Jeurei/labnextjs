import React, { useRef, useState, useEffect, useMemo } from 'react';
import { getDate, getMonth, getYear } from 'date-fns';
import PropTypes from 'prop-types';
import { getSpecialistShedule } from 'api/';
import Load from 'components/common/load';
import { isEmpty } from 'components/utils/common';
import { getArrayOfMounthes } from 'constants/constants';
import SpecialistSheduleMounth from './specialist-shedule-mounth';
import SpecialistSheduleDays from './specialist-shedule-days';

const getTodayDay = (currentDate) => {
  return Number(getDate(currentDate)) - 1;
};

const SpecialistShedule = ({ specialist, adress }) => {
  const MOUNTHES_QUANTITY = 3;
  const [specialistTime, setSpecialistTime] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const currentDate = new Date();
  const currentYear = useMemo(() => getYear(currentDate));
  const [currentMounth, setCurrentMounth] = useState(getMonth(currentDate));
  const [selectedMounth, setSelectedMounth] = useState(getMonth(currentDate));
  const [selectedTime, setSelectedTime] = useState(null);
  const swiperMounthRef = useRef(null);
  const [currentDay, setCurrentDay] = useState(getTodayDay(currentDate));

  useEffect(async () => {
    setLoading(true);

    try {
      const shedule = await getSpecialistShedule(specialist.id);
      setSpecialistTime({ ...shedule });
    } catch (error) {
      if (error) throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (specialistTime && !isEmpty(specialistTime)) {
      setCurrentMounth(Object.keys(specialistTime[currentYear])[0]);
    }
  }, [specialistTime]);

  useEffect(() => {
    if (specialistTime && !isEmpty(specialistTime)) {
      setSelectedMounth(currentMounth);
      setCurrentDay(Object.keys(specialistTime[currentYear][currentMounth])[0]);
    }
  }, [currentMounth]);

  useEffect(() => {
    if (selectedMounth === getMonth(currentDate)) {
      setCurrentDay(getTodayDay(currentDate));
    } else {
      setCurrentDay(0);
    }
  }, [selectedMounth]);

  const getSliceOfMounthes = (quantity) => {
    return Object.keys(specialistTime[currentYear]).slice(0, quantity);
  };

  const arrayOfMounthes = useMemo(() => {
    if (specialistTime && !isEmpty(specialistTime)) {
      return getArrayOfMounthes(getSliceOfMounthes(MOUNTHES_QUANTITY));
    }
    return null;
  }, [specialistTime]);

  const arrayOfDaysFromNow = useMemo(() => {
    if (specialistTime && !isEmpty(specialistTime)) {
      return Object.entries(
        specialistTime[currentYear][selectedMounth],
      ).slice();
    }

    return null;
  }, [selectedMounth]);

  if (!specialistTime || isEmpty(specialistTime))
    return <span>К сожалению к этому специалисту запись пока невозможна</span>;

  const prevMounthClickHandler = () => {
    setSelectedMounth((prev) => Number(prev) - 1);
  };

  const nextMounthClickHandler = () => {
    setSelectedMounth((prev) => Number(prev) + 1);
  };

  return (
    <div className="specialist__shedule">
      <Load state={isLoading}>
        {arrayOfMounthes && (
          <SpecialistSheduleMounth
            mounthes={arrayOfMounthes}
            nextMounth={nextMounthClickHandler}
            prevMounth={prevMounthClickHandler}
            swiperRef={swiperMounthRef}
          />
        )}
        {arrayOfDaysFromNow && (
          <SpecialistSheduleDays
            days={arrayOfDaysFromNow}
            currentMounth={currentMounth}
            selectedMounth={selectedMounth}
            prevMounth={prevMounthClickHandler}
            nextMounth={nextMounthClickHandler}
            swiperMounthRef={swiperMounthRef}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            selectedYear={currentYear}
            specialist={specialist}
            specialistTime={specialistTime}
            adress={adress}
          />
        )}
      </Load>
    </div>
  );
};

SpecialistShedule.defaultProps = {
  specialist: null,
  adress: null,
};

SpecialistShedule.propTypes = {
  specialist: PropTypes.objectOf(PropTypes.any),
  adress: PropTypes.objectOf(PropTypes.object),
};

export default SpecialistShedule;
