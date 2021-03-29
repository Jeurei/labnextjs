import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as MapMark } from 'icons/map-mark-icon.svg';
import SectionInner from 'containers/section-inner';
import Select from 'common/select';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { withYMaps } from 'react-yandex-maps';
import { css } from '@emotion/react';

global.Element = typeof Element === 'undefined' ? function () {} : Element;

const MapLeft = ({ selectData, refProp }) => {
  return (
    <div className="map__left">
      <SectionInner>
        <Logo
          className="map__logo"
          width="248"
          height="36"
          alt="Логотип компании Лабдиагностика"
        />
      </SectionInner>
      <div className="map__left-container">
        <SectionInner>
          <h2 className="section__title">Рядом с вами</h2>
        </SectionInner>
        <div className="map__geo geo">
          <div className="geo__selection">
            <SectionInner>
              <MapMark
                className="geo__icon"
                width="8"
                height="8.4"
                fill="currentColor"
              />
              <form
                className="geo__form"
                css={css`
                  .select__control--is-focused {
                    border: none !important;
                    box-shadow: none !important;
                  }
                `}
              >
                <Select
                  selectClass="geo__select"
                  data={selectData}
                  placeholder="Выберите город"
                />
              </form>
            </SectionInner>
          </div>
          <div className="geo__results">
            <SectionInner>
              <h3 className="geo__results-title">
                Найдено <span className="geo__results-value">1</span> отделение
              </h3>
              <ul className="geo__results-list">
                <li className="geo__result result">
                  <a
                    href="./"
                    className="result__link"
                    aria-label="Показать на карте"
                    onClick={(evt) => {
                      evt.preventDefault();
                      if (refProp.current) {
                        refProp.current.panTo([-19.9490072, -69.6348673]);
                      }
                    }}
                  >
                    <MapMark
                      className="geo__result-icon"
                      width="8"
                      height="8.4"
                      fill="currentColor"
                    />
                    <p className="result__text">
                      г. Пермь, ул. Хабаровская, 56
                    </p>
                    <p className="result__options">
                      Возможна оплата картой, есть вход с коляской
                    </p>
                  </a>
                </li>
              </ul>
            </SectionInner>
          </div>
        </div>
      </div>
    </div>
  );
};

MapLeft.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default connect(null, null)(withYMaps(MapLeft));
