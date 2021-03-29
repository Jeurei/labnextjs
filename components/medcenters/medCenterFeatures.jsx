import { breakpointsMap } from 'constants/styles';
import { css, useTheme } from '@emotion/react';

const MedCenterFeatures = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        padding-top: 20.5px;
        padding-bottom: 23px;
        margin-bottom: 38px;

        &:after {
          position: absolute;
          z-index: -1;
          top: 0;
          left: -10%;
          display: block;
          width: 110vw;
          height: 100%;
          background-image: ${theme.colors.linearGradient};
          content: '';
        }
      `}
    >
      <ul
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: space-between;
          justify-content: center;
          padding: 0;
          padding-right: 10px;
          padding-left: 10px;
          color: ${theme.colors.white};
          list-style: none;

          ${breakpointsMap.TABLET} {
            flex-wrap: nowrap;
          }

          ${breakpointsMap.DESKTOP} {
            justify-content: space-between;
            padding-right: 20px;
            padding-left: 20px;
            margin: 0;
          }
        `}
      >
        <li
          css={css`
            display: flex;
            min-height: 31px;
            align-items: center;
            padding-left: 30px;
            margin-right: 10px;
            margin-bottom: 10px;
            background-image: url('/img/doctor-white.svg');
            background-position: left center;
            background-repeat: no-repeat;
            background-size: 23px 31px;

            ${breakpointsMap.DESKTOP} {
              margin: 0;
            }
          `}
        >
          Работает без выходных
        </li>
        <li
          css={css`
            display: flex;
            min-height: 31px;
            align-items: center;
            padding-left: 30px;
            margin-right: 10px;
            margin-bottom: 10px;
            background-image: url('/img/doctor-white.svg');
            background-position: left center;
            background-repeat: no-repeat;
            background-size: 23px 31px;

            ${breakpointsMap.DESKTOP} {
              margin: 0;
            }
          `}
        >
          Работает без выходных
        </li>
        <li
          css={css`
            display: flex;
            min-height: 31px;
            align-items: center;
            padding-left: 30px;
            margin-right: 10px;
            margin-bottom: 10px;
            background-image: url('/img/doctor-white.svg');
            background-position: left center;
            background-repeat: no-repeat;
            background-size: 23px 31px;

            ${breakpointsMap.DESKTOP} {
              margin: 0;
            }
          `}
        >
          Работает без выходных
        </li>
        <li
          css={css`
            display: flex;
            min-height: 31px;
            align-items: center;
            padding-left: 30px;
            margin-right: 10px;
            margin-bottom: 10px;
            background-image: url('/img/doctor-white.svg');
            background-position: left center;
            background-repeat: no-repeat;
            background-size: 23px 31px;

            ${breakpointsMap.TABLET} {
              margin-right: 0;
            }

            ${breakpointsMap.DESKTOP} {
              margin: 0;
            }
          `}
        >
          Работает без выходных
        </li>
      </ul>
    </div>
  );
};

export default MedCenterFeatures;
