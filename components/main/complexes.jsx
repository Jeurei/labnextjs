import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SliderControls from 'common/slider-controls';
import Slider from 'common/slider';
import Complex from './complex';
import Links from './links';

const Complexes = ({ complexes }) => {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <section className="main__section main__section--complexes section complexes">
      <div className="section__inner">
        <h2 className="section__title complexes__title">
          Подберите свой комплекс
        </h2>
        <div className="complexes__container">
          <SliderControls
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            className="complexes__control"
          />
          <ul className="complexes__list">
            <Slider
              data={complexes}
              component={<Complex />}
              swiperRef={swiperRef}
              sliderObject={{
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },

                  425: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                  },

                  1210: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                },
              }}
            />
          </ul>
        </div>
      </div>
      <Links />
    </section>
  );
};

Complexes.propTypes = {
  complexes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { complexes } = state;

  return { complexes };
};

export default connect(mapStateToProps, null)(Complexes);
