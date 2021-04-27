import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Accordeon = ({ title, children, id }) => {
  return (
    <div className="footer__nav-tab tab">
      <input
        className="tab__checkbox"
        type="checkbox"
        onChange={() => console.log('hi')}
        id={id}
        name={id}
        css={css`
          &:checked + .tab__title {
            &::after {
              top: 25px;
              transform: rotate(0);
            }

            &:after,
            &:before {
              background-color: #fff;
            }
          }
        `}
      />
      <label
        className="tab__title"
        htmlFor={id}
        css={css`
          height: 57px;
          font-size: 16px;

          &:before {
            position: absolute;
            top: 0;
            right: 13px;
            display: block;
            width: 18px;
            height: 3px;
            border: none;
            background-color: #9d64f5;
            content: '';
            transform: rotate(0);
          }

          &:after {
            position: absolute;
            right: 13px;
            width: 18px;
            height: 3px;
            border: none;
            background-color: #9d64f5;
            content: '';
            transform: rotate(90deg);
          }

          &:after,
          &:before {
            top: 26px;
          }
        `}
      >
        {title}
      </label>
      <div
        className="tab__content"
        css={css`
          padding: 0;
        `}
      >
        <p
          css={css`
            padding: 0;
            padding-top: 22px;
            padding-bottom: 22px;
            padding-left: 21px;
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 1;
          `}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

Accordeon.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Accordeon;
