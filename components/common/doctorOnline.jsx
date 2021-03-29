import { css, useTheme } from '@emotion/react';
import Image from 'next/image';

const DoctorOnline = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        width: 384px;
        flex-direction: column;
        align-items: center;
        align-self: center;
        padding-bottom: 39px;
        margin-bottom: 29px;
        box-shadow: ${theme.colors.boxShadow};
      `}
    >
      <Image src="/img/beatiful-young-fem.png" width="384" height="340" />
      <p
        css={css`
          font-size: 16px;
        `}
      >
        Мельникова Наталья Игоревна
      </p>
      <p
        css={css`
          font-size: 13px;
        `}
      >
        Должность: Дерматовенеролог
      </p>
      <button
        type="button"
        className="button"
        css={css`
          width: 297px;
          padding-top: 15px;
          padding-bottom: 17px;
          border: none;
        `}
      >
        Онлайн запись на прием
      </button>
    </div>
  );
};

export default DoctorOnline;
