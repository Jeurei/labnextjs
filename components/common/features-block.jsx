import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as FiringIcon } from 'icons/firing.svg';

const featuresItem = (data) => {
  return (
    <li
      className="features__list-item"
      css={css`
        position: relative;
      `}
    >
      <FiringIcon
        fill="currentColor"
        stroke="currentColor"
        width="30px"
        height="27px"
        css={css`
          position: absolute;
          top: 13px;
          left: 10px;
          color: #8370f0;
        `}
      />
      <h3
        className="features__list-item-title"
        css={css`
          color: #4a4a4a;
        `}
      >
        {data.title}
      </h3>
      <p className="features__list-item-text">{data.text}</p>
    </li>
  );
};

const FeauturesBlock = ({ features }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        padding-top: 31px;
        background-color: #f7f7f7;

        &:after {
          position: absolute;
          z-index: -1;
          top: 0;
          left: -10%;
          display: block;
          width: 110vw;
          height: 100%;
          background-color: #f7f7f7;
          content: '';
        }
      `}
    >
      <h2
        className="section__title"
        css={css`
          margin-bottom: 88px;
          font-size: 16px;
          font-weight: 500;

          &:after {
            color: ${theme.colors.blue};
          }
        `}
      >
        Почему именно Лабдиагностика
      </h2>
      <ul className="features__list">
        {features.map((el) => featuresItem(el))}
      </ul>
    </div>
  );
};

FeauturesBlock.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { features } = state;

  return { features };
};

export default connect(mapStateToProps, null)(FeauturesBlock);
