import { ReactComponent as CartIcon } from 'icons/cart-icon.svg';
import { css, keyframes } from '@emotion/react';
import { useState } from 'react';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { setItemToCart } from 'Redux/actions/actions';
import { connect } from 'react-redux';

const BuyButton = ({ data, setCartItem }) => {
  const [state, setState] = useState(false);
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [clickCords, setClickCords] = useState({ x: 0, y: 0 });

  const flyAnimation = keyframes`
    0%{
      top: ${clickCords.y};
      left: ${clickCords.x};
      transform: scale(1);
    }

    100% {
      top: ${cords.y};
      left: ${cords.x};
      transform: scale(0);
    }
  `;

  const onClickHandler = (evt) => {
    const eClickCords = { x: evt.clientX, y: evt.clientY };
    const cart = document.querySelectorAll('.cart-icon')[1];
    const cartCords = cart.getBoundingClientRect();
    setCords({ x: `${cartCords.x}px`, y: `${cartCords.y}px` });
    setClickCords({
      x: `${eClickCords.x - 27}px`,
      y: `${eClickCords.y - 27}px`,
    });
    setState(true);

    setTimeout(() => {
      setState(false);
      setCartItem(data);
    }, 1000);
  };

  return (
    <>
      {state && (
        <div
          css={css`
            position: fixed;
            top: ${cords.y};
            left: ${cords.x};
            display: flex;
            width: 60px;
            height: 60px;
            align-items: center;
            justify-content: center;
            animation: ${flyAnimation} 1s forwards ease-in-out;
            background-image: linear-gradient(
              -135deg,
              rgba(255, 0, 235, 0.2) 0%,
              rgba(154, 102, 245, 0.2) 50%,
              rgba(43, 215, 255, 0.2) 100%
            );
            border-radius: 50%;
          `}
        >
          <CartIcon fill="#9A66F5" width="23.74px" height="21px" />
        </div>
      )}
      <button
        className="buy__button"
        type="button"
        onClick={onClickHandler}
        css={css`
          position: absolute;
          right: 14px;
          bottom: 18px;
          display: flex;
          width: 60px;
          height: 60px;
          align-items: center;
          justify-content: center;
          border: none;
          appearance: none;
          background-color: transparent;
          background-image: linear-gradient(
            -135deg,
            rgba(255, 0, 235, 0.2) 0%,
            rgba(154, 102, 245, 0.2) 50%,
            rgba(43, 215, 255, 0.2) 100%
          );
          border-radius: 50%;
        `}
      >
        <CartIcon fill="#9A66F5" width="23.74px" height="21px" />{' '}
      </button>
    </>
  );
};

BuyButton.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  setCartItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCartItem: bindActionCreators(setItemToCart, dispatch),
});

export default connect(null, mapDispatchToProps)(BuyButton);
