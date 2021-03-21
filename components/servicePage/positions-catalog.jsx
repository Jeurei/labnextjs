import { useTheme, css } from '@emotion/react';
import { ReactComponent as DoctorIcon } from 'icons/doctor.svg';
import { breakpointsMap } from 'constants/styles';

const positionsList = () => {
  const theme = useTheme();

  return (
    <ul
      css={css`
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0;

        ${breakpointsMap.TABLET} {
          flex-direction: row;
        }
      `}
    >
      <li
        css={css`
          position: relative;
          margin-bottom: 15px;
          box-shadow: ${theme.colors.boxShadow};
          font-size: 16px;
          list-style: none;

          .icon {
            position: absolute;
            top: 6px;
            left: 15px;
            color: ${theme.colors.blue};
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            flex-grow: 1;
            margin-right: 10px;
            margin-bottom: 30px;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            width: 370.5px;
            flex-grow: 0;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon
          className="icon"
          fill="currentColor"
          width="22px"
          height="33px"
        />
        <a
          href="/"
          css={css`
            display: block;
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
      <li
        css={css`
          position: relative;
          margin-bottom: 15px;
          box-shadow: ${theme.colors.boxShadow};
          font-size: 16px;
          list-style: none;

          .icon {
            position: absolute;
            top: 6px;
            left: 15px;
            color: ${theme.colors.blue};
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            flex-grow: 1;
            margin-right: 10px;
            margin-bottom: 30px;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            width: 370.5px;
            flex-grow: 0;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon
          className="icon"
          fill="currentColor"
          width="22px"
          height="33px"
        />
        <a
          href="/"
          css={css`
            display: block;
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
      <li
        css={css`
          position: relative;
          margin-bottom: 15px;
          box-shadow: ${theme.colors.boxShadow};
          font-size: 16px;
          list-style: none;

          .icon {
            position: absolute;
            top: 6px;
            left: 15px;
            color: ${theme.colors.blue};
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            flex-grow: 1;
            margin-right: 10px;
            margin-bottom: 30px;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            width: 370.5px;
            flex-grow: 0;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon
          className="icon"
          fill="currentColor"
          width="22px"
          height="33px"
        />
        <a
          href="/"
          css={css`
            display: block;
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
      <li
        css={css`
          position: relative;
          margin-bottom: 15px;
          box-shadow: ${theme.colors.boxShadow};
          font-size: 16px;
          list-style: none;

          .icon {
            position: absolute;
            top: 6px;
            left: 15px;
            color: ${theme.colors.blue};
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            flex-grow: 1;
            margin-right: 10px;
            margin-bottom: 30px;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            width: 370.5px;
            flex-grow: 0;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon
          className="icon"
          fill="currentColor"
          width="22px"
          height="33px"
        />
        <a
          href="/"
          css={css`
            display: block;
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
      <li
        css={css`
          position: relative;
          margin-bottom: 15px;
          box-shadow: ${theme.colors.boxShadow};
          font-size: 16px;
          list-style: none;

          .icon {
            position: absolute;
            top: 6px;
            left: 15px;
            color: ${theme.colors.blue};
          }

          &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.altColorText};

            a {
              color: ${theme.colors.altColorText};
            }

            .icon {
              color: ${theme.colors.altColorText};
            }
          }

          ${breakpointsMap.TABLET} {
            width: 245px;
            flex-grow: 1;
            margin-right: 10px;
            margin-bottom: 30px;

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 355px;
              flex-grow: 0;
            }
          }

          ${breakpointsMap.DESKTOP} {
            width: 370.5px;
            flex-grow: 0;
            margin-right: 30px;

            &:nth-of-type(2n) {
              margin-right: 30px;
            }

            &:nth-of-type(3n) {
              margin-right: 0;
            }

            &:last-of-type,
            &:nth-last-of-type(2):nth-of-type(odd) {
              width: 370px;
            }
          }
        `}
      >
        <DoctorIcon
          className="icon"
          fill="currentColor"
          width="22px"
          height="33px"
        />
        <a
          href="/"
          css={css`
            display: block;
            width: 100%;
            height: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 51.5px;
            font-weight: 500;
          `}
        >
          Аллерголог
        </a>
      </li>
    </ul>
  );
};

const PositionsCatalog = () => {
  return (
    <div
      css={css`
        width: 100%;
        padding-top: 23px;
      `}
    >
      {positionsList()}
    </div>
  );
};

export default PositionsCatalog;
