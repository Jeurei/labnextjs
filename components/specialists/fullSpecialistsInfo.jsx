import { ReactComponent as MapMark } from 'icons/map-mark-icon.svg';
import { ReactComponent as Star } from 'icons/star.svg';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { breakpointsMap } from 'constants/styles';
import Ymap from 'components/footer/ymap';
import { useRouter } from 'next/router';
import Specialist from './specialist';

const adressesList = (currSpecialist, theme) => (
  <ul
    css={css`
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      padding: 0;
      list-style: none;

      ${breakpointsMap.TABLET} {
        flex-direction: row;
        align-items: flex-start;
      }
    `}
  >
    {currSpecialist.adresses.map((el) =>
      el.center.map((element) => (
        <li
          css={css`
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 43px;
            margin-bottom: 5px;
            font-size: 16px;

            &:last-of-type {
              margin-bottom: 0;
            }

            ${breakpointsMap.DESKTOP} {
              &:nth-of-type(2n) {
                border-right: 1px solid ${theme.colors.colorText.hex};
                border-left: 1px solid ${theme.colors.colorText.hex};
              }
            }
          `}
        >
          <MapMark
            width="10"
            height="10"
            css={css`
              position: absolute;
              top: 4px;
              left: 20px;
            `}
          />
          г. {el.city}, ул. {element.adress}
        </li>
      )),
    )}
  </ul>
);

