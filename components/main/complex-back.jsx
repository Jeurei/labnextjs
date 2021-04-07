import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import { ENTER_KEY_CODE } from 'constants/keys';
import { ReactComponent as ArrowLeft } from 'icons/arrow-left.svg';
import ComplexList from './complex-list';

const ComplexBack = ({ action, data, state, liRef }) => {
  const ANIMATION_DURATION = 0.5;
  const [shouldDelete, setDeleting] = useState(false);
  const [width, setWidth] = useState(null);

  const deletingAnimation = keyframes`
    0% {
      transform: translateX(-${width}px);
    }

    100% {
      transform: translateX(0px);
    }
  `;

  const showingAnimation = keyframes`
    100% {
      transform: translateX(-${width}px);
    }
  `;

  useEffect(() => {
    setWidth(liRef.current.offsetWidth);
  }, []);

  const onCloseHandler = () => {
    setDeleting(true);

    setTimeout(() => {
      action(false);
      setDeleting(false);
    }, ANIMATION_DURATION * 1000 + 200);
  };

  return (
    <div
      className="complex__full"
      css={
        (shouldDelete &&
          css`
            animation: ${ANIMATION_DURATION}s ${deletingAnimation} forwards
              ease-in-out;
          `) ||
        (state &&
          css`
            animation: ${ANIMATION_DURATION}s ${showingAnimation} forwards
              ease-in-out;
          `)
      }
    >
      <h3 className="complex__full-title">Анализы комплекса:</h3>
      <ComplexList data={data.list} />
      <a href="some" className="complex__expand-button">
        Все анализы
        <span className="complex__expand-button-value">(23)</span>
      </a>
      <div className="complex__bottom-container-bottom">
        <a
          className="complex__bottom-container-bottom-text"
          onClick={(evt) => {
            evt.preventDefault();
            onCloseHandler();
          }}
          onKeyDown={(evt) => {
            evt.preventDefault();
            if (evt.key === ENTER_KEY_CODE) onCloseHandler();
          }}
          role="button"
          tabIndex="0"
          aria-label="Нажмите чтобы перевернуть карточку"
          href="some"
        >
          скрыть анализы
        </a>
        <ArrowLeft
          className="complex__icon"
          width="26.5"
          height="26.5"
          fill="currentColor"
          stroke="currentColor"
        />
      </div>
    </div>
  );
};

ComplexBack.propTypes = {
  action: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
  }).isRequired,
  state: PropTypes.bool.isRequired,
  liRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default ComplexBack;
