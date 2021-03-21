import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { ReactComponent as ExpandIcon } from 'icons/expand-icon.svg';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';
import { css, useTheme } from '@emotion/react';
import Select from 'common/select';
import Picture from 'common/picture';
import { breakpointsMap } from 'constants/styles';
import Link from 'next/link';

const Complexes = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div
        className="search__container-input-group"
        css={css`
          display: flex;
          width: 100%;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            flex-wrap: wrap;
            padding-right: 0;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            .select {
              width: 100%;
              height: 100%;
              margin-bottom: 10px;
            }

            .select__control {
              padding-top: 7px;
              padding-bottom: 7px;
              border-color: ${theme.colors.blue};
              border-radius: 4px !important;
            }

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              flex-wrap: wrap;
              margin-bottom: 10px;

              .select {
                width: 305px;
                flex-grow: 1;
                margin: 0;
                margin-right: 20px;

                &:last-of-type {
                  margin-right: 0;
                }
              }

              ${breakpointsMap.DESKTOP} {
                margin-right: 6px;
                margin-bottom: 0;
                .select {
                  width: 229px;
                  margin-right: 6px;
                }
              }
            }
          `}
        >
          <Select
            selectClass="services-complexes"
            action={() => console.log(true)}
            data={{ value: 'test', labe: 'test' }}
            placeholder="Органы системы"
          />
          <Select
            selectClass="services-complexes"
            action={() => console.log(true)}
            data={{ value: 'test', labe: 'test' }}
            placeholder="Заболевания"
          />
        </div>
        <div
          css={css`
            position: relative;
            display: flex;
            width: 100%;
            flex-grow: 1;

            ${breakpointsMap.DESKTOP} {
              width: 628px;
            }
          `}
        >
          <SearchIcon
            width="13px"
            height="13px"
            fill="none"
            stroke="currentColor"
            css={css`
              position: absolute;
              top: 19px;
              left: 22px;
              color: #000;
            `}
          />
          <input
            type="text"
            className="search__input"
            placeholder="Например, биохимический анализ крови"
            aria-label="Введите что хотите найти"
            aria-describedby="search-descr"
            css={css`
              padding-top: 17px;
              padding-left: 44px;
              border: 1px solid ${theme.colors.blue};
              border-bottom-left-radius: 4px;
              border-top-left-radius: 4px;
              font-size: 13px;
              &:before {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 13px;
                height: 13px;
                background-image: url('img/search-icon.svg');
                content: '';
              }
            `}
          />
          <p className="visually-hidden" id="search-descr">
            Введите ваш поисковый запрос…
          </p>
          <button
            className="search__button"
            type="button"
            name="search-button"
            aria-label="Кнопка поиска"
          >
            <SearchIcon
              width="25px"
              height="25px"
              fill="none"
              stroke="currentColor"
            />
          </button>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            min-width: 100%;
            min-height: 245px;
            flex-direction: column;
            align-items: center;
            margin-right: auto;
            margin-bottom: 10px;
            box-shadow: ${theme.colors.boxShadow};

            .complex__img {
              min-width: 126px;
              height: 100%;
            }

            &:nth-of-type(2n) {
              margin-right: 0;
            }

            @media (min-width: 465px) {
              flex-direction: row;
              align-items: stretch;
            }

            ${breakpointsMap.DESKTOP} {
              min-width: 580px;
            }
          `}
        >
          <Picture
            src="img/service-complex"
            imgClass="complex__img"
            containerClass="complex__img-container"
            alt="Изображение описывающющее анализ"
            width="126"
            height="245"
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              padding-right: 80px;
              padding-bottom: 20px;
              padding-left: 21px;
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
            <div
              css={css`
                margin-bottom: auto;
                letter-spacing: -0.5px;
              `}
            >
              <p>Анализы комплекса:</p>
              <ul
                css={css`
                  padding: 0;
                `}
              >
                <li>
                  30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)
                </li>
                <li> 45.2 / Взятие крови на показатель ImG</li>
                <li>
                  30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)
                </li>
                <li>
                  30.31 / Коагулограмма (АПТВ,ПТВ,ТВ,МНО, РФМК, фибриноген)
                </li>
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
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: flex-end;
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
            <button
              className="buy__button"
              type="button"
              css={css`
                position: absolute;
                right: 14px;
                bottom: 18px;
                display: flex;
                width: 60px;
                height: 60px;
                align-items: center;
                justify-content: center;
                border: none;
                appearance: none;
                background-color: transparent;
                background-image: linear-gradient(
                  -135deg,
                  rgba(255, 0, 235, 0.2) 0%,
                  rgba(154, 102, 245, 0.2) 50%,
                  rgba(43, 215, 255, 0.2) 100%
                );
                border-radius: 50%;
              `}
            >
              <CartIcon fill="#9A66F5" width="23.74px" height="21px" />{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complexes;
