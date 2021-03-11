import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div
      css={css`
        margin-bottom: 37px;
        box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
      `}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
