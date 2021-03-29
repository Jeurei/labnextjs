import React from 'react';
import Picture from 'common/picture';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const Online = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Онлайн консультация эндокринолога</h2>
      <p
        css={css`
          margin: 0;
          font-weight: 500;

          ${breakpointsMap.TABLET} {
            padding: 0;
          }
        `}
      >
        Сео текстовое поле под контент, онлайн консультация эндокринолога в
        перми по выгодной цене, срочно! Недорогая консультация. Консультация из
        другого города, и таму подобный текст.
      </p>
      <div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-top: 37px;
            margin: 0;

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              flex-wrap: wrap;
            }
          `}
        >
          <h3
            css={css`
              width: 100%;
              margin: 0;
              margin-bottom: 38px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Эндокринологи
          </h3>
          <div
            css={css`
              display: flex;
              width: 339px;
              flex-direction: column;
              align-items: center;
              align-self: center;
              padding-bottom: 39px;
              margin-bottom: 29px;
              box-shadow: ${theme.colors.boxShadow};

              ${breakpointsMap.TABLET} {
                margin-right: auto;
              }

              ${breakpointsMap.DESKTOP} {
                margin-right: 31px;
              }
            `}
          >
            <Picture src="img/beatiful-young-fem" />
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
              `}
            >
              Мельникова Наталья Игоревна
            </p>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              Должность:
              <span
                css={css`
                  font-weight: 500;
                `}
              >
                Дерматовенеролог
              </span>
            </p>
            <button
              type="button"
              className="button"
              css={css`
                width: 297px;
                padding-top: 15px;
                padding-bottom: 17px;
                border: none;
              `}
            >
              Онлайн запись на прием
            </button>
          </div>
          <div
            css={css`
              display: flex;
              width: 339px;
              flex-direction: column;
              align-items: center;
              align-self: center;
              padding-bottom: 39px;
              margin-bottom: 29px;
              box-shadow: ${theme.colors.boxShadow};

              ${breakpointsMap.DESKTOP} {
                margin-right: 31px;
              }
            `}
          >
            <Picture src="img/beatiful-young-fem" />
            <p
              css={css`
                font-size: 16px;
              `}
            >
              Мельникова Наталья Игоревна
            </p>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              Должность: Дерматовенеролог
            </p>
            <button
              type="button"
              className="button"
              css={css`
                width: 297px;
                padding-top: 15px;
                padding-bottom: 17px;
                border: none;
              `}
            >
              Онлайн запись на прием
            </button>
          </div>
          <div
            css={css`
              display: flex;
              width: 339px;
              flex-direction: column;
              align-items: center;
              align-self: center;
              padding-bottom: 39px;
              margin-bottom: 29px;
              box-shadow: ${theme.colors.boxShadow};

              ${breakpointsMap.TABLET} {
                margin-right: auto;
              }

              ${breakpointsMap.DESKTOP} {
                margin-right: 31px;
              }
            `}
          >
            <Picture src="img/beatiful-young-fem" />
            <p
              css={css`
                font-size: 16px;
              `}
            >
              Мельникова Наталья Игоревна
            </p>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              Должность: Дерматовенеролог
            </p>
            <button
              type="button"
              className="button"
              css={css`
                width: 297px;
                padding-top: 15px;
                padding-bottom: 17px;
                border: none;
              `}
            >
              Онлайн запись на прием
            </button>
          </div>
          <div
            css={css`
              display: flex;
              width: 339px;
              flex-direction: column;
              align-items: center;
              align-self: center;
              padding-bottom: 39px;
              margin-bottom: 29px;
              box-shadow: ${theme.colors.boxShadow};
            `}
          >
            <Picture src="img/beatiful-young-fem" />
            <p
              css={css`
                font-size: 16px;
              `}
            >
              Мельникова Наталья Игоревна
            </p>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              Должность: Дерматовенеролог
            </p>
            <button
              type="button"
              className="button"
              css={css`
                width: 297px;
                padding-top: 15px;
                padding-bottom: 17px;
                border: none;
              `}
            >
              Онлайн запись на прием
            </button>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            ${breakpointsMap.TABLET} {
              padding-top: 63px;
            }
          `}
        >
          <h3
            css={css`
              font-size: 33px;
              font-weight: 500;
              line-height: 27px;
            `}
          >
            Как получить онлайн-консультацию?
          </h3>
          <p
            css={css`
              font-weight: 500;

              ${breakpointsMap.TABLET} {
                padding: 0;
              }
            `}
          >
            Принцип проведения онлайн-консультаций поход на очный прием и
            включает сбор анамнеза, диагностику и выдачу рекомендаций
          </p>
          <ul
            css={css`
              display: flex;
              width: 100%;
              padding: 0;
              padding-top: 134px;
              list-style: none;
            `}
          >
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '1';
                  font-size: 22px;
                }

                &:after {
                  position: absolute;
                  top: -67px;
                  right: 7px;
                  display: none;
                  width: 213px;
                  height: 1px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                  content: '';
                }

                ${breakpointsMap.TABLET} {
                  &:after {
                    top: -67px;
                    right: -9px;
                    display: flex;
                    width: 123px;
                  }

                  ${breakpointsMap.DESKTOP} {
                    &:after {
                      top: -67px;
                      right: 12px;
                      width: 213px;
                    }
                  }
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '2';
                  font-size: 22px;
                }

                &:after {
                  position: absolute;
                  top: -67px;
                  right: 7px;
                  display: none;
                  width: 213px;
                  height: 1px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                  content: '';
                }

                ${breakpointsMap.TABLET} {
                  &:after {
                    top: -67px;
                    right: -9px;
                    display: flex;
                    width: 123px;
                  }
                }

                ${breakpointsMap.DESKTOP} {
                  &:after {
                    top: -67px;
                    right: 12px;
                    width: 213px;
                  }
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '3';
                  font-size: 22px;
                }

                &:after {
                  position: absolute;
                  top: -67px;
                  right: 7px;
                  display: none;
                  width: 213px;
                  height: 1px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                  content: '';
                }

                ${breakpointsMap.TABLET} {
                  &:after {
                    top: -67px;
                    right: -9px;
                    display: flex;
                    width: 123px;
                  }
                }

                ${breakpointsMap.DESKTOP} {
                  &:after {
                    top: -67px;
                    right: 12px;
                    width: 213px;
                  }
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
            <li
              css={css`
                position: relative;
                width: 25%;

                &:before {
                  position: absolute;
                  top: -94px;
                  display: flex;
                  width: 60px;
                  height: 60px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${theme.colors.blue};
                  border-radius: 50%;
                  color: ${theme.colors.white};
                  content: '4';
                  font-size: 22px;
                }

                &:after {
                  position: absolute;
                  top: -67px;
                  right: 7px;
                  display: none;
                  width: 213px;
                  height: 1px;
                  border-top: 1px dashed ${theme.colors.colorText.hex};
                  content: '';
                }

                ${breakpointsMap.TABLET} {
                  &:after {
                    top: -67px;
                    right: -9px;
                    display: none;
                    width: 123px;
                  }
                }

                ${breakpointsMap.DESKTOP} {
                  &:after {
                    top: -67px;
                    right: 12px;
                    width: 213px;
                  }
                }
              `}
            >
              <h4
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                `}
              >
                Оставьте заявку
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Online;
