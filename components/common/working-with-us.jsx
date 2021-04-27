import { css } from '@emotion/react';
import Image from 'next/image';
import Slider from 'common/slider';
import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import SliderControls from './slider-controls';

const CompanyItem = (data) => {
  return (
    <li
      css={css`
        filter: grayscale(100%);

        &:hover {
          filter: grayscale(0);
        }
      `}
    >
      <Image
        src={data.data.image}
        alt="Изображение компании с которой сотрудничаем"
        width="179"
        height="56"
      />
    </li>
  );
};

const WorkingWithUs = ({ data }) => {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <div>
      <h3
        css={css`
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        {data.title}
      </h3>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <SliderControls nextSlide={nextSlide} prevSlide={prevSlide} />
        <ul
          css={css`
            padding: 0;
            list-style: none;
          `}
        >
          <Slider
            swiperRef={swiperRef}
            component={<CompanyItem />}
            data={data.sliderSmallList}
            sliderObject={{ slidesPerView: 5 }}
          />
        </ul>
      </div>
    </div>
  );
};

WorkingWithUs.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default WorkingWithUs;
