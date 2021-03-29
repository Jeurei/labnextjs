import { breakpointsMap } from 'constants/styles';
import { css, useTheme } from '@emotion/react';
import Link from 'next/link';

const MedCenterLink = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        margin-bottom: 30px;
        background-color: #f7f7f7;

        ${breakpointsMap.TABLET} {
          display: flex;
          flex-direction: column;
        }

        ${breakpointsMap.DESKTOP} {
          flex-direction: row;
        }
      `}
    >
      <div
        css={css`
          padding-top: 17px;
          padding-left: 10px;

          ${breakpointsMap.DESKTOP} {
            width: 390px;
            flex-grow: 1;
            padding-left: 32px;
          }
        `}
      >
        <h3
          css={css`
            font-size: 13px;
            font-weight: 400;
          `}
        >
          Заборный пункт
        </h3>
        <p
          css={css`
            margin: 0;
            margin-top: 10px;
            margin-bottom: 10px;
            font-weight: 500;
          `}
        >
          г. Пермь, ул. Культуры, д. 52, оф. 345
        </p>
        <ul
          css={css`
            display: flex;
            padding: 0;
            list-style: none;
          `}
        >
          <li
            css={css`
              width: 31px;
              height: 31px;
              background-color: ${theme.colors.blue};
              background-image: url('img/doctor-white.svg');
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              border-radius: 50%;
              content: '';
            `}
          />
        </ul>
      </div>
      <div
        className="baloon"
        css={css`
          min-width: auto;
          background-color: ${theme.colors.white};
          box-shadow: ${theme.colors.boxShadow};

          ${breakpointsMap.DESKTOP} {
            width: 390px;
            flex-grow: 1;
          }
        `}
      >
        <div
          className="baloon__middle"
          css={css`
            border-bottom: none;
          `}
        >
          <div
            className="baloon__middle-container"
            css={css`
              padding-left: 0;

              ${breakpointsMap.TABLET} {
                display: flex;
                justify-content: center;
              }
            `}
          >
            <div
              className="baloon__shedule"
              css={css`
                width: 100%;
              `}
            >
              <p
                className="baloon__shedule-working-time"
                css={css`
                  padding-left: 30px;
                `}
              >
                Сегодня с
                <span
                  className="baloon__shedule-time"
                  css={css`
                    &:after {
                      display: none;
                    }
                  `}
                >
                  7:00 - 19:00
                </span>
                <svg
                  className="baloon__shedule-working-time-icon"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  css={css`
                    left: 15px;
                  `}
                >
                  <g transform="translate(-1064.471 -174.964)">
                    <g transform="translate(1064.471 174.964)">
                      <g transform="translate(0 0)">
                        <path
                          d="M1209.971,258.964a4.5,4.5,0,1,0,4.5,4.5,4.513,4.513,0,0,0-4.5-4.5Zm0,8.1a3.6,3.6,0,1,1,3.6-3.6A3.61,3.61,0,0,1,1209.971,267.064Zm.225-5.85h-.675v2.7l2.34,1.44.36-.585-2.025-1.215Z"
                          transform="translate(-1205.471 -258.964)"
                          fill="#000"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </p>
              <p
                className="baloon__shedule-state"
                css={css`
                  padding-left: 20px;
                `}
              >
                Открыто
              </p>
              <ul
                className="shedule shedule--shown"
                css={css`
                  display: flex;
                  justify-content: space-between;
                  padding-right: 10px;
                  padding-left: 10px;
                `}
              >
                <li
                  className="shedule__item"
                  css={css`
                    ${breakpointsMap.TABLET} {
                      flex-direction: row;
                      margin-right: 5px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      flex-direction: column;
                    }
                  `}
                >
                  <p className="shedule__day">ПН</p>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}
                  >
                    <time className="shdeule__time">07:00</time>
                    <time className="shdeule__time">19:00</time>
                  </div>
                </li>
                <li
                  className="shedule__item"
                  css={css`
                    ${breakpointsMap.TABLET} {
                      flex-direction: row;
                      margin-right: 5px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      flex-direction: column;
                    }
                  `}
                >
                  <p className="shedule__day">ПН</p>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}
                  >
                    <time className="shdeule__time">07:00</time>
                    <time className="shdeule__time">19:00</time>
                  </div>
                </li>
                <li
                  className="shedule__item"
                  css={css`
                    ${breakpointsMap.TABLET} {
                      flex-direction: row;
                      margin-right: 5px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      flex-direction: column;
                    }
                  `}
                >
                  <p className="shedule__day">ПН</p>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}
                  >
                    <time className="shdeule__time">07:00</time>
                    <time className="shdeule__time">19:00</time>
                  </div>
                </li>
                <li
                  className="shedule__item"
                  css={css`
                    ${breakpointsMap.TABLET} {
                      flex-direction: row;
                      margin-right: 5px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      flex-direction: column;
                    }
                  `}
                >
                  <p className="shedule__day">ПН</p>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}
                  >
                    <time className="shdeule__time">07:00</time>
                    <time className="shdeule__time">19:00</time>
                  </div>
                </li>
                <li
                  className="shedule__item"
                  css={css`
                    ${breakpointsMap.TABLET} {
                      flex-direction: row;
                      margin-right: 5px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      flex-direction: column;
                    }
                  `}
                >
                  <p className="shedule__day">ПН</p>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}
                  >
                    <time className="shdeule__time">07:00</time>
                    <time className="shdeule__time">19:00</time>
                  </div>
                </li>
                <li
                  className="shedule__item"
                  css={css`
                    ${breakpointsMap.TABLET} {
                      flex-direction: row;
                      margin-right: 5px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      flex-direction: column;
                    }
                  `}
                >
                  <p className="shedule__day">ПН</p>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}
                  >
                    <time className="shdeule__time">07:00</time>
                    <time className="shdeule__time">19:00</time>
                  </div>
                </li>
                <li
                  className="shedule__item"
                  css={css`
                    ${breakpointsMap.TABLET} {
                      flex-direction: row;
                      margin-right: 5px;
                    }

                    ${breakpointsMap.DESKTOP} {
                      flex-direction: column;
                    }
                  `}
                >
                  <p className="shedule__day">ПН</p>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}
                  >
                    <time className="shdeule__time">07:00</time>
                    <time className="shdeule__time">19:00</time>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        css={css`
          position: relative;

          &:after {
            position: absolute;
            top: 40px;
            right: 10px;
            display: block;
            width: 17px;
            height: 1px;
            background-color: ${theme.colors.blue};
            content: '';
            transform: rotate(45deg);
          }

          &:before {
            position: absolute;
            top: 52px;
            right: 10px;
            display: block;
            width: 17px;
            height: 1px;
            background-color: ${theme.colors.blue};
            content: '';
            transform: rotate(-45deg);
          }

          &:hover {
            background-image: ${theme.colors.linearGradient};

            &:before,
            &:after {
              background-color: ${theme.colors.white};
            }
          }

          ${breakpointsMap.DESKTOP} {
            width: 390px;
            flex-grow: 1;

            &:after {
              top: 50px;
            }

            &:before {
              top: 62px;
            }
          }
        `}
      >
        <Link href="centers/[id]" as="centers/1">
          <a
            css={css`
              position: relative;
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              justify-content: flex-start;
              padding-top: 29px;
              padding-bottom: 62px;
              padding-left: 38px;
              font-size: 16px;

              &:after {
                position: absolute;
                top: 68px;
                left: 38px;
                display: block;
                width: 130px;
                height: 14px;
                color: #9a66f5;
                content: '///////////';
                font-size: 22px;
                font-weight: 500;
                letter-spacing: 4.5px;
                opacity: 0.6;
                transform: skew(-16deg, 0deg);
              }

              &:hover {
                color: ${theme.colors.white};

                &:after {
                  color: ${theme.colors.white};
                }
              }

              ${breakpointsMap.DESKTOP} {
                &:after {
                  top: 78px;
                }
              }
            `}
          >
            Перейти на страницу
            <br />
            медицинского центра
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MedCenterLink;
