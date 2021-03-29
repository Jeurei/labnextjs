import { useTheme, css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const Contacts = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        padding-top: 10px;
        padding-right: 12px;
        padding-bottom: 8px;
        padding-left: 12px;
        margin-bottom: 25px;
        background-image: ${theme.colors.linearGradient};
        color: ${theme.colors.white};

        ${breakpointsMap.TABLET} {
          font-size: 13px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          width: 50%;
          flex-direction: column;
          padding-top: 18px;
          padding-right: 5px;
          padding-bottom: 18px;
          border-right: 1px dashed ${theme.colors.white};

          ${breakpointsMap.TABLET} {
            flex-direction: row;
          }
        `}
      >
        <p
          css={css`
            margin: 0;
            margin-bottom: 10px;

            ${breakpointsMap.TABLET} {
              margin-right: 60px;
              margin-bottom: 0;
            }

            ${breakpointsMap.DESKTOP} {
              margin-right: 70px;
            }
          `}
        >
          Телефон отдела кадров
        </p>
        <p
          css={css`
            margin: 0;
          `}
        >
          2 700 789, доб. 800
        </p>
      </div>
      <div
        css={css`
          display: flex;
          width: 50%;
          flex-direction: column;
          padding-top: 18px;
          padding-bottom: 18px;
          margin-left: 20px;
          ${breakpointsMap.TABLET} {
            flex-direction: row;
          }
        `}
      >
        <p
          css={css`
            margin: 0;
            margin-bottom: 10px;

            ${breakpointsMap.TABLET} {
              margin-right: 60px;
              margin-bottom: 0;
            }

            ${breakpointsMap.DESKTOP} {
              margin-right: 70px;
            }
          `}
        >
          E-mail отдела кадров
        </p>
        <p
          css={css`
            margin: 0;
          `}
        >
          info@labdiag.perm.ru
        </p>
      </div>
    </div>
  );
};

export default Contacts;
