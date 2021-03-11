import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { Map, Placemark } from 'react-yandex-maps';

const Ymap = () => {
  const mapData = {
    center: [58.04935, 56.086989],
    zoom: 17,
    control: {
      ZoomControl: {
        visible: false,
      },
    },
  };

  const mapRef = useRef();

  const onTimeClickHandler = (evt) => {
    if (
      evt.target.classList.contains('baloon__shedule-working-time') ||
      evt.target.classList.contains('baloon__shedule-time')
    ) {
      mapRef.current
        .querySelector('.shedule')
        .classList.toggle('shedule--shown');
    }
  };
  useEffect(() => {
    mapRef.current.addEventListener('click', onTimeClickHandler);
  }, []);

  return (
    <div
      ref={mapRef}
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <Map
        css={css`
          width: 100%;
          height: 100%;
        `}
        defaultState={mapData}
        options={{ suppressMapOpenBlock: true }}
      >
        <Placemark
          geometry={mapData.center}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          options={{
            iconLayout: 'default#image',
            iconImageHref: 'img/greenPlaceMarkIcon.svg',
            iconImageSize: [40, 40],
            imageClipRect: [20, 20],
          }}
          properties={{
            balloonContentBody: [
              `
                <div class="baloon">
                    <div class="baloon__top">
                    <div class="baloon__top-container">
                      <h3 class="baloon__title">Лабдиагностика Пермь
                      <svg class="baloon__title-icon" width="6.619" height="9.365" viewBox="0 0 6.619 9.365">
                        <g transform="translate(0 0)">
                          <path d="M1479.927,256.354a1.506,1.506,0,1,1,1.5-1.506,1.5,1.5,0,0,1-1.5,1.506m0-4.827a3.321,3.321,0,0,0-3.31,3.334c0,1.739,1.5,3.983,2.5,5.075.374.408.809.957.809.957s.468-.552.869-.972c1-1.047,2.441-3.148,2.441-5.059a3.322,3.322,0,0,0-3.31-3.334" transform="translate(-1476.617 -251.527)" fill="#000" />
                        </g>
                      </svg>
                      </h3>
                      <p class="baloon__top-text">г. Пермь, ул. Хабаровская, 56
                      Возможна оплата картой, есть вход с коляской
                      </p>
                    </div>
                    </div>
                    <div class="baloon__middle">
                    <div class="baloon__middle-container">
                      <p class="baloon__tel">8 800 3000 789
                      <svg class="baloon__tel-icon" width="8.915" height="9.578" viewBox="0 0 8.915 9.578">
                        <path d="M681.635,275.642a3.569,3.569,0,0,1-1.58-.384,8.656,8.656,0,0,1-2.73-2.211,8.26,8.26,0,0,1-1.619-2.581,3.677,3.677,0,0,1,.086-2.991,3.627,3.627,0,0,1,1.253-1.3.558.558,0,0,1,.716.033,3.691,3.691,0,0,1,1.2,1.933.8.8,0,0,1-.307.83c-.184.15-.369.3-.554.446a.8.8,0,0,0-.313.979,2.054,2.054,0,0,0,.224.5,6.81,6.81,0,0,0,1.746,1.94A2.539,2.539,0,0,0,680,273a.844.844,0,0,0,1.155-.144c.121-.119.234-.247.357-.366a.983.983,0,0,1,1.237-.19,5.147,5.147,0,0,1,1.408,1.2.654.654,0,0,1-.091,1,4.047,4.047,0,0,1-1.2.908A3.455,3.455,0,0,1,681.635,275.642Z" transform="translate(-675.43 -266.064)" fill="#000" />
                      </svg>
                      </p>
                      <div class="baloon__shedule">
                        <p class="baloon__shedule-working-time">Сегодня с <span class="baloon__shedule-time">7:00 - 19:00</span>
                          <svg class="baloon__shedule-working-time-icon" width="9" height="9" viewBox="0 0 9 9">
                            <g transform="translate(-1064.471 -174.964)">
                              <g transform="translate(1064.471 174.964)">
                                <g transform="translate(0 0)">
                                  <path d="M1209.971,258.964a4.5,4.5,0,1,0,4.5,4.5,4.513,4.513,0,0,0-4.5-4.5Zm0,8.1a3.6,3.6,0,1,1,3.6-3.6A3.61,3.61,0,0,1,1209.971,267.064Zm.225-5.85h-.675v2.7l2.34,1.44.36-.585-2.025-1.215Z" transform="translate(-1205.471 -258.964)" fill="#000"/>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </p>
                        <p class="baloon__shedule-state">Открыто</p>
                        <ul class="shedule">
                          <li class="shedule__item">
                            <p class="shedule__day">ПН</p>
                            <time class="shdeule__time">07:00</time>
                            <time class="shdeule__time">19:00</time>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    <div class="baloon__bottom">
                     <div class="baloon__bottom-container">
                      <p class="baloon__bottom-text">Принимаем анализы 7:30 - 19:00
                      <svg class="baloon__bottom-icon" width="6.303" height="14.789" viewBox="0 0 6.303 14.789">
                      <g transform="translate(-858.921 11.027)">
                        <g transform="translate(858.921 -11.027)">
                          <path d="M859.61-4.308q0-2.757,0-5.513c0-.168-.031-.243-.222-.246a.479.479,0,0,1-.471-.493.481.481,0,0,1,.511-.466q2.642,0,5.284,0a.482.482,0,0,1,.509.469.482.482,0,0,1-.49.492c-.18,0-.2.078-.2.228q0,5.5,0,10.994a2.628,2.628,0,0,1-.638,1.8,2.467,2.467,0,0,1-3.365.27,2.55,2.55,0,0,1-.922-2.067q0-2.732,0-5.464Zm.989-3.577q0,1,0,2c0,.1.005.183.143.183q1.329,0,2.658,0c.1,0,.15-.04.148-.146,0-.169-.006-.339,0-.508,0-.124-.048-.162-.166-.159-.262.006-.525.005-.787,0a.476.476,0,0,1-.5-.495.473.473,0,0,1,.5-.471c.257,0,.514-.007.771,0,.138,0,.179-.048.179-.181q-.007-1.107,0-2.215c0-.146-.051-.187-.191-.187q-1.288.007-2.576,0c-.147,0-.187.051-.185.191C860.6-9.209,860.6-8.547,860.6-7.885Zm2.373,3.917c.147,0,.294,0,.442,0,.088,0,.132-.033.131-.125q0-.327,0-.654c0-.091-.044-.125-.131-.125-.289,0-.578-.007-.867,0a.447.447,0,0,0-.424.457.449.449,0,0,0,.44.44C862.7-3.964,862.836-3.969,862.972-3.968Zm.01,1.687h0c-.12,0-.24,0-.36,0a.455.455,0,0,0-.5.444.468.468,0,0,0,.482.456c.267.01.534,0,.8,0,.094,0,.142-.031.14-.131,0-.212,0-.425,0-.638,0-.1-.042-.138-.138-.136C863.266-2.279,863.124-2.281,862.982-2.281Z" transform="translate(-858.921 11.027)" fill="#4a4a4a"/>
                        </g>
                      </g>
                    </svg>
                      </p>
                      <span class="baloon__bottom-text-light">Отправление анализов в лабораторию в 14:00</span>
                     </div>
                    </div>
                </div>
                `,
            ].join(''),
          }}
        />
      </Map>
    </div>
  );
};

export default Ymap;
