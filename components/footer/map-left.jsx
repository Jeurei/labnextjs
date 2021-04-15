import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as MapMark } from 'icons/map-mark-icon.svg';
import SectionInner from 'containers/section-inner';
import Select from 'common/select';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { withYMaps } from 'react-yandex-maps';
import { css } from '@emotion/react';
import MapLeftResults from './map-left-results';

global.Element = typeof Element === 'undefined' ? function () {} : Element;

const MapLeft = ({ cities, refProp }) => {
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
                  data={Object.values(cities)}
                  placeholder="Выберите город"
                />
              </form>
            </SectionInner>
          </div>
          <div className="geo__results">
            <SectionInner>
              <MapLeftResults refProp={refProp} />
            </SectionInner>
          </div>
        </div>
      </div>
    </div>
  );
};

MapLeft.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

const mapStateToProps = (state) => {
  const { cities } = state;

  return { cities };
};

export default connect(mapStateToProps, null)(withYMaps(MapLeft));
