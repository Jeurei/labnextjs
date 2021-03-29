import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const SheduleTable = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding-top: 3.5px;

        ${breakpointsMap.DESKTOP} {
          width: 570px;
          margin-right: auto;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          max-width: 370px;
          margin: 0 auto;

          ${breakpointsMap.TABLET} {
            display: none;
          }
        `}
      >
        <h3
          css={css`
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 10px;
            margin: 0;
            margin-right: 8px;
            margin-bottom: 8px;
            background-color: ${theme.colors.blue};
            border-radius: 4px;
            color: ${theme.colors.white};
            font-weight: 400;
            text-align: left;
          `}
        >
          График приёма пациентов
        </h3>
        <div>
          <h4
            css={css`
              width: 100%;
              padding: 10px;
              margin: 0;
              background-color: #f7f7f7;
              border-radius: 4px;
              font-size: 16px;
              font-weight: 500;
              text-align: center;
              vertical-align: center;
            `}
          >
            Взятие крови
          </h4>
          <ul
            css={css`
              display: flex;
              justify-content: space-between;
              padding: 0;
              padding-right: 5px;
              padding-left: 5px;
              list-style: none;
            `}
          >
            <li
              css={css`
                display: flex;
                width: 95px;
                align-items: center;
                justify-content: center;
                padding: 10px;
                background-color: ${theme.colors.colorText.hex};
                border-radius: 4px;
                color: ${theme.colors.white};
              `}
            >
              ПН-ПТ
            </li>
            <li
              css={css`
                display: flex;
                width: 95px;
                align-items: center;
                justify-content: center;
                padding: 10px;
                background-color: ${theme.colors.colorText.hex};
                border-radius: 4px;
                color: ${theme.colors.white};
              `}
            >
              СБ
            </li>
            <li
              css={css`
                display: flex;
                width: 95px;
                align-items: center;
                justify-content: center;
                padding: 10px;
                background-color: ${theme.colors.colorText.hex};
                border-radius: 4px;
                color: ${theme.colors.white};
              `}
            >
              ВС
            </li>
          </ul>
          <ul
            css={css`
              display: flex;
              justify-content: space-between;
              padding: 0;
              padding-right: 5px;
              padding-left: 5px;
              list-style: none;
            `}
          >
            <li
              css={css`
                display: flex;
                width: 95px;
                align-items: center;
                justify-content: center;
                padding: 10px 0;
                background-color: #f7f7f7;
                border-radius: 4px;
                color: ${theme.colors.colorText.hex};
              `}
            >
              07:00 - 19:00
            </li>
            <li
              css={css`
                display: flex;
                width: 95px;
                align-items: center;
                justify-content: center;
                padding: 10px 0;
                background-color: #f7f7f7;
                border-radius: 4px;
                color: ${theme.colors.colorText.hex};
              `}
            >
              07:00 - 19:00
            </li>
            <li
              css={css`
                display: flex;
                width: 95px;
                align-items: center;
                justify-content: center;
                padding: 10px 0;
                background-color: #f7f7f7;
                border-radius: 4px;
                color: ${theme.colors.colorText.hex};
              `}
            >
              07:00 - 19:00
            </li>
          </ul>
        </div>
      </div>
      <table
        css={css`
          display: none;
          width: 100%;
          margin-bottom: 10px;

          ${breakpointsMap.TABLET} {
            display: table;
          }
        `}
      >
        <thead>
          <tr
            css={css`
              display: flex;
              padding-right: 5px;
              padding-left: 5px;
              margin-bottom: 6px;

              ${breakpointsMap.DESKTOP} {
                padding: 0;
              }
            `}
          >
            <th
              css={css`
                display: flex;
                width: 160px;
                flex-grow: 1;
                align-items: center;
                padding-top: 13px;
                padding-bottom: 15px;
                padding-left: 26px;
                margin-right: 8px;
                background-color: ${theme.colors.blue};
                border-radius: 4px;
                color: ${theme.colors.white};
                font-weight: 400;
                text-align: left;

                ${breakpointsMap.DESKTOP} {
                  width: 263px;
                }
              `}
            >
              График приёма пациентов
            </th>
            <th
              css={css`
                display: flex;
                width: 75px;
                flex-grow: 0.5;
                align-items: center;
                justify-content: center;
                padding-top: 13px;
                padding-bottom: 15px;
                margin-right: 8px;
                background-color: ${theme.colors.colorText.hex};
                border-radius: 4px;
                color: ${theme.colors.white};
                font-weight: 400;
                vertical-align: center;
                ${breakpointsMap.DESKTOP} {
                  width: 90px;
                }
              `}
            >
              ПН-ПТ
            </th>
            <th
              css={css`
                display: flex;
                width: 75px;
                flex-grow: 0.5;
                align-items: center;
                justify-content: center;
                padding-top: 13px;
                padding-bottom: 15px;
                margin-right: 8px;
                background-color: ${theme.colors.colorText.hex};
                border-radius: 4px;
                color: ${theme.colors.white};
                font-weight: 400;

                ${breakpointsMap.DESKTOP} {
                  width: 90px;
                }
              `}
            >
              СБ
            </th>
            <th
              css={css`
                display: flex;
                width: 75px;
                flex-grow: 0.5;
                align-items: center;
                justify-content: center;
                padding-top: 13px;
                padding-bottom: 15px;
                background-color: ${theme.colors.colorText.hex};
                border-radius: 4px;
                color: ${theme.colors.white};
                font-weight: 400;

                ${breakpointsMap.DESKTOP} {
                  width: 90px;
                }
              `}
            >
              ВС
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            css={css`
              display: flex;
              padding-right: 5px;
              padding-left: 5px;
              margin-bottom: 6px;

              ${breakpointsMap.DESKTOP} {
                padding: 0;
              }
            `}
          >
            <td
              css={css`
                display: flex;
                width: 160px;
                flex-grow: 1;
                align-items: center;
                padding-top: 13px;
                padding-bottom: 15px;
                padding-left: 26px;
                margin-right: 8px;
                background-color: #f7f7f7;
                border-radius: 4px;
                color: ${theme.colors.colorText.hex};
                font-weight: 500;
                text-align: left;

                ${breakpointsMap.DESKTOP} {
                  width: 263px;
                }
              `}
            >
              Взятие крови
            </td>
            <td
              css={css`
                display: flex;
                width: 75px;
                flex-grow: 0.5;
                align-items: center;
                justify-content: center;
                padding-top: 13px;
                padding-bottom: 15px;
                margin-right: 8px;
                background-color: #f7f7f7;
                border-radius: 4px;
                color: ${theme.colors.colorText.hex};
                font-weight: 400;
                vertical-align: center;
                ${breakpointsMap.DESKTOP} {
                  width: 90px;
                }
              `}
            >
              07:00 - 19:00{' '}
            </td>
            <td
              css={css`
                display: flex;
                width: 75px;
                flex-grow: 0.5;
                align-items: center;
                justify-content: center;
                padding-top: 13px;
                padding-bottom: 15px;
                margin-right: 8px;
                background-color: #f7f7f7;
                border-radius: 4px;
                color: ${theme.colors.colorText.hex};
                font-weight: 400;

                ${breakpointsMap.DESKTOP} {
                  width: 90px;
                }
              `}
            >
              07:00 - 19:00
            </td>
            <td
              css={css`
                display: flex;
                width: 75px;
                flex-grow: 0.5;
                align-items: center;
                justify-content: center;
                padding-top: 13px;
                padding-bottom: 15px;
                background-color: #f7f7f7;
                border-radius: 4px;
                color: ${theme.colors.colorText.hex};
                font-weight: 400;

                ${breakpointsMap.DESKTOP} {
                  width: 90px;
                }
              `}
            >
              07:00 - 19:00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SheduleTable;
