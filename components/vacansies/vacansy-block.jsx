import { useTheme, css } from '@emotion/react';
import Link from 'next/link';

const VacansyBlock = () => {
  const theme = useTheme();
  return (
    <article
      css={css`
        width: 100%;
        min-height: 396px;
        padding: 37px 34px;
        box-shadow: ${theme.colors.boxShadow};

        &:hover {
          background-image: linear-gradient(214deg, #54adfb, #ba45f1);
          * {
            color: ${theme.colors.white};
            opacity: 1;
          }

          .vacansy__sallary {
            border-top-color: ${theme.colors.white};
            border-bottom-color: ${theme.colors.white};
          }

          .vacansy__link {
            color: ${theme.colors.white};

            &:before {
              background-color: ${theme.colors.white};
              background-image: none;
            }
          }
        }
      `}
    >
      <h3
        css={css`
          margin: 0;
          margin-bottom: 27px;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        Бухгалтер
      </h3>
      <ul
        css={css`
          padding: 0;
          margin-bottom: 24px;
          list-style: none;
        `}
      >
        <li
          css={css`
            display: flex;
          `}
        >
          <p
            className="vacancy__op-text"
            css={css`
              margin-right: auto;
              opacity: 0.4;
            `}
          >
            График:
          </p>
          <p>Полный рабочий день</p>
        </li>
        <li
          css={css`
            display: flex;
          `}
        >
          <p
            className="vacancy__op-text"
            css={css`
              margin-right: auto;
              opacity: 0.4;
            `}
          >
            График:
          </p>
          <p>Полный рабочий день</p>
        </li>
        <li
          css={css`
            display: flex;
          `}
        >
          <p
            className="vacancy__op-text"
            css={css`
              margin-right: auto;
              opacity: 0.4;
            `}
          >
            График:
          </p>
          <p>Полный рабочий день</p>
        </li>
      </ul>
      <div
        className="vacansy__sallary"
        css={css`
          display: flex;
          padding-top: 35px;
          padding-bottom: 39px;
          border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.4);
          border-bottom: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.4);
          margin-bottom: 28px;
        `}
      >
        <p
          className="vacancy__op-text"
          css={css`
            margin: 0;
            margin-right: auto;
            opacity: 0.4;
          `}
        >
          Оплата труда:
        </p>
        <span
          css={css`
            font-size: 26px;
            font-weight: 500;
          `}
        >
          31 100 ₽
        </span>
      </div>
      <Link href="vacansies/[id]" as="vacansies/1">
        <a
          className="vacansy__link"
          css={css`
            position: relative;
            padding-bottom: 9px;
            cursor: pointer;
            font-size: 13px;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              display: block;
              width: 102px;
              height: 4px;
              background-image: linear-gradient(214deg, #54adfb, #ba45f1);
              content: '';
            }
          `}
        >
          Подробнее о вакансии
        </a>
      </Link>
    </article>
  );
};

export default VacansyBlock;
