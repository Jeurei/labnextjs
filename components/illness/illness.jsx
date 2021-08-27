import React from 'react';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Discounts from 'components/common/discounts';
import Picture from 'common/picture';

const Illnes = () => {
  const theme = useTheme();
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <div>
          <h2 className="main__title">Тиреодерит</h2>
          <div>
            <h3
              css={css`
                margin-bottom: 35px;
                font-size: 16px;
                font-weight: 500;
              `}
            >
              Описание
            </h3>
            <p
              css={css`
                font-size: 13px;
              `}
            >
              <span
                css={css`
                  font-weight: 500;
                `}
              >
                Тиреоидит
              </span>
              : симптомы и лечениеТиреоидит – это заболевание щитовидной железы
              воспалительного характера. В остром состоянии возможно образование
              абсцесса. Характерными симптомами тиреоидита на ранних стадиях
              является чувство сдавливания и боль в области шеи, осиплость
              голоса. Прогрессирование болезни вызывает дисфункцию железы.
              Прогноз при своевременной диагностике и лечении благоприятный.
              Тиреоидит – это заболевание щитовидной железы воспалительного
              характера. В остром состоянии возможно образование абсцесса.
              Характерными симптомами тиреоидита на ранних стадиях является
              чувство сдавливания и боль в области шеи, осиплость голоса.
              Прогрессирование болезни вызывает дисфункцию железы. Прогноз при
              своевременной диагностике и лечении благоприятный.
            </p>
            <ul
              css={css`
                padding: 0;
                padding-left: 18px;
                list-style: none;
              `}
            >
              <li
                css={css`
                  position: relative;

                  &:before {
                    position: absolute;
                    top: 5px;
                    left: -18px;
                    display: block;
                    width: 7px;
                    height: 7px;
                    background-color: ${theme.colors.blue};
                    border-radius: 50%;
                    content: '';
                  }
                `}
              >
                острый (гнойный и негнойный) – носит инфекционный характер.
                Тиреоидит протекает с частичным поражением доли щитовидной
                железы (очаговый) или распространяется на всю долю или орган
                (диффузный);{' '}
              </li>
            </ul>
            <Picture src="img/illnes-pic" />
            <div
              css={css`
                display: flex;
                width: 100%;
                min-height: 195px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 42px;
                margin-bottom: 36px;
                background-image: url('img/analyze-q-bg.png'),
                  linear-gradient(
                    to left,
                    RGBA(250, 0, 235, 1),
                    RGBA(154, 102, 245, 1),
                    RGBA(43, 215, 255, 1)
                  );
                background-position: 0 0;
                background-repeat: no-repeat;
                background-size: cover;
                @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
                  background-image: url('img/analyze-q-bg@2x.png'),
                    linear-gradient(
                      to left,
                      RGBA(250, 0, 235, 1),
                      RGBA(154, 102, 245, 1),
                      RGBA(43, 215, 255, 1)
                    );
                }
              `}
            >
              <p
                css={css`
                  color: ${theme.colors.white};
                  font-size: 22px;
                  font-weight: 500;
                `}
              >
                Хотите записаться на прием к Эндокринологу
              </p>
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  justify-content: center;
                `}
              >
                <button
                  type="button"
                  className="button"
                  css={css`
                    padding: 14px 33px 18px 35px;
                    border: none;
                    margin-right: 24px;
                  `}
                >
                  Да
                </button>
                <button
                  type="button"
                  css={css`
                    padding-bottom: 4px;
                    border: none;
                    appearance: none;
                    background: transparent;
                    color: ${theme.colors.white};
                    text-decoration: underline;
                    text-transform: uppercase;
                  `}
                >
                  Нет
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          css={css`
            ${breakpointsMap.DESKTOP} {
              margin-left: 100px;
            }
          `}
        >
          <Discounts isColumn />
        </div>
      </div>
    </>
  );
};

export default Illnes;