const FullSpecialistInfo = ({ specialists }) => {
  const theme = useTheme();
  const { id } = useRouter().query;

  const currSpecialist = specialists.find((el) => el.id === id);

  const Tab = styled.li`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background-image: linear-gradient(254deg, #57aafb, #c837f0);
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
    font-size: ${theme.fontSizes.altFs};
    line-height: ${theme.fontSizes.altLh};

    &:hover {
      color: ${theme.colors.altColorText};
    }
  `;

  const TabsContainer = styled.div`
    padding-top: 0;
  `;

  const TabList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 0;
    box-shadow: ${theme.colors.boxShadow};
    list-style: none;

    ${breakpointsMap.TABLET} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    ${breakpointsMap.DESKTOP} {
      flex-wrap: nowrap;
    }
  `;

  return (
    <>
      <h1 className="main__title">Специалист</h1>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            align-items: flex-start;
          }
        `}
      >
        <p
          css={css`
            margin-right: 64px;
            font-size: 16px;
            white-space: nowrap;
          `}
        >
          Врач принимает в
        </p>
        {adressesList(currSpecialist, theme)}
      </div>
      <div
        css={css`
          margin-bottom: 37px;
          box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
        `}
      >
        <Specialist data={currSpecialist} />
        <TabsContainer>
          <TabList>
            <Tab>
              <TabLink>Стоимость услуг </TabLink>
            </Tab>
            <Tab>
              <TabLink>Гинеколог</TabLink>
            </Tab>
            <Tab>
              <TabLink>УЗИ</TabLink>
            </Tab>
            <Tab>
              <TabLink>г.Пермь ул. Малая Филевская д. 35, оф. 305</TabLink>
            </Tab>
          </TabList>
        </TabsContainer>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-right: 0;

            ${breakpointsMap.DESKTOP} {
              flex-direction: row;
              padding-right: 25px;
            }
          `}
        >
          <div
            css={css`
              padding-left: 0;
              margin-right: auto;

              ${breakpointsMap.DESKTOP} {
                padding-right: 44px;
                padding-left: 44px;
              }
            `}
          >
            <ul
              css={css`
                padding: 0;
                padding-right: 10px;
                padding-left: 10px;
                margin: 0;
                list-style: none;

                ${breakpointsMap.DESKTOP} {
                  padding: 0;
                }
              `}
            >
              <li
                className="tab"
                css={css`
                  width: 100%;
                  padding-top: 0;
                  padding-left: 0;
                  margin-bottom: 12px;
                  background-color: ${theme.colors.white};
                  border-radius: 4px;
                  box-shadow: ${theme.colors.boxShadow};

                  &:last-of-type {
                    padding-left: 0;
                  }

                  .tab__title {
                    position: relative;
                    display: flex;
                    width: 100%;
                    height: 100%;
                    min-height: 36px;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 35px 24px;
                    padding-left: 11px;
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 400;

                    &::after {
                      position: absolute;
                      top: 11px;
                      right: 13px;
                      width: 9px;
                      height: 9px;
                      border: 1px solid $color-text;
                      border-top: 0;
                      border-left: 0;
                      background-color: transparent;
                      content: '';
                      transform: rotate(45deg);
                      transition: transform 0.35s ease-in-out;
                    }
                  }

                  .tab__content {
                    position: relative;
                    max-height: 1px;
                    padding: 0;
                    padding-left: 2px;
                    font-weight: 300;
                    letter-spacing: -1px;
                    overflow-y: hidden;
                    transition: max-height 350ms ease-in-out;
                  }

                  .tab__content-title {
                    margin-bottom: 8px;
                    font-weight: 300;
                  }

                  .tab__checkbox {
                    display: none;

                    &:checked + .tab__title {
                      background-image: linear-gradient(
                        264deg,
                        #57aafb,
                        #c837f0
                      );
                      color: ${theme.colors.white};

                      &::after {
                        top: 15px;
                        border-color: ${theme.colors.white};
                        transform: rotate(-135deg);
                      }
                    }

                    &:checked ~ .tab__content {
                      max-height: 350px;
                      transition: max-height 500ms ease-in-out;
                    }
                  }

                  .tab__list {
                    padding: 0;
                    letter-spacing: 0;
                    list-style: none;
                  }

                  .tab__list-item {
                    margin-bottom: 11px;
                  }

                  ${breakpointsMap.DESKTOP} {
                    width: 644px;
                  }
                `}
              >
                <input
                  className="tab__checkbox"
                  type="checkbox"
                  id="tab-analyse"
                  name="tab-group"
                  onChange={() => console.log('hi')}
                />
                <label
                  htmlFor="tab-analyse"
                  className="tab__title"
                  css={css`
                    padding-right: 30px;
                    font-weight: 500;
                  `}
                >
                  Прием врача акушера-гинеколога лечебно-диагностический
                  <span
                    css={css`
                      display: none;
                      margin-left: auto;
                      font-size: 26px;
                      font-weight: 500;

                      @media (min-width: 589px) {
                        display: flex;
                      }
                    `}
                  >
                    1 100 ₽
                  </span>
                </label>
                <div className="tab__content">
                  <h3 className="tab__content-title">
                    Врач акушер-гинеколог и специалист ультразвуковой
                    диагностики. Эксперт о планированию беременности, ведению
                    беременности и родов, ведению пациенток в послеродовой
                    период, по диагностике и лечению причин невынашивания
                    беременности.
                  </h3>
                </div>
              </li>
              <li
                className="tab"
                css={css`
                  ${breakpointsMap.DESKTOP} {
                    width: 644px;
                    padding-top: 0;
                    margin-bottom: 12px;
                    background-color: ${theme.colors.white};
                    border-radius: 4px;
                    box-shadow: ${theme.colors.boxShadow};

                    &:last-of-type {
                      padding-left: 0;
                    }

                    .tab__title {
                      position: relative;
                      display: flex;
                      width: 100%;
                      height: 100%;
                      min-height: 36px;
                      align-items: center;
                      padding: 35px 24px;
                      padding-left: 11px;
                      border-radius: 4px;
                      font-size: 16px;
                      font-weight: 400;

                      &::after {
                        position: absolute;
                        top: 11px;
                        right: 13px;
                        width: 9px;
                        height: 9px;
                        border: 1px solid $color-text;
                        border-top: 0;
                        border-left: 0;
                        background-color: transparent;
                        content: '';
                        transform: rotate(45deg);
                        transition: transform 0.35s ease-in-out;
                      }
                    }

                    .tab__content {
                      position: relative;
                      max-height: 1px;
                      padding: 0;
                      padding-left: 2px;
                      font-weight: 300;
                      letter-spacing: -1px;
                      overflow-y: hidden;
                      transition: max-height 350ms ease-in-out;
                    }

                    .tab__content-title {
                      margin-bottom: 8px;
                      font-weight: 300;
                    }

                    .tab__checkbox {
                      display: none;

                      &:checked + .tab__title {
                        background-image: linear-gradient(
                          264deg,
                          #57aafb,
                          #c837f0
                        );
                        color: ${theme.colors.white};

                        &::after {
                          top: 15px;
                          border-color: ${theme.colors.white};
                          transform: rotate(-135deg);
                        }
                      }

                      &:checked ~ .tab__content {
                        max-height: none;
                        transition: max-height 500ms ease-in-out;
                      }
                    }

                    .tab__list {
                      padding: 0;
                      letter-spacing: 0;
                      list-style: none;
                    }

                    .tab__list-item {
                      margin-bottom: 11px;
                    }
                  }
                `}
              >
                <input
                  className="tab__checkbox"
                  type="checkbox"
                  id="tab-2"
                  name="tab-group"
                  onChange={() => console.log('hi')}
                />
                <label
                  htmlFor="tab-2"
                  className="tab__title"
                  css={css`
                    font-weight: 500;
                  `}
                >
                  Отзывы
                </label>
                <div className="tab__content">
                  <ul
                    css={css`
                      padding: 0;
                      list-style: none;
                    `}
                  >
                    <li
                      css={css`
                        position: relative;
                        padding-top: 35px;
                        padding-bottom: 34px;
                        &:not(:last-of-type):before {
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          display: block;
                          width: 100%;
                          height: 7px;
                          background-image: ${theme.colors.linearGradient};
                          content: '';
                        }
                      `}
                    >
                      <div
                        css={css`
                          padding-left: 33px;
                          margin-bottom: 13px;
                        `}
                      >
                        {new Array(5).fill().map(() => (
                          <Star
                            fill="currentColor"
                            css={css`
                              color: #ddd;
                              cursor: pointer;

                              &:hover {
                                color: #ffab1a;
                              }
                            `}
                          />
                        ))}
                      </div>
                      <div
                        css={css`
                          padding-left: 53px;
                        `}
                      >
                        Вопрос
                      </div>
                      <div
                        css={css`
                          padding-top: 30px;
                          padding-left: 79px;
                          background-image: url('img/quotes.svg');
                          background-position: 50px 16px;

                          background-repeat: no-repeat;
                        `}
                      >
                        Ответ
                      </div>
                    </li>
                    <li
                      css={css`
                        position: relative;
                        padding-top: 35px;
                        padding-bottom: 34px;

                        &:not(:last-of-type):before {
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          display: block;
                          width: 100%;
                          height: 7px;
                          background-image: ${theme.colors.linearGradient};
                          content: '';
                        }
                      `}
                    >
                      <div
                        css={css`
                          padding-left: 33px;
                          margin-bottom: 13px;
                        `}
                      >
                        {new Array(5).fill().map(() => (
                          <Star
                            fill="currentColor"
                            css={css`
                              color: #ddd;
                              cursor: pointer;

                              &:hover {
                                color: #ffab1a;
                              }
                            `}
                          />
                        ))}
                      </div>
                      <div
                        css={css`
                          padding-left: 57px;
                        `}
                      >
                        Вопрос
                      </div>
                      <div
                        css={css`
                          padding-top: 30px;
                          padding-left: 79px;
                          background-image: url('img/quotes.svg');
                          background-position: 50px 16px;

                          background-repeat: no-repeat;
                        `}
                      >
                        Ответ
                      </div>
                    </li>
                  </ul>
                  <button
                    type="button"
                    css={css`
                      width: 100%;
                      height: 100%;
                      padding-top: 10px;
                      padding-bottom: 10px;
                      border: none;
                      appearance: none;
                      background-color: ${theme.colors.colorText.hex};
                      color: ${theme.colors.white};
                      font-size: 12px;
                    `}
                  >
                    Загрузить ещё
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div
            css={css`
              display: flex;
              width: 100%;
              flex-direction: column;
              box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);

              ${breakpointsMap.DESKTOP} {
                width: 424px;
              }
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 384px;
                margin-bottom: 38px;
              `}
            >
              <Ymap />
            </div>
            <div
              css={css`
                display: flex;
                padding-right: 20px;
                padding-left: 20px;
                margin-bottom: 17px;
              `}
            >
              <button
                type="button"
                className="button"
                css={css`
                  display: flex;
                  width: 185px;
                  justify-content: center;
                  padding: 12px 0 14px 0;
                  margin-right: 15px;
                  font-weight: 400;
                  text-transform: none;
                `}
              >
                Показать на карте
              </button>
              <button
                type="button"
                className="button"
                css={css`
                  display: flex;
                  width: 185px;
                  justify-content: center;
                  padding: 12px 0 14px 0;
                  margin-right: auto;
                  font-weight: 400;
                  text-transform: none;
                `}
              >
                Панорама
              </button>
            </div>
            <div
              css={css`
                display: flex;
                padding-right: 20px;
                padding-left: 20px;
                margin-bottom: 14px;
              `}
            >
              <div
                css={css`
                  position: relative;
                  width: 50%;
                  padding-left: 31px;
                  &:before {
                    position: absolute;
                    top: -7px;
                    left: 0;
                    display: block;
                    width: 28px;
                    height: 28px;
                    background-image: ${theme.colors.linearGradient};
                    border-radius: 50%;
                    content: '';
                  }

                  &:after {
                    position: absolute;
                    top: 0px;
                    left: 9px;
                    display: block;
                    width: 9px;
                    height: 15.5px;
                    content: url('img/walker.svg');
                  }
                `}
              >
                <span
                  css={css`
                    border-bottom: 1px solid ${theme.colors.blue};
                  `}
                >
                  Пешком
                </span>
              </div>
              <div
                css={css`
                  position: relative;
                  width: 50%;
                  padding-left: 31px;

                  &:before {
                    position: absolute;
                    top: -7px;
                    left: 0;
                    display: block;
                    width: 28px;
                    height: 28px;
                    background-image: ${theme.colors.linearGradient};
                    border-radius: 50%;
                    content: '';
                  }

                  &:after {
                    position: absolute;
                    top: -2px;
                    left: 5px;
                    display: block;
                    width: 9px;
                    height: 15.5px;
                    content: url('img/car.svg');
                  }
                `}
              >
                <span
                  css={css`
                    border-bottom: 1px solid ${theme.colors.blue};
                  `}
                >
                  На машине
                </span>
              </div>
            </div>
            <p
              css={css`
                position: relative;
                padding-left: 50px;
                margin-bottom: 35px;

                &:after {
                  position: absolute;
                  top: 0;
                  left: 20px;
                  width: 10px;
                  height: 15px;
                  border: 1px solid ${theme.colors.colorText.hex};
                  border-width: 0 3px 3px 0;
                  border-radius: 2px;
                  content: '';
                  transform: rotate(45deg);
                }
              `}
            >
              Въезд со стороны ул. Малая Филёвская
              <br /> Парковка с торца дома
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

FullSpecialistInfo.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { specialists } = state;

  return { specialists };
};

export default connect(mapStateToProps, null)(FullSpecialistInfo);
