import React, { useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import PropTypes from 'prop-types';
import SectionInner from 'components/header/section-inner';
import { ENTER_KEY_CODE } from 'constants/keys';
import CrossButton from 'components/common/crossButton';
import { searchShowing } from '../utils/animation';
import SearchModalContainerTop from './search-modal-top';

const SearchModal = ({ isDeleting, animationDuration, deleteElement }) => {
  const MIN_TABLET_WIDTH = 720;
  const modalRef = useRef();
  const deletingKeyFrames = keyframes`
      0% {
       min-height: 400px;
      }

      50%{
        opacity: 0;
      }

      100% {
        opacity: 0;
        min-height: 0;
      `;

  return (
    <section
      className="header__modal-search seciton search-modal"
      css={
        isDeleting
          ? css`
              animation: ${deletingKeyFrames} ${animationDuration - 0.5}s
                forwards ease-in-out;
            `
          : css`
              animation: ${searchShowing} ${animationDuration - 0.5}s forwards
                ease-in-out;
            `
      }
      ref={modalRef}
    >
      <SectionInner>
        <div
          className="search-modal__container"
          css={css`
            .cross-button {
              top: -5px;
              right: 25.5px;
              &:before,
              &:after {
                background-color: #fff;
              }
            }
          `}
        >
          {window.innerWidth < MIN_TABLET_WIDTH && (
            <CrossButton
              buttonClass="search__modal-close"
              label="Закрыть поиск"
              action={deleteElement}
            />
          )}

          <SearchModalContainerTop />
        </div>
      </SectionInner>
      <button
        type="button"
        css={css`
          position: absolute;
          z-index: -2;
          top: 100%;
          right: 0px;
          width: 100%;
          height: 100vh;
          margin: 0px;
          background: rgba(0, 0, 0, 0.4) none repeat scroll 0% 0%;
          opacity: 1;
          touch-action: pan-y;
          user-select: none;
          color: transparent;
          apearance: none;
          border: none;
        `}
        onClick={() => deleteElement()}
        onKeyDown={(evt) => {
          if (evt.key === ENTER_KEY_CODE) deleteElement();
        }}
      >
        закрыть
      </button>
    </section>
  );
};

SearchModal.propTypes = {
  isDeleting: PropTypes.bool.isRequired,
  animationDuration: PropTypes.number.isRequired,
  deleteElement: PropTypes.func.isRequired,
};

export default SearchModal;
