import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { ReactComponent as MarkIcon } from 'icons/mark-icon.svg';
import { useState, useEffect } from 'react';
import { statusesCodesMap } from 'constants/constants';
import CrossButton from './crossButton';
import Load from './load';

const InfoPopup = ({ children, closeHandler, request, errorMessage }) => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSucceses] = useState(null);

  useEffect(async () => {
    setLoading(true);

    try {
      const res = await request();
      if (res.status === statusesCodesMap.OK) setSucceses(true);
      else setSucceses(false);
    } catch (e) {
      console.log(e);
      setSucceses(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div
      className="specialist-form__completed-container"
      css={css`
        position: fixed;
        z-index: 30000;
        top: 30%;
        left: 30%;
        display: flex;
        width: 568px;
        height: 277px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(to left, #7a87f8, #ba46f2);
        color: #fff;
        font-size: 16px;
        font-weight: 500;

        .cross-button {
          &:after,
          &:before {
            background-color: #fff;
          }

          &:hover {
            &:after,
            &:before {
              background-color: red;
            }
          }
        }
      `}
    >
      <Load state={isLoading}>
        <CrossButton
          buttonClass="specialist-form__completed-close"
          label="Закрыть форму"
          action={closeHandler}
        />
        {isSuccess ? (
          <>
            <h3
              className="specialist-form__completed-title"
              css={css`
                position: relative;
                display: flex;
                width: 100%;
                justify-content: center;
                margin-bottom: 50px;
                &:after {
                  position: absolute;
                  top: 25px;
                  left: 40%;
                  display: block;
                  width: 130px;
                  height: 14px;
                  content: '/////////////';
                  font-size: 16px;
                  letter-spacing: 4.5px;
                  opacity: 0.3;
                  transform: skew(-16deg, 0deg);
                }
              `}
            >
              <MarkIcon className="specialist-form__completed-title-icon" />
            </h3>
            {children}
          </>
        ) : (
          <div>{errorMessage}</div>
        )}
      </Load>
    </div>
  );
};

InfoPopup.propTypes = {
  children: PropTypes.node.isRequired,
  closeHandler: PropTypes.func.isRequired,
  request: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default InfoPopup;
