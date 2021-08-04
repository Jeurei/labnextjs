import styled from '@emotion/styled';
import { postData } from 'api/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { serverRoutesMap } from 'Redux/actions/actions';
import { postTypesMap } from 'constants/constants';
import { useRouter } from 'next/router';
import InfoPopup from './infoPopup';

const FormCompleted = ({ closeHandler, userForm, specialist }) => {
  const START = 0;
  const END = 5;

  const Text = styled.p`
    margin: 0;
    margin-bottom: 19px;
  `;
  const router = useRouter();

  const {
    firstField: { spec },
    secondField: { day, mounth, year, time },
  } = userForm;

  return (
    <InfoPopup
      closeHandler={closeHandler}
      request={() =>
        postData(
          serverRoutesMap.FORM,
          { userForm, url: router.pathname },
          postTypesMap.APPLICATION_FORM,
        )
      }
      errorMessage="К сожалению не удалось выполнить запрос"
    >
      <Text className="specialist-form__form-completed-text">
        Вы будете записаны к {spec.label}
      </Text>
      <Text className="specialist-form__form-completed-text">
        {specialist.name}
      </Text>
      <Text className="specialist-form__form-completed-text">
        {time && year && day && mounth && (
          <p className="specialist-form__form-info-text">
            {day + 1 > 9 ? day + 1 : `0${day + 1}`}.
            {mounth > 9 ? Number(mounth) + 1 : `0${Number(mounth) + 1}`}.{year}{' '}
            в {time.slice(START, END)}
          </p>
        )}
      </Text>
      <Text className="specialist-form__form-completed-text">
        Вам на e-mail отправлено уведомление
      </Text>
    </InfoPopup>
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
