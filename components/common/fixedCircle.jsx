import { ReactComponent as FixedCircleIcon } from 'icons/fixedCircle.svg';
import { css, useTheme, keyframes } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const FixedCircle = () => {
  const theme = useTheme();
  const bouncingAnimation = keyframes`
    0% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(5px);
    }
    `;

  return (
    <div
      css={css`
        position: fixed;
        z-index: 200;
        top: 160px;
        right: 20px;
        width: 57px;
        height: 57px;
        animation: ${bouncingAnimation} 1s infinite alternate;
        background-image: linear-gradient(237deg, #4eb2fb, #ac53f3);
        border-radius: 50%;

        &:hover {
          animation: none;
        }

        ${breakpointsMap.TABLET} {
          top: 155px;
        }

        ${breakpointsMap.DESKTOP} {
          top: 225px;
          left: 5px;
        }
      `}
    >
      <a
        href="/"
        css={css`
          display: block;
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.altColorText};
          font-size: 10px;
          &:hover {
            color: ${theme.colors.altColorText};
          }
        `}
      >
        <FixedCircleIcon fill="#fff" width="24.7px" height="24.7px" />
        Запись
      </a>
    </div>
  );
};

export default FixedCircle;
