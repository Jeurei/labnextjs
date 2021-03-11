import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { headerFixedShowing } from '../components/utils/animation';

let renderCount = 0;

const HeaderFixedContainer = ({ children }) => {
  renderCount += 1;

  useEffect(
    () => () => {
      renderCount = 0;
    },
    [],
  );

  return <div className="header__fixed-container">{children}</div>;
};

HeaderFixedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderFixedContainer;
