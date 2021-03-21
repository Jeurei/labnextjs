import { ReactComponent as MarkIcon } from 'icons/mark-icon.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CrossButton from './crossButton';

const FormCompleted = ({ closeHandler, userForm, specialist }) => {
  const Text = styled.p`
    margin: 0;
    margin-bottom: 19px;
  `;
  const {
    secondField: { day, mounth, year, time },
  } = userForm;
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
            content: '///////////';
            font-size: 16px;
            letter-spacing: 4.5px;
            opacity: 0.3;
            transform: skew(-16deg, 0deg);
          }
        `}
      >
        <CrossButton
          buttonClass="specialist-form__completed-close"
          label="Закрыть форму"
          action={closeHandler}
        />
        <MarkIcon className="specialist-form__completed-title-icon" />
      </h3>
      <Text className="specialist-form__form-completed-text">
        Вы будете записаны к {specialist.job[0]}
      </Text>
      <Text className="specialist-form__form-completed-text">
        {userForm.name}
      </Text>
      <Text className="specialist-form__form-completed-text">
        {time && year && day && mounth && (
          <p className="specialist-form__form-info-text">
            {day - 1}.{mounth > 9 ? mounth + 1 : `0${mounth + 1}`}.{year} в{' '}
            {specialist.time[year][mounth][day - 2][time - 1]}
          </p>
        )}
      </Text>
      <Text className="specialist-form__form-completed-text">
        Вам на e-mail отправлено уведомление
      </Text>
    </div>
  );
};

FormCompleted.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
  specialist: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    userForm: { fields },
  } = state;

  return { userForm: fields };
};

export default connect(mapStateToProps, null)(FormCompleted);
