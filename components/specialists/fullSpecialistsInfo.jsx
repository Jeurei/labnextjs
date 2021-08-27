import { ReactComponent as MapMark } from 'icons/map-mark-icon.svg';
import { ReactComponent as Star } from 'icons/star.svg';
import { css, useTheme } from '@emotion/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { breakpointsMap } from 'constants/styles';
import Ymap from 'components/footer/ymap';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Panorama, YMaps } from 'react-yandex-maps';
import * as Tabs from 'components/common/styled/tabs';
import styled from '@emotion/styled';
import Comment from 'components/common/comment';
import Specialist from './specialist';

const waysToGet = (theme, cb, state) => {
  return (
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
            content: url('/img/walker.svg');
          }
        `}
      >
        <a
          href="/"
          css={css`
            border-bottom: 1px solid ${theme.colors.blue};
            ${state === 0 && 'font-weight:500;'}
          `}
          onClick={(evt) => {
            evt.preventDefault();
            cb(0);
          }}
        >
          Пешком
        </a>
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
            content: url('/img/car.svg');
          }
        `}
      >
        <a
          href="/"
          css={css`
            border-bottom: 1px solid ${theme.colors.blue};
            ${state === 1 && 'font-weight:500;'}
          `}
          onClick={(evt) => {
            evt.preventDefault();
            cb(1);
          }}
        >
          На машине
        </a>
      </div>
    </div>
  );
};

const AdressesList = ({ currSpecialist }) => {
  const theme = useTheme();

  return (
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
};

AdressesList.propTypes = {
  currSpecialist: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const FullSpecialistInfo = ({ specialists }) => {
  const mockData = ['test', 'test-1'];
  const theme = useTheme();
  const { id } = useRouter().query;
  const [wayToGet, setWayToGet] = useState(0);
  const [mapCenter, setMapCenter] = useState([57.982143, 56.191459]);
  const [isPanoram, setMapPanoram] = useState(false);
  const mapObjRef = useRef();
  const currSpecialist = specialists.find((el) => el.id === id);

  const onPanoramClick = () => {
    setMapPanoram(true);
  };

  const onMapClick = () => {
    setMapPanoram(false);
  };

  const Item = styled('li')`
    min-width: 100%;
    height: 104px;
    padding-right: 22px;
    padding-left: 22px;
    margin-bottom: 37px;
    box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
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
        {/* <p
          css={css`
            margin-right: 64px;
            font-size: 16px;
            white-space: nowrap;
          `}
        >
          Врач принимает в
        </p>
        {currSpecialist.addresses && (
          <AdressesList currSpecialist={currSpecialist} />
        )}
      </div>
      <div
        css={css`
          margin-bottom: 37px;
          box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
        `}
      >
        <Specialist data={currSpecialist} />
        <Tabs.TabsContainer>
          <Tabs.TabList>
            <Tabs.Tab>
              <Tabs.TabLink>Стоимость услуг </Tabs.TabLink>
            </Tabs.Tab>
            <Tabs.Tab>
              <Tabs.TabLink>Гинеколог</Tabs.TabLink>
            </Tabs.Tab>
            <Tabs.Tab>
              <Tabs.TabLink>УЗИ</Tabs.TabLink>
            </Tabs.Tab>
            <Tabs.Tab>
              <Tabs.TabLink>
                г.Пермь ул. Малая Филевская д. 35, оф. 305
              </Tabs.TabLink>
            </Tabs.Tab>
          </Tabs.TabList>
        </Tabs.TabsContainer> */}
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
              width: 100%;
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
              <Item>
                <a
                  href="/"
                  css={css`
                    display: flex;
                    min-width: 100%;
                    height: 100%;
                    align-items: center;
                  `}
                >
                  <span
                    css={css`
                      margin-right: auto;
                      font-size: 16px;
                    `}
                  >
                    Прием врача акушера-гинеколога лечебно-
                    <br />
                    диагностический, первичный, амбулаторный
                  </span>
                  <span
                    css={css`
                      font-size: 26px;
                    `}
                  >
                    1 100 ₽
                  </span>
                </a>
              </Item>
              <Item
                css={css`
                  height: auto;
                  padding: 0;
                `}
              >
                <div
                  css={css`
                    display: flex;
                    width: 100%;
                    height: 104px;
                    align-items: center;
                    padding-right: 22px;
                    padding-left: 22px;
                    background-image: linear-gradient(
                      to right,
                      rgb(80, 175, 245),
                      rgb(200, 58, 241)
                    );
                    color: ${theme.colors.white};
                    font-size: 16px;
                  `}
                >
                  Прием врача акушера-гинеколога лечебно-диагностический,
                  первичный, амбулаторный
                </div>
                <p
                  css={css`
                    display: block;
                    padding: 38px 31px 29px 24px;
                    margin: 0;
                    background-color: #fff;
                    font-size: 14px;
                  `}
                >
                  Врач акушер-гинеколог и специалист ультразвуковой диагностики.
                  Эксперт о планированию беременности, ведению беременности и
                  родов, ведению пациенток в послеродовой период, по диагностике
                  и лечению причин невынашивания беременности.
                </p>
              </Item>
              <Item
                css={css`
                  height: auto;
                  padding: 0;

                  & > div:not(:first-child) {
                    margin-bottom: 0;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    width: 100%;
                    height: 104px;
                    align-items: center;
                    padding-right: 22px;
                    padding-left: 22px;
                    background-image: linear-gradient(
                      to right,
                      rgb(80, 175, 245),
                      rgb(200, 58, 241)
                    );
                    color: ${theme.colors.white};
                    font-size: 16px;
                  `}
                >
                  Отзывы
                </div>
                {/* <Comment />
                <Comment /> */}
              </Item>
            </ul>
          </div>
          <div
            css={css`
              display: flex;
              width: 100%;
              height: 624px;
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
              id="map"
            >
              {isPanoram ? (
                <Panorama
                  width="100%"
                  height="100%"
                  defaultPoint={mapCenter}
                  options={{ direction: [235, 0] }}
                />
              ) : (
                <Ymap center={mapCenter} objRef={mapObjRef} fs lays />
              )}
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
                  background-color: ${isPanoram && theme.colors.inactiveColor};
                  font-weight: 400;
                  text-transform: none;
                `}
                onClick={() => onMapClick()}
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
                  background-color: ${!isPanoram && theme.colors.inactiveColor};
                  font-weight: 400;
                  text-transform: none;
                `}
                onClick={() => onPanoramClick()}
                aria-label="Включить панорманое отображение"
              >
                Панорама
              </button>
            </div>
            {waysToGet(theme, setWayToGet, wayToGet)}
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
              {mockData[wayToGet]}
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
