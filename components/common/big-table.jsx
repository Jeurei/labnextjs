import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const BigTable = () => {
  const theme = useTheme();

  const TableColumn = () => (
    <ul
      css={css`
        flex-grow: 1;
        padding: 0;
        margin-right: 10px;
        list-style: none;
      `}
    >
      <li
        css={css`
          padding-top: 21px;
          padding-bottom: 18px;
          padding-left: 16px;
          margin-bottom: 3px;
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
          font-size: 16px;
        `}
      >
        Таблица
      </li>
      <li
        css={css`
          padding-top: 18px;
          padding-bottom: 18px;
          padding-left: 16px;
          background-color: #fafafa;
          font-size: 13px;
        `}
      >
        Данные таблицы
      </li>
    </ul>
  );
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding-right: 10px;
        padding-left: 10px;
        margin-bottom: 10px;

        ${breakpointsMap.TABLET} {
          padding: 0;
        }

        ${breakpointsMap.DESKTOP} {
          flex-direction: row;
        }
      `}
    >
      {new Array(3).fill().map(() => (
        <TableColumn />
      ))}
    </div>
  );
};

export default BigTable;
