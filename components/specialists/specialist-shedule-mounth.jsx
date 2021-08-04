import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

const SpecialistSheduleMounth = ({
  mounthes,
  nextMounth,
  prevMounth,
  swiperRef,
}) => {
  const getMouthSlide = (obj, id) => {
    return (
      <SwiperSlide key={id}>
        <span className="specialist__current-mounth">
          {Object.values(obj).map((el) => el)}
        </span>
      </SwiperSlide>
    );
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();

    prevMounth();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();

    nextMounth();
  }, [swiperRef]);

  const isLastSlide = () => mounthes.length - 1;

  useEffect(() => {
    setActiveIndex(swiperRef.current?.swiper.activeIndex);
  }, [swiperRef.current?.swiper.activeIndex]);

  return (
    <div className="specialist__shedule-mounth">
      {!!activeIndex && (
        <button
          className="specialist__shedule-mounth-button specialist__shedule-mounth-button--before"
          type="button"
          aria-label="Предыдущий месяц"
          onClick={() => prevSlide()}
        />
      )}
      <Swiper
        slidesPerView="auto"
        ref={swiperRef}
        noSwipingClass="swiper-slide"
        speed={400}
        onSlideChange={() =>
          setActiveIndex(swiperRef.current?.swiper.activeIndex)
        }
      >
        {mounthes.map((el, id) => getMouthSlide(el, id))}
      </Swiper>
      {activeIndex !== isLastSlide() && (
        <button
          className="specialist__shedule-mounth-button specialist__shedule-mounth-button--next"
          type="button"
          aria-label="Следующий месяц"
          onClick={() => {
            nextSlide();
          }}
        />
      )}
    </div>
  );
};

SpecialistSheduleMounth.propTypes = {
  mounthes: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextMounth: PropTypes.func.isRequired,
  swiperRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  prevMounth: PropTypes.func.isRequired,
};

export default SpecialistSheduleMounth;
