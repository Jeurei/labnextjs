export const errorMessagesMap = {
  EMAIL: 'Email введён неверно повторите попытку',
  TEL: 'Телефон введён неверно повторите попытку',
  NAME: 'Имя должно содержать как минимум один символ',
};

export const DEFAULT_USER_FORM_STATE = {
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
