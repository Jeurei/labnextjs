import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SliderControls from 'common/slider-controls';
import Share from './share';
import Slider from './slider';

const SharesList = ({ shares }) => {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <>
      <SliderControls
        className="shares-control"
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <ul className="shares__list">
        <Slider
          data={shares}
          component={<Share />}
          swiperRef={swiperRef}
          sliderObject={{
            spaceBetween: 30,
            loop: true,
            breakpoints: {
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },

              620: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },

              1210: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            },
          }}
        />
      </ul>
    </>
  );
};

SharesList.propTypes = {
  shares: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { shares } = state;

  return { shares };
};

export default connect(mapStateToProps, null)(SharesList);
