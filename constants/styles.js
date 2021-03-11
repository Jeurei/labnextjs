const breakpoints = [320, 425, 720, 1210];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const breakpointsMap = {
  MOBILE: mq[0],
  BIGMOBILE: mq[1],
  TABLET: mq[2],
  DESKTOP: mq[3],
};
