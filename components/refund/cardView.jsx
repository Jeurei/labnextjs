import { useTheme, css } from '@emotion/react';
import { useFormContext } from './refundForm';

const CardView = () => {
  const { colors } = useTheme();
  const {
    formState: { lastNums, firstNums },
  } = useFormContext();
  return (
    <div
      css={css`
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: ${colors.purple};
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
          div {
            display: flex;
          }
        }
      `}
    >
      !
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          display: none;
          position: absolute;
          min-width: 207px;
          min-height: 165px;
          background-color: #f7f7f7;
          color: #000;
          padding: 12px;
          z-index: 10;
          bottom: calc(100% + 10px);

          &::after {
            position: absolute;
            content: '';
            bottom: 0;
            width: 10px;
            height: 10px;
            background-color: #f7f7f7;
            transform: translateY(50%) rotate(45deg);
          }
        `}
      >
        <div
          css={css`
            background-size: cover;
            min-height: 111px;
            background-image: url('/img/card.png');
            margin-bottom: auto;
            min-width: 100%;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <span
            css={css`
              padding-top: 10px;
              font-size: 11px;
              letter-spacing: 1px;
            `}
          >
            {firstNums || '000'}∗ ∗∗∗∗ ∗∗∗∗ ∗{lastNums || '000'}
          </span>
        </div>
        <div>Цифры с лицевой стороны</div>
      </div>
    </div>
  );
};

export default CardView;
