import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import CrossButton from 'components/common/crossButton';
import { numberWithSpaces } from '../utils/common';

const CartModalListItem = ({ itemData, action }) => {
  const animationDuration = 0.2;
  const [isDeleting, setDeleting] = useState(false);
  const liRef = useRef();

  const deleteElement = (id) => {
    setDeleting(true);

    setTimeout(() => {
      action(id);
    }, animationDuration * 1000);
  };

  const deletingKeyFrames = () => keyframes`
      0% {
        overflow: hidden;
        height: ${liRef.current.offsetHeight}px;
        opacity: 1;
      }
      100% {
        overflow: hidden;
        height: 0;
        opacity: 0;
      `;

  return (
    <li
      className="cart-modal__list-item"
      data-id={itemData.id}
      ref={liRef}
      css={
        isDeleting &&
        css`
          animation: ${deletingKeyFrames()} ${animationDuration}s ease-in-out;
        `
      }
    >
      <p className="cart-modal__text">{itemData.descr}</p>
      <span className="cart-modal__price">
        {numberWithSpaces(itemData.price)} ₽
      </span>
      <CrossButton
        buttonClass="cities__modal-close"
        label="Удалить предмет из корзины"
        action={(evt) => deleteElement(evt.currentTarget.parentNode.dataset.id)}
      />
    </li>
  );
};

CartModalListItem.propTypes = {
  itemData: PropTypes.shape({
    descr: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.func.isRequired,
};

export default CartModalListItem;
