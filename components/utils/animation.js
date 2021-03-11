import { keyframes } from '@emotion/react';

export const showing = keyframes`
0% {
  opacity:0;
  transform: translateY(-100px);
}
100% {
  opacity:1;
  transform: translateY(-24px);
}
`;

export const searchShowing = keyframes`
0% {
  min-height:0;
}

100% {
  min-height:400px;
}
`;

export const headerFixedShowing = keyframes`
0% {
  min-height:0;
}
100% {
  min-height: 64px;
}
`;
