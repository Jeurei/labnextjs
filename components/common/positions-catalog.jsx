import { useTheme, css } from '@emotion/react';
import { ReactComponent as DoctorIcon } from 'icons/doctor.svg';
import { breakpointsMap } from 'constants/styles';
import styled from '@emotion/styled';

const positionsList = () => {
  const theme = useTheme();

  const Position = styled('li')`
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
      width: 100%;
      margin-right: 10px;
      margin-bottom: 30px;
    }
  `;

  return (
    <ul
      css={css`
        display: grid;
        width: 100%;
        padding: 0;
        grid-column-gap: 30px;

        ${breakpointsMap.TABLET} {
          flex-direction: row;
          grid-template-columns: repeat(3, 1fr);
        }
      `}
    >
      <Position>
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
      </Position>
      <Position>
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
      </Position>
      <Position>
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
      </Position>
      <Position>
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
      </Position>
      <Position>
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
      </Position>
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
