import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as MarkMapIcon } from 'icons/map-mark-icon.svg';
import { breakpointsMap } from 'constants/styles';
import { css } from '@emotion/react';
import { useHeaderContext } from './header';

const HeaderTopLeft = ({ cities }) => {
  const {
    cities: { onCitiesClickHandler, onClickClosePopupHandler },
  } = useHeaderContext();

  useEffect(() => {
    onClickClosePopupHandler();
  }, [cities.currentCity]);

  return (
    <div
      className="header-top__left"
      css={css`
        position: relative;
        ${breakpointsMap.TABLET} {
          position: static;
        }
      `}
    >
      <div
        className="header-top__left-cities-container"
        css={css`
          position: static;
          ${breakpointsMap.TABLET} {
            position: relative;
          }
        `}
      >
        <div
          className="header-top__left-cities cities"
          data-state="default"
          css={css`
            position: static;
            ${breakpointsMap.TABLET} {
              position: relative;
            }
          `}
        >
          <a
            href="some"
            className="cities__link"
            onClick={(evt) => {
              evt.preventDefault();
              onCitiesClickHandler();
            }}
            arial-label="Открыть попап для выбора города"
          >
            <span className="cities__city">{cities.currentCity}</span>
          </a>
        </div>
        <MarkMapIcon
          className="header-top__left-icon header-top__left-icon--cities"
          width="6.6"
          height="9.3"
          stroke="currentColor"
          fill="currentColor"
        />
      </div>
      <p
        className="header-top__left-tel"
        css={css`
          display: none;
          ${breakpointsMap.TABLET} {
            display: block;
          }
        `}
      >
        <TelIcon width="9" height="9.5" stroke="currentColor" />
        +7 (999) 999-99-99
      </p>
    </div>
  );
};

HeaderTopLeft.propTypes = {
  cities: PropTypes.shape({
    currentCity: PropTypes.string.isRequired,
    list: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const { cities } = state;

  return { cities };
};

export default connect(mapStateToProps, null)(HeaderTopLeft);
