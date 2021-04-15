import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Link from 'next/link';
import { useState } from 'react';
import Share from './share-block';
import VacansyForm from './vacansy-form';
import VacansyQuest from './vacansy-quest';

const Vacansy = () => {
  const theme = useTheme();
  const [isModal, setModal] = useState(false);
  const [isQuest, setQuest] = useState(false);

  return (
    <>
      <h2 className="main__title">Вакансия бухгалтер</h2>
      <div
        css={css`
          display: flex;
          padding-top: 10px;
          padding-bottom: 8px;
          padding-left: 23px;
          margin-bottom: 15px;
          background-image: ${theme.colors.linearGradient};
          color: ${theme.colors.white};

          ${breakpointsMap.TABLET} {
            font-size: 13px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            width: 50%;
            flex-direction: column;
            padding-top: 18px;
            padding-bottom: 18px;
            border-right: 1px dashed ${theme.colors.white};

            ${breakpointsMap.TABLET} {
              flex-direction: row;
            }
          `}
        >
          <p
            css={css`
              margin: 0;
              margin-bottom: 10px;

              ${breakpointsMap.TABLET} {
                margin-right: 60px;
                margin-bottom: 0;
              }

              ${breakpointsMap.DESKTOP} {
                margin-right: 70px;
              }
            `}
          >
            Телефон отдела кадров
          </p>
          <p
            css={css`
              margin: 0;
            `}
          >
            2 700 789, доб. 800
          </p>
        </div>
        <div
          css={css`
            display: flex;
            width: 50%;
            flex-direction: column;
            padding-top: 18px;
            padding-bottom: 18px;
            margin-left: 20px;
            ${breakpointsMap.TABLET} {
              flex-direction: row;
            }
          `}
        >
          <p
            css={css`
              margin: 0;
              margin-bottom: 10px;

              ${breakpointsMap.TABLET} {
                margin-right: 60px;
                margin-bottom: 0;
              }

              ${breakpointsMap.DESKTOP} {
                margin-right: 70px;
              }
            `}
          >
            E-mail отдела кадров
          </p>
          <p
            css={css`
              margin: 0;
            `}
          >
            info@labdiag.perm.ru
          </p>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-right: 23px;
          padding-bottom: 25px;
          padding-left: 23px;
          border-bottom: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.4);

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            padding-top: 20px;
            padding-bottom: 40px;
          }
        `}
      >
        <ul
          css={css`
            padding: 0;
            margin: 0;
            margin-bottom: 24px;
            list-style: none;

            ${breakpointsMap.DESKTOP} {
              margin-bottom: 0;
            }
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
                margin: 0;
                margin-right: auto;
                margin-bottom: 25px;
                opacity: 0.4;

                ${breakpointsMap.DESKTOP} {
                  margin-right: 153px;
                }
              `}
            >
              График:
            </p>
            <p
              css={css`
                margin: 0;
              `}
            >
              Полный рабочий день
            </p>
          </li>
          <li
            css={css`
              display: flex;
              margin-bottom: 25px;
            `}
          >
            <p
              className="vacancy__op-text"
              css={css`
                margin: 0;
                margin-right: auto;
                opacity: 0.4;
                ${breakpointsMap.DESKTOP} {
                  margin-right: 153px;
                }
              `}
            >
              График:
            </p>
            <p
              css={css`
                margin: 0;
              `}
            >
              Полный рабочий день
            </p>
          </li>
          <li
            css={css`
              display: flex;
            `}
          >
            <p
              className="vacancy__op-text"
              css={css`
                margin: 0;
                margin-right: auto;
                opacity: 0.4;
                ${breakpointsMap.DESKTOP} {
                  margin-right: 153px;
                }
              `}
            >
              График:
            </p>
            <p
              css={css`
                margin: 0;
              `}
            >
              Полный рабочий день
            </p>
          </li>
        </ul>
        <div
          css={css`
            display: flex;
            margin-bottom: 15px;

            ${breakpointsMap.DESKTOP} {
              flex-direction: column;
              align-items: flex-end;
              align-self: flex-start;
            }
          `}
        >
          <span
            css={css`
              margin-right: auto;
              font-size: 26px;
              font-weight: 500;

              ${breakpointsMap.DESKTOP} {
                margin-right: 0;
                margin-bottom: 28px;
              }
            `}
          >
            31 100 ₽
          </span>
          <Link href="/vacansies">
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
                  background-image: ${theme.colors.linearGradient};
                  content: '';
                }

                ${breakpointsMap.DESKTOP} {
                  &:before {
                    right: 0;
                    left: auto;
                  }
                }
              `}
            >
              Вернуться к другим вакансиям
            </a>
          </Link>
        </div>
        <button
          type="button"
          className="button"
          css={css`
            padding-top: 15px;
            padding-bottom: 17px;
            border: none;
            border-radius: 4px;

            ${breakpointsMap.DESKTOP} {
              width: 256px;
              margin-top: 15px;
            }
          `}
          onClick={() => setModal(true)}
        >
          Откликнуться
        </button>
      </div>
      <div>
        <div>
          <h3
            css={css`
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Обязанности
          </h3>
          <p
            css={css`
              font-size: 13px;
            `}
          >
            Ведение бухгалтерского учета государственных учреждений (операции с
            нефинансовыми активами, расчеты с дебиторами по доходам ( в т.ч.
            учет администрирования доходов главным администратором доходов),
            санкционирование, расчеты с поставщиками и подрядчиками) Ведение
            налогового учета;
          </p>
        </div>
      </div>
      <button
        className="button"
        type="button"
        css={css`
          display: flex;
          width: 256px;
          height: 48px;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        `}
        onClick={() => setModal(true)}
      >
        Откликнуться
      </button>
      <Share />
      {isModal && (
        <VacansyForm
          closeForm={() => setModal(false)}
          openQuest={() => setQuest(true)}
        />
      )}
      {isQuest && <VacansyQuest closeQuest={() => setQuest(false)} />}
    </>
  );
};

export default Vacansy;
