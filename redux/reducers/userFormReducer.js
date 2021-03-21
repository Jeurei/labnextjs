import { GET_USER_FORM_STATE, SET_USER_FORM_STATE } from '../actionTypes';

const initialValue = {
  specialist: {},
  fields: {
    firstField: {
      type: 'offline',
      city: '',
      spec: '',
      center: '',
      doctorsName: '',
    },

    secondField: {
      year: '',
      mounth: '',
      day: '',
      time: '',
    },

    thirdField: {
      clientName: '',
      clientTel: '',
      clientEmail: '',
      payType: '',
      isAgreed: false,
    },
  },
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_USER_FORM_STATE:
      return state;
    case SET_USER_FORM_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
