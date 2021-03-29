import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { ReactComponent as GridIcon } from 'icons/grid.svg';

const Articles = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        min-height: 92px;
        flex-direction: column;
        margin-bottom: 20px;

        ${breakpointsMap.DESKTOP} {
          flex-direction: row;
        }
      `}
    >
      <a
        href="/"
        css={css`
          position: relative;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          align-items: flex-end;
          justify-content: center;
          padding-top: 20px;
          padding-right: 10px;
          padding-bottom: 20px;
          background-color: #f7f7f7;
          text-align: right;

          &:before {
            position: absolute;
            top: 62px;
            left: 4px;
            display: block;
            width: 15px;
            height: 1px;
            background-color: ${theme.colors.colorText.hex};
            content: '';
            transform: rotate(45deg);
          }

          &:after {
            position: absolute;
            top: 51px;
            left: 4px;
            display: block;
            width: 15px;
            height: 1px;
            background-color: ${theme.colors.colorText.hex};
            content: '';
            transform: rotate(-45deg);
          }

          &:hover,
          &:active {
            background-image: ${theme.colors.linearGradient};
            color: ${theme.colors.white};

            &:before,
            &:after {
              background-color: ${theme.colors.white};
            }
          }

          ${breakpointsMap.TABLET} {
            padding-right: 47px;

            &:after {
              top: 46px;
            }
            &:before {
              top: 57px;
            }
          }

          ${breakpointsMap.DESKTOP} {
            padding-top: 0;
            padding-bottom: 0;
          }
        `}
      >
        <span
          css={css`
            font-size: 10px;
          `}
        >
          Предыдущая
        </span>
        <h3
          css={css`
            font-weight: 500;
            font-weight: 16px;
          `}
        >
          Врачи диагностировали у Байдена две трещины в костях ноги
        </h3>
      </a>
      <div
        css={css`
          padding-top: 20px;
          padding-bottom: 20px;
          background-image: ${theme.colors.linearGradient};

          ${breakpointsMap.DESKTOP} {
            width: 166px;
            padding: 0;
          }
        `}
      >
        <a
          href="/"
          css={css`
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${theme.colors.white};

            &:hover,
            &:active {
              color: ${theme.colors.white};
            }
          `}
        >
          <GridIcon />
          <span>Смотреть все</span>
        </a>
      </div>
      <a
        href="/"
        css={css`
          position: relative;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          align-items: flex-start;
          justify-content: center;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 10px;
          background-color: #f7f7f7;

          &:before {
            position: absolute;
            top: 62px;
            right: 4px;
            display: block;
            width: 15px;
            height: 1px;
            background-color: ${theme.colors.colorText.hex};
            content: '';
            transform: rotate(-45deg);
          }

          &:after {
            position: absolute;
            top: 51px;
            right: 4px;
            display: block;
            width: 15px;
            height: 1px;
            background-color: ${theme.colors.colorText.hex};
            content: '';
            transform: rotate(45deg);
          }

          &:hover,
          &:active {
            background-image: ${theme.colors.linearGradient};
            color: ${theme.colors.white};

            &:before,
            &:after {
              background-color: ${theme.colors.white};
            }
          }

          ${breakpointsMap.TABLET} {
            padding-left: 47px;

            &:after {
              top: 46px;
            }
            &:before {
              top: 57px;
            }
          }

          ${breakpointsMap.DESKTOP} {
            padding-top: 0;
            padding-bottom: 0;
          }
        `}
      >
        <span
          css={css`
            font-size: 10px;
          `}
        >
          Следующая
        </span>
        <h3
          css={css`
            font-weight: 500;
            font-weight: 16px;
          `}
        >
          Врачи диагностировали у Байдена две трещины в костях ноги
        </h3>
      </a>
    </div>
  );
};

export default Articles;
