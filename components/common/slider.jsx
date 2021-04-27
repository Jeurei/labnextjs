import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { css } from '@emotion/react';

global.Element = typeof Element === 'undefined' ? function () {} : Element;

const Slider = ({
  data,
  component,
  swiperRef,
  sliderObject,
  pagination = true,
}) => {
  SwiperCore.use([Pagination, A11y]);
  return (
    <div
      className="slider__main-container"
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <Swiper
        ref={swiperRef}
        {...sliderObject}
        pagination={{ clickable: pagination }}
      >
        {data.map((el) => (
          <SwiperSlide>
            {cloneElement(component, {
              data: el,
            })}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Slider.defaultProps = {
  pagination: true,
};

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.objectOf(PropTypes.any).isRequired,
  swiperRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  sliderObject: PropTypes.objectOf(PropTypes.any).isRequired,
  pagination: PropTypes.bool,
};

export default Slider;
