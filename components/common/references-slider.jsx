import SliderControls from 'common/slider-controls';
import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import Slider from './slider';
import LightBoxImg from './light-box-img';

const SlideComponent = ({ data }) => {
  return (
    <>
      {data && (
        <div
          className="reference__picture"
          css={css`
            filter: grayscale(100%);
          `}
        >
          <LightBoxImg data={data} />
        </div>
      )}
    </>
  );
};

const ReferencesSlider = ({ title, data }) => {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        flex-wrap: wrap;

        .swiper-slide {
          display: flex;
          justify-content: center;
        }

        .slider__main-container {
          width: 100%;
        }

        & > div:last-child {
          width: 100%;
        }

        ${breakpointsMap.DESKTOP} {
          width: 100%;
        }
      `}
    >
      <h3
        css={css`
          margin: 0;
          margin-right: auto;
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: 400;

          ${breakpointsMap.DESKTOP} {
            display: flex;
            align-items: center;
            margin-bottom: 0;
          }
        `}
      >
        {title}
      </h3>
      <SliderControls
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        className="medCenter__slider-control"
      />
      <div>
        <Slider
          swiperRef={swiperRef}
          component={<SlideComponent />}
          data={data}
          sliderObject={{
            breakpoints: {
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },

              720: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },

              1210: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

SlideComponent.defaultProps = {
  data: undefined,
};

SlideComponent.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

ReferencesSlider.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ReferencesSlider;
