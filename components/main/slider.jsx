import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { css, keyframes } from '@emotion/react';

global.Element = typeof Element === 'undefined' ? function () {} : Element;

const Slider = ({ data, component, swiperRef, sliderObject }) => {
  SwiperCore.use([Pagination, A11y]);

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <Swiper
        ref={swiperRef}
        {...sliderObject}
        pagination={{ clickable: true }}
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

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.objectOf(PropTypes.any).isRequired,
  swiperRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  sliderObject: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Slider;
