import { useTheme, css, keyframes } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import CrossButton from 'components/common/crossButton';
import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BuyButton from 'components/common/buyButton';

const SpanHint = ({ text, delta }) => {
  const theme = useTheme();

  const showingAimation = keyframes`
    0%{
      opacity: 0;
    }

    100%{
      opacity: 1;
    }
  `;
  return (
    <span
      css={css`
        position: absolute;
        top: -2px;
        right: 0;
        display: flex;
        width: 18px;
        height: 18px;
        align-items: center;
        justify-content: center;
        background-color: #8978f7;
        border-radius: 50%;
        color: ${theme.colors.white};
        cursor: pointer;
        font-size: 11px;

        &:hover:after {
          position: absolute;
          z-index: 10;
          top: calc(-100% - ${delta}px);
          display: flex;
          width: 207px;
          align-items: center;
          justify-content: center;
          padding: 4px 0 6px 0;
          animation: ${showingAimation} 0.3s forwards ease-in-out;
          background-color: ${theme.colors.blue};
          border-radius: 4px;
          color: ${theme.colors.white};
          content: '${text}';
          font-size: 11px;
          text-align: center;
          text-transform: none;
        }

        &:hover:before {
          position: absolute;
          z-index: 1;
          top: -9px;
          display: flex;
          width: 8px;
          height: 8px;
          animation: ${showingAimation} 0.3s forwards ease-in-out;
          background-color: ${theme.colors.blue};
          content: '';
          transform: rotate(45deg);
        }
      `}
    >
      !
    </span>
  );
};

SpanHint.defaultProps = {
  delta: 0,
};

SpanHint.propTypes = {
  text: PropTypes.string.isRequired,
  delta: PropTypes.number,
};

const TableRow = () => {
  const theme = useTheme();

  const TR = styled('tr')`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 0 17px;
    padding-top: 27px;
    padding-bottom: 27px;
    box-shadow: ${theme.colors.boxShadow};
    margin-bottom: 20px;
  `;

  return (
    <TR className="table__row">
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
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 500;

          ${breakpointsMap.TABLET} {
            width: 325px;
            min-width: 325px;
            margin-bottom: 0;
          }
        `}
      >
        <span
          css={css`
            margin-bottom: 12px;
          `}
        >
          Общий анализ крови (5-diff), капиллярная кровь
        </span>
        <a
          href="/"
          css={css`
            position: relative;
            padding-left: 15px;
            color: #946df6;
            font-size: 12px;
            font-weight: 400;
            text-decoration: underline;

            &:before {
              position: absolute;
              top: 3px;
              left: 0;
              width: 11px;
              height: 9px;
              background-image: url('img/pink-home.svg');
              background-repeat: no-repeat;
              content: '';
            }
          `}
        >
          Можно сдать на дому
        </a>
      </td>
      <td
        className="table__cell"
        css={css`
          position: relative;
          display: flex;
          width: 100%;
          align-items: center;
          margin-bottom: 10px;
          font-size: 12px;

          &:after,
          &:before {
            position: absolute;
            top: 8px;
            right: 7px;
            display: block;
            width: 10px;
            height: 1px;
            background-color: ${theme.colors.colorText.hex};
            content: '';
          }

          &:after {
            transform: rotate(45deg);
          }
          &:before {
            right: 0;
            transform: rotate(-45deg);
          }

          ${breakpointsMap.TABLET} {
            width: 92px;
            &:after,
            &:before {
              top: 19px;
            }

            &:after {
              right: 33px;
              transform: rotate(45deg);
            }
            &:before {
              right: 26px;
              transform: rotate(-45deg);
            }
          }

          ${breakpointsMap.DESKTOP} {
            width: 174px;
            margin-bottom: 0;
            &:after,
            &:before {
              top: 29px;
            }
          }
        `}
      >
        Кровь (сыворотка)
      </td>
      <td
        className="table__cell"
        css={css`
          display: flex;
          width: 120px;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <span
          css={css`
            margin-bottom: 10px;
            font-size: 26px;
            word-spacing: 10px;
          `}
        >
          1 100 ₽
        </span>
        <span
          css={css`
            position: relative;
            font-size: 12px;
            word-spacing: 5px;
          `}
        >
          Срок 1 день
          <SpanHint text="Срок татата" />
        </span>
      </td>
      <td
        css={css`
          .cartPage__delete-button {
            top: 27px;
          }

          ${breakpointsMap.TABLET} {
            .cartPage__delete-button {
              top: 47px;
            }
          }
        `}
      >
        <CrossButton
          buttonClass="cartPage__delete-button"
          label="Удалить анализ из корзины"
        />
      </td>
    </TR>
  );
};

