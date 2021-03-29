import { breakpointsMap } from 'constants/styles';
import { css, useTheme } from '@emotion/react';

const Table = () => {
  const theme = useTheme();

  const TableRow = () => (
    <tr
      css={css`
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding: 20px 22px 23px 21px;
        margin-bottom: 30px;
        box-shadow: ${theme.colors.boxShadow};

        ${breakpointsMap.DESKTOP} {
          flex-wrap: nowrap;
          align-items: center;
          padding: 40px 22px 43px 21px;
        }
      `}
    >
      <td
        css={css`
          width: 100%;
          padding-bottom: 15px;
          font-size: 16px;
          font-weight: 500;

          ${breakpointsMap.DESKTOP} {
            width: 379px;
            padding: 0;
          }
        `}
      >
        Бинт 5м х 10см нестерильный пл.36, шт
      </td>
      <td
        css={css`
          display: flex;
          align-items: flex-end;
          font-size: 12px;

          ${breakpointsMap.DESKTOP} {
            width: 177px;
          }
        `}
      >
        Шт
      </td>
      <td
        css={css`
          display: flex;
          align-items: flex-end;
          margin-right: auto;
          font-size: 12px;

          ${breakpointsMap.DESKTOP} {
            width: 154px;
            align-items: flex-start;
          }
        `}
      >
        3 200
      </td>
      <td
        css={css`
          display: flex;
          flex-direction: column;
          font-size: 26px;
          font-weight: 500;

          ${breakpointsMap.DESKTOP} {
            width: 223px;
          }
        `}
      >
        <span
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-bottom: 5px;
            font-size: 10px;

            ${breakpointsMap.DESKTOP} {
              display: none;
              justify-content: flex-start;
            }
          `}
        >
          Цена за шт:
        </span>
        1 100 ₽
      </td>
      <td
        css={css`
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 15px;
          font-size: 26px;
          font-weight: 500;

          ${breakpointsMap.DESKTOP} {
            width: 233px;
            padding: 0;
          }
        `}
      >
        <span
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-bottom: 5px;
            font-size: 10px;

            ${breakpointsMap.DESKTOP} {
              display: none;
            }
          `}
        >
          Итоговая цена:
        </span>
        43 100 ₽
      </td>
    </tr>
  );

  return (
    <table
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      `}
    >
      <caption
        css={css`
          padding-left: 5px;
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 500;
          text-align: left;

          ${breakpointsMap.DESKTOP} {
            margin-bottom: 25px;
          }
        `}
      >
        Прайс-лист
      </caption>
      <thead
        css={css`
          display: none;
          padding-top: 26.5px;
          padding-left: 17.5px;
          border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.5);
          margin-bottom: 27px;

          ${breakpointsMap.DESKTOP} {
            display: block;
          }
        `}
      >
        <tr>
          <th
            css={css`
              width: 377px;
              font-size: 12px;
              font-weight: 400;
              text-align: left;
            `}
          >
            Номенклатура
          </th>
          <th
            css={css`
              width: 175px;
              font-size: 12px;
              font-weight: 400;
              text-align: left;
            `}
          >
            Ед.изм.
          </th>
          <th
            css={css`
              width: 150px;
              font-size: 12px;
              font-weight: 400;
              text-align: left;
            `}
          >
            Кол-во
          </th>
          <th
            css={css`
              width: 219px;
              font-size: 12px;
              font-weight: 400;
              text-align: left;
            `}
          >
            Цена
          </th>
          <th
            css={css`
              width: 217px;
              font-size: 12px;
              font-weight: 400;
              text-align: left;
            `}
          >
            Стоимость
          </th>
        </tr>
      </thead>
      <tbody
        css={css`
          display: flex;
          flex-direction: column;
          padding-right: 5px;
          padding-left: 5px;

          ${breakpointsMap.TABLET} {
            padding: 0;
          }
        `}
      >
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;
