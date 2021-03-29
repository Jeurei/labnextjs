import SliderControls from 'common/slider-controls';
import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import Slider from './slider';
import LightBoxImg from './light-box-img';

const SlideComponent = ({ quantity }) => (
  <>
    {new Array(quantity).fill().map(() => (
      <div className="reference__picture">
        <LightBoxImg />
      </div>
    ))}
  </>
);

const ReferencesSlider = ({ title, quantity = 2 }) => {
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
          width: 100% !important;
          justify-content: center;
        }

        .slider__main-container {
          width: 100%;
        }

        & > div:last-child {
          width: 100%;
        }

        ${breakpointsMap.DESKTOP} {
          width: 50%;
          margin-right: 69px;
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
          component={<SlideComponent quantity={quantity} />}
          data={new Array(2).fill()}
          sliderObject={{}}
        />
      </div>
    </div>
  );
};

SlideComponent.propTypes = {
  quantity: PropTypes.number.isRequired,
};

ReferencesSlider.defaultProps = {
  quantity: 2,
};

ReferencesSlider.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default ReferencesSlider;
