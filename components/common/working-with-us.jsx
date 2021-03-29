import { css } from '@emotion/react';
import Image from 'next/image';
import SliderControls from './slider-controls';

const WorkingWithUs = () => {
  return (
    <div>
      <h3
        css={css`
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        С нами уже работают
      </h3>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <SliderControls />
        <ul
          css={css`
            padding: 0;
            filter: grayscale(100%);
            list-style: none;
          `}
        >
          <li>
            <Image
              src="/img/alfa.png"
              alt="Изображение компании с которой сотрудничаем"
              width="179"
              height="56"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkingWithUs;