const ComplexSubRow = () => {
  const theme = useTheme();
  return (
    <tr
      className="table__row"
      css={css`
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding: 0 17px;
        padding-top: 27px;
        padding-right: 46px;
        padding-bottom: 27px;
        padding-left: 43px;
        margin-right: 10px;
        margin-bottom: 36px;
        margin-left: 10px;
        background-color: ${theme.colors.white};
        box-shadow: ${theme.colors.boxShadow};

        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 36px;
          height: 100%;
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
          content: '';
        }

        &:after {
          position: absolute;
          top: 45%;
          left: 15px;
          color: ${theme.colors.white};
          counter-increment: row;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
        }

        ${breakpointsMap.DESKTOP} {
          padding-left: 86px;
          margin-right: 40px;
          margin-left: 40px;
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
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-right: auto;
          margin-bottom: 15px;
          font-size: 16px;

          ${breakpointsMap.TABLET} {
            width: 250px;
            min-width: 250px;
            margin-bottom: 0;
          }
        `}
      >
        <span
          css={css`
            margin-bottom: 12px;
          `}
        >
          Общий анализ крови (5-diff), капиллярная кровь
        </span>
        <a
          href="/"
          css={css`
            position: relative;
            padding-left: 15px;
            color: #946df6;
            font-size: 12px;
            text-decoration: underline;

            &:before {
              position: absolute;
              top: 3px;
              left: 0;
              width: 11px;
              height: 9px;
              background-image: url('img/pink-home.svg');
              background-repeat: no-repeat;
              content: '';
            }
          `}
        >
          Можно сдать на дому
        </a>
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
          }

          ${breakpointsMap.DESKTOP} {
            margin-bottom: 0;
          }
        `}
      >
        <a
          href="/"
          css={css`
            position: relative;
            display: flex;
            height: 100%;
            align-items: center;

            &:after,
            &:before {
              position: absolute;
              top: 8px;
              right: -18px;
              display: block;
              width: 10px;
              height: 1px;
              background-color: ${theme.colors.colorText.hex};
              content: '';
            }

            &:after {
              transform: rotate(45deg);
            }
            &:before {
              right: -25px;
              transform: rotate(-45deg);
            }

            ${breakpointsMap.TABLET} {
              &:after,
              &:before {
                top: 24px;
              }

              &:after {
                right: -18px;
                transform: rotate(45deg);
              }
              &:before {
                right: -25px;
                transform: rotate(-45deg);
              }
            }

            ${breakpointsMap.DESKTOP} {
              &:after,
              &:before {
                top: 29px;
              }
            }
          `}
        >
          Кровь (сыворотка)
        </a>
      </td>
    </tr>
  );
};

const ComplexTableRow = () => {
  const theme = useTheme();

  return (
    <tr
      css={css`
        width: 100%;
        background-color: #f7f7f7;

        counter-reset: row;

        .table__row:nth-of-type(n + 2):after {
          content: counter(row);
          counter-increment: row;
        }
      `}
    >
      <tr
        className="table__row"
        css={css`
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding: 0 17px;
          padding-top: 27px;
          padding-bottom: 27px;
          padding-left: 43px;
          margin-bottom: 36px;
          background-color: ${theme.colors.white};
          box-shadow: ${theme.colors.boxShadow};

          &:before {
            position: absolute;
            top: 0;
            left: 0;
            width: 36px;
            height: 100%;
            background-color: ${theme.colors.blue};
            color: ${theme.colors.white};
            content: '';
          }

          &:after {
            position: absolute;
            top: 45%;
            left: -20px;
            color: ${theme.colors.white};
            content: 'Комплекс';
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            transform: rotate(-90deg);
          }

          ${breakpointsMap.TABLET} {
            padding-left: 89px;
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
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-bottom: 15px;
            font-size: 16px;

            ${breakpointsMap.TABLET} {
              width: 255px;
              min-width: 255px;
              margin-bottom: 0;
            }
          `}
        >
          <span
            css={css`
              margin-bottom: 12px;
            `}
          >
            Общий анализ крови (5-diff), капиллярная кровь
          </span>
          <a
            href="/"
            css={css`
              position: relative;
              padding-left: 15px;
              color: #946df6;
              font-size: 12px;
              text-decoration: underline;

              &:before {
                position: absolute;
                top: 3px;
                left: 0;
                width: 11px;
                height: 9px;
                background-image: url('img/pink-home.svg');
                background-repeat: no-repeat;
                content: '';
              }
            `}
          >
            Можно сдать на дому
          </a>
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
              width: 92px;
            }

            ${breakpointsMap.DESKTOP} {
              width: 174px;
              margin-bottom: 0;
            }
          `}
        >
          <a
            href="/"
            css={css`
              position: relative;
              display: flex;
              height: 100%;
              align-items: center;

              &:after,
              &:before {
                position: absolute;
                top: 8px;
                right: -18px;
                display: block;
                width: 10px;
                height: 1px;
                background-color: ${theme.colors.colorText.hex};
                content: '';
              }

              &:after {
                transform: rotate(45deg);
              }
              &:before {
                right: -25px;
                transform: rotate(-45deg);
              }

              ${breakpointsMap.TABLET} {
                &:after,
                &:before {
                  top: 26px;
                }

                &:after {
                  right: -14px;
                  transform: rotate(45deg);
                }
                &:before {
                  right: -21px;
                  transform: rotate(-45deg);
                }
              }

              ${breakpointsMap.DESKTOP} {
                &:after,
                &:before {
                  top: 29px;
                }
              }
            `}
          >
            Развернуть
          </a>
        </td>
        <td
          className="table__cell"
          css={css`
            display: flex;
            width: 120px;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <span
            css={css`
              margin-bottom: 10px;
              font-size: 26px;
              word-spacing: 10px;
            `}
          >
            1 100 ₽
          </span>
          <span
            css={css`
              font-size: 12px;
            `}
          >
            Выгода: 20 ₽
          </span>
          <span
            css={css`
              position: relative;
              font-size: 12px;
              word-spacing: 5px;
            `}
          >
            Срок 1 день
            <SpanHint text="tata" />
          </span>
        </td>
        <td
          css={css`
            .cartPage__delete-button {
              top: 25px;
            }

            ${breakpointsMap.TABLET} {
              .cartPage__delete-button {
                top: 45px;
              }
            }
          `}
        >
          <CrossButton
            buttonClass="cartPage__delete-button"
            label="Удалить анализ из корзины"
          />
        </td>
      </tr>
      <ComplexSubRow />
    </tr>
  );
};

const Analyzes = () => {
  const theme = useTheme();

  return (
    <>
      <h3
        css={css`
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 400;

          ${breakpointsMap.DESKTOP} {
            margin-bottom: 40px;
          }
        `}
      >
        Анализы
      </h3>
      <table
        css={css`
          display: flex;
          width: 100%;
          flex-direction: column;
          padding-top: 16px;
          margin-bottom: 31px;
        `}
      >
        <thead
          className="table__head"
          css={css`
            display: none;
            width: 100%;

            ${breakpointsMap.TABLET} {
              display: block;
            }
          `}
        >
          <tr
            className="table__row"
            css={css`
              display: flex;
              padding-top: 26.5px;
              padding-left: 12px;
              border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.2);
              margin-bottom: 20px;
              font-size: 12px;
            `}
          >
            <th
              css={css`
                display: flex;
                font-size: 12px;
                font-weight: 400;

                ${breakpointsMap.TABLET} {
                  width: 83px;
                }

                ${breakpointsMap.DESKTOP} {
                  width: 120px;
                }
              `}
            >
              Код
            </th>
            <th
              className="table__row-head"
              css={css`
                display: flex;
                width: 325px;
                font-size: 12px;
                font-weight: 400;
              `}
            >
              Название
            </th>
            <th
              className="table__row-head"
              css={css`
                display: flex;
                font-size: 12px;
                font-weight: 400;

                ${breakpointsMap.TABLET} {
                  width: 91px;
                }

                ${breakpointsMap.DESKTOP} {
                  width: 174px;
                }
              `}
            >
              Б/М
            </th>
            <th
              className="table__row-head"
              css={css`
                display: flex;
                font-size: 12px;
                font-weight: 400;
              `}
            >
              Цена
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </>
  );
};

const Complexes = () => {
  return (
    <>
      <h3
        css={css`
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 400;

          ${breakpointsMap.DESKTOP} {
            margin-bottom: 40px;
          }
        `}
      >
        Комплексы
      </h3>
      <table
        css={css`
          width: 100%;
        `}
      >
        <tbody>
          <ComplexTableRow />
        </tbody>
      </table>
    </>
  );
};

const Additionals = () => {
  const theme = useTheme();

  return (
    <>
      <h3
        css={css`
          margin-bottom: 30px;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        Взятие биоматериала
      </h3>
      <ul
        css={css`
          padding: 0;
          list-style: none;

          li:not(:first-child) {
            border-top: none;
          }
        `}
      >
        {new Array(2).fill().map(() => (
          <li
            css={css`
              display: flex;
              padding-top: 22px;
              padding-bottom: 22px;
              border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.4);
              border-bottom: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.4);
              font-size: 13px;
            `}
          >
            <a
              href="/"
              css={css`
                display: block;
                width: 100%;
                height: 100%;
                margin-right: auto;
              `}
            >
              Сыворотка
            </a>
            <span
              css={css`
                font-size: 26px;
                font-weight: 500;
                white-space: nowrap;
              `}
            >
              1 100 ₽
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

const AlsoRecomended = () => {
  const theme = useTheme();

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
      <caption
        css={css`
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        Также рекомендуется
      </caption>
      <tbody>
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
              padding-right: 60px;
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
                margin-right: 29px;
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
          <td>
            <BuyButton />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const UserCart = () => {
  return (
    <div
      css={css`
        flex-grow: 1;

        ${breakpointsMap.DESKTOP} {
          padding-right: 26px;
          padding-left: 10px;
        }
      `}
    >
      <Analyzes />
      <Complexes />
      <Additionals />
      <AlsoRecomended />
    </div>
  );
};

export default UserCart;
