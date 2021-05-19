import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Image from 'next/image';
import { ReactComponent as ExpandIcon } from 'icons/expand-icon.svg';
import Link from 'next/link';
import BuyButton from './buyButton';

const Complex = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          min-width: 100%;
          min-height: 245px;
          margin-bottom: 10px;
          box-shadow: ${theme.colors.boxShadow};

          .complex__img {
            height: 100%;
          }

          @media (min-width: 400px) {
            padding-right: 60px;
          }
        `}
      >
        <div
          className="complex__img-container"
          css={css`
            position: relative;
            width: 126px;
            height: 245px;
          `}
        >
          <Image
            src="/img/service-complex.png"
            className="complex__img"
            alt="Изображение описывающющее анализ"
            layout="fill"
            css={css`
              object-fit: cover;
            `}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            align-items: flex-start;
            padding-right: 21px;
            padding-bottom: 20px;
            padding-left: 21px;

            .buy__button {
              bottom: 100px;
            }

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              padding-right: 80px;
            }
          `}
        >
          <div
            css={css`
              margin-bottom: 10px;
              letter-spacing: -0.5px;

              ${breakpointsMap.DESKTOP} {
                margin-bottom: 0;
              }
            `}
          >
            <Link href="/analyze/Обследование печени, скрининг">
              <a
                css={css`
                  margin-top: 15px;
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Обследование печени, скрининг
              </a>
            </Link>
            <p>Анализы комплекса:</p>
            <ul
              css={css`
                padding: 0;
              `}
            >
              <li>30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)</li>
              <li> 45.2 / Взятие крови на показатель ImG</li>
              <li>30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)</li>
              <li>30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)</li>
            </ul>
            <a
              href="some"
              className="complex__expand-button"
              aria-label="нажмите что развернуть все анализы"
              role="button"
              tabIndex="0"
              css={css`
                padding-left: 0;
              `}
            >
              Показать все анализы
            </a>
          </div>
          <a
            href="/"
            css={css`
              align-self: flex-start;
              padding-bottom: 5px;
              border-bottom: 1px solid ${theme.colors.blue};
              margin-bottom: 10px;
              font-size: 16px;
              font-weight: 500;

              @media (min-width: 400px) {
                align-self: flex-end;
              }

              ${breakpointsMap.DESKTOP} {
                align-self: center;
                margin-bottom: 0;
              }
            `}
          >
            Показать анализы
          </a>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              align-self: flex-start;

              @media (min-width: 400px) {
                align-self: flex-end;
              }

              ${breakpointsMap.DESKTOP} {
                align-self: center;
                margin-bottom: 0;
              }
            `}
          >
            <span
              css={css`
                margin-bottom: 5px;
                font-size: 12px;
                font-weight: 500;
                text-decoration: line-through;
              `}
            >
              1 100 ₽
            </span>
            <span
              css={css`
                margin-bottom: 5px;
                font-size: 26px;
                font-weight: 500;
              `}
            >
              1 100 ₽
            </span>
            <a
              href="/"
              css={css`
                color: ${theme.colors.blue};
                font-size: 12px;
              `}
            >
              Включает 6 анализов
              <ExpandIcon
                fill="none"
                stroke={theme.colors.blue}
                css={css`
                  transform: rotate(-455deg);
                `}
              />
            </a>
          </div>
          <BuyButton />
        </div>
      </div>
    </div>
  );
};

export default Complex;
