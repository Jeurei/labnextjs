import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import BuyButton from './buyButton';

const Table = () => {
  const theme = useTheme();

  const TableRow = () => {
    return (
      <tr
        className="table__row"
        css={css`
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding: 13px 17px;
          box-shadow: ${theme.colors.boxShadow};

          ${breakpointsMap.TABLET} {
            padding-top: 35px;
            padding-bottom: 35px;
          }

          ${breakpointsMap.DESKTOP} {
            padding-right: 70px;
          }
        `}
      >
        <td
          className="table__cell"
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-size: 12px;

            ${breakpointsMap.TABLET} {
              width: 77px;
              min-width: 77px;
            }

            ${breakpointsMap.DESKTOP} {
              width: 115px;
              margin-bottom: 0;
            }
          `}
        >
          18.110
        </td>
        <td
          className="table__cell"
          css={css`
            display: flex;
            width: 100%;
            align-items: center;
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: 500;

            ${breakpointsMap.TABLET} {
              width: 285px;
              margin-bottom: 0;
            }

            ${breakpointsMap.DESKTOP} {
              width: 268px;
              margin-right: auto;
              margin-bottom: 0;
            }
          `}
        >
          Общий анализ крови (5-diff), капиллярная кровь
        </td>
        <td
          className="table__cell"
          css={css`
            display: flex;
            width: 100%;
            align-items: center;
            margin-bottom: 10px;
            font-size: 12px;

            ${breakpointsMap.TABLET} {
              width: 110px;
              margin-right: 41px;
            }

            ${breakpointsMap.DESKTOP} {
              width: 128px;
              margin-right: auto;
              margin-bottom: 0;
            }
          `}
        >
          Кровь (сыворотка)
        </td>
        <td
          className="table__cell"
          css={css`
            display: flex;
            width: 110px;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <span
            css={css`
              margin-bottom: 2px;
              font-size: 26px;
              font-weight: 500;
            `}
          >
            1 100 ₽
          </span>
          <span
            css={css`
              font-size: 12px;
            `}
          >
            Срок 1 день
          </span>
        </td>
        <td
          css={css`
            .buy__button {
              bottom: 26px;
            }
          `}
        >
          <BuyButton />
        </td>
      </tr>
    );
  };

  return (
    <table
      css={css`
        display: flex;
        width: 100%;
        flex-direction: column;
        padding-top: 16px;
        margin-top: 12px;
        margin-bottom: 31px;
      `}
    >
      <tbody>
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;
