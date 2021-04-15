import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';
import { css, useTheme, keyframes } from '@emotion/react';
import CrossButton from 'common/crossButton';
import { breakpointsMap } from 'constants/styles';
import Select from 'common/select';
import BuyButton from 'components/common/buyButton';

const spanHint = (text, delta = 0) => {
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
        right: 2px;
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

const Lab = () => {
  const theme = useTheme();

  const Tab = styled.li`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${theme.colors.blue};
    }

    &:last-child {
      border-bottom: none;
    }

    ${breakpointsMap.TABLET} {
      width: 245px;
      flex-grow: 1;
      border-bottom: none;

      ${breakpointsMap.DESKTOP} {
        width: 245px;

        &:nth-of-type(2n) {
          border-right: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
          border-left: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
        }
      }
    }
  `;

  const TabLink = styled('a')`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 21px;
    padding-bottom: 22px;
    color: ${theme.colors.colorText};
    font-size: ${theme.fontSizes.altFs};
    line-height: ${theme.fontSizes.altLh};

    &:hover {
      color: ${theme.colors.altColorText};
    }
  `;

  const TabsContainer = styled.div`
    padding-top: 0px;
  `;

  const TabList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: ${theme.colors.boxShadow};
    list-style: none;

    ${breakpointsMap.TABLET} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    ${breakpointsMap.DESKTOP} {
      width: 100%;
      flex-wrap: nowrap;
    }
  `;

  return (
    <div>
      <div
        className="search__container-input-group"
        css={css`
          position: relative;
        `}
      >
        <SearchIcon
          width="13px"
          height="13px"
          fill="none"
          stroke="currentColor"
          css={css`
            position: absolute;
            top: 16px;
            left: 16px;
            color: #000;

            ${breakpointsMap.DESKTOP} {
              top: 20px;
            }
          `}
        />
        <input
          type="text"
          className="search__input"
          placeholder="Введите название анализа"
          aria-label="Введите что хотите найти"
          aria-describedby="search-descr"
          css={css`
            padding-left: 40px;
            border: 1px solid ${theme.colors.blue};
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
            transform="scale(1.2)"
            fill="none"
            stroke="currentColor"
          />
        </button>
      </div>
      <TabsContainer>
        <div
          css={css`
            padding-top: 20px;
            padding-bottom: 27px;
            padding-left: 20px;
          `}
        >
          <span
            css={css`
              position: relative;

              .lab__reset {
                top: -4px;
                left: -20px;
              }
            `}
          >
            <CrossButton
              buttonClass="lab__reset"
              label="Сбросить фильтр"
              action={() => console.log(true)}
            />
            Сбросить фильтры
          </span>
        </div>
        <TabList>
          <Tab>
            <TabLink href="/">По типу (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">По биоматериалу (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">Для кого (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">Органы (15)</TabLink>
          </Tab>
          <Tab>
            <TabLink href="/">По заболеваниям (15)</TabLink>
          </Tab>
        </TabList>
      </TabsContainer>
      <section
        css={css`
          display: flex;
          flex-direction: row;
          flex-direction: column;
          padding-bottom: 20px;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            .lab__select {
              width: 100%;
              margin-bottom: 10px;
            }

            .select__control {
              border-color: ${theme.colors.blue};
              border-radius: 4px !important;
            }

            ${breakpointsMap.TABLET} {
              flex-direction: row;
              flex-wrap: wrap;

              .lab__select {
                width: 305px;
                flex-grow: 1;
                margin: 0;
                margin-right: 20px;

                &:last-of-type {
                  margin-right: 0;
                }
              }
            }

            ${breakpointsMap.DESKTOP} {
              display: none;
            }
          `}
        >
          <Select
            placeholder="По типу"
            action={() => console.log(true)}
            selectClass="lab__select"
          />
          <Select
            placeholder="Выберите подраздел"
            action={() => console.log(true)}
            selectClass="lab__select"
          />
        </div>

        <TabsContainer
          css={css`
            display: none;
            width: 30%;
            min-height: 443px;
            margin-right: 30px;

            ${breakpointsMap.DESKTOP} {
              display: flex;
            }
          `}
        >
          <TabList
            css={css`
              height: 100%;
              flex-direction: column !important;
              padding: 30px 24px 15px 25px;
              margin: 0;
            `}
          >
            {new Array(6).fill('').map(() => (
              <li
                css={css`
                  position: relative;
                  padding-top: 35px;

                  &:before {
                    position: absolute;
                    top: 38px;
                    left: -25px;
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: ${theme.colors.blue};
                    content: '';
                  }

                  &:first-of-type {
                    padding-top: 0;

                    &:before {
                      top: 3px;
                    }
                  }
                `}
              >
                <a href="/">Все</a>
              </li>
            ))}
          </TabList>
        </TabsContainer>
        <table
          css={css`
            display: flex;
            width: 100%;
            flex-direction: column;
            margin-top: 12px;

            ${breakpointsMap.DESKTOP} {
              width: 70%;
            }
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
            <tr
              className="table__row"
              css={css`
                position: relative;
                display: flex;
                flex-wrap: wrap;
                padding: 0 17px;
                padding-top: 27px;
                padding-bottom: 27px;
                box-shadow: ${theme.colors.boxShadow};
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
                  font-weight: 500;

                  ${breakpointsMap.TABLET} {
                    width: 325px;
                    min-width: 325px;
                    margin-bottom: 0;
                  }
                `}
              >
                <span>Общий анализ крови (5-diff), капиллярная кровь</span>
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
                Кровь (сыворотка)
              </td>
              <td
                className="table__cell"
                css={css`
                  display: flex;
                  width: 110px;
                  flex-direction: column;
                  justify-content: center;
                  font-weight: 500;
                `}
              >
                <span
                  css={css`
                    margin-bottom: 10px;
                    font-size: 26px;
                    word-spacing: 9px;
                  `}
                >
                  1 100 ₽
                </span>
                <span
                  css={css`
                    position: relative;
                    padding-right: 15px;
                    font-size: 12px;
                    word-spacing: 5px;
                  `}
                >
                  Срок 1 день
                  {spanHint()}
                </span>
              </td>
              <td>
                <BuyButton
                  data={{
                    type: 'analyse',
                    price: 6989,
                    descr:
                      'Amet deserunt ex. Eiusmod tempor voluptate pariatur.',
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Lab;
