import { css, useTheme } from '@emotion/react';
import React from 'react';
import { breakpointsMap } from 'constants/styles';

const DiscountProgram = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Дисконтная программа</h2>
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
            display: flex;
            width: 100%;
            min-height: 163px;
            flex-direction: column;
            padding-top: 16px;
            padding-bottom: 10px;
            margin-bottom: 10px;
            box-shadow: ${theme.colors.boxShadow};
            cursor: pointer;

            &:hover {
              background-image: linear-gradient(247deg, #689afa, #f426ee);
              color: ${theme.colors.white};

              .discount__value-container {
                border-color: ${theme.colors.white};
                background-image: url('img/discountvalue.svg');
                background-position: center 0;
                background-repeat: no-repeat;
                background-size: 25px 25px;
              }

              .discount__value {
                color: transparent;
              }
            }

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              padding-right: 10px;

              &:hover {
                .discount__value-container {
                  background-position: center center;
                }
              }
            }

            ${breakpointsMap.DESKTOP} {
              width: 570px;
              margin-right: auto;
              margin-bottom: 30px;
            }
          `}
        >
          <div
            className="discount__value-container"
            css={css`
              padding-top: 4px;
              padding-bottom: 6.5px;
              border-bottom: 1px dashed ${theme.colors.colorText.hex};

              ${breakpointsMap.TABLET} {
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px dashed ${theme.colors.colorText.hex};
                border-bottom: none;
              }
            `}
          >
            <span
              className="discount__value"
              css={css`
                padding-left: 10px;
                font-size: 41px;

                ${breakpointsMap.TABLET} {
                  display: block;
                  transform: rotate(-90deg);
                }
              `}
            >
              10%
            </span>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-top: 35.5px;
              padding-right: 10px;
              padding-left: 10px;

              ${breakpointsMap.TABLET} {
                padding-top: 0;
              }
            `}
          >
            <p
              css={css`
                margin: 0;
                margin-bottom: 20px;
              `}
            >
              В целях реализации новой накопительной программы скидок клиентам,
              выразившим свое желание участвовать в накопительной программе
              скидок, за плату в размере 30 (тридцать) руб. выдается Карта
              постоянного клиента.
            </p>
            <p
              css={css`
                margin: 0;
              `}
            >
              Карта постоянного клиента используется исключительно для личных,
              семейных, домашних и иных нужд, не связанных с осуществлением
              предпринимательской деятельности.
            </p>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            width: 100%;
            min-height: 163px;
            flex-direction: column;
            padding-top: 16px;
            padding-bottom: 10px;
            margin-bottom: 10px;
            box-shadow: ${theme.colors.boxShadow};
            cursor: pointer;

            &:hover {
              background-image: ${theme.colors.linearGradient};
              color: ${theme.colors.white};

              .discount__value-container {
                border-color: ${theme.colors.white};
                background-image: url('img/discountvalue.svg');
                background-position: center 0;
                background-repeat: no-repeat;
                background-size: 25px 25px;
              }

              .discount__value {
                color: transparent;
              }
            }

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              padding-right: 10px;

              &:hover {
                .discount__value-container {
                  background-position: center center;
                }
              }
            }

            ${breakpointsMap.DESKTOP} {
              width: 570px;
              margin-bottom: 30px;
            }
          `}
        >
          <div
            className="discount__value-container"
            css={css`
              padding-top: 4px;
              padding-bottom: 6.5px;
              border-bottom: 1px dashed ${theme.colors.colorText.hex};

              ${breakpointsMap.TABLET} {
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px dashed ${theme.colors.colorText.hex};
                border-bottom: none;
              }
            `}
          >
            <span
              className="discount__value"
              css={css`
                padding-left: 10px;
                font-size: 41px;

                ${breakpointsMap.TABLET} {
                  display: block;
                  transform: rotate(-90deg);
                }
              `}
            >
              10%
            </span>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-top: 35.5px;
              padding-right: 10px;
              padding-left: 10px;

              ${breakpointsMap.TABLET} {
                padding-top: 0;
              }
            `}
          >
            <p
              css={css`
                margin: 0;
                margin-bottom: 20px;
              `}
            >
              В целях реализации новой накопительной программы скидок клиентам,
              выразившим свое желание участвовать в накопительной программе
              скидок, за плату в размере 30 (тридцать) руб. выдается Карта
              постоянного клиента.
            </p>
            <p
              css={css`
                margin: 0;
              `}
            >
              Карта постоянного клиента используется исключительно для личных,
              семейных, домашних и иных нужд, не связанных с осуществлением
              предпринимательской деятельности.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountProgram;
