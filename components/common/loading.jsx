import { keyframes, css } from '@emotion/react';
import { ReactComponent as SmallLogo } from 'icons/small-logo.svg';

const Loading = () => {
  const flipingAnimation = keyframes`
  {
    50% {
      transform: rotate3d(0, 1, 0, 90deg);
    }
  }`;

  return (
    <div
      css={css`
        svg {
          width: 100px;
          height: 100px;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
        }
      `}
    >
      <SmallLogo />
    </div>
  );
};

export default Loading;
