import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const PERM_ID = '4';
export const SPECIALIST_SHEDULE_URL =
  'https://labdiag-prod.praweb.ru/api/spisok-svobodnyh-zapisej-k-specialistam?specialist=';

const getMounthName = (mounth) => {
  return format(new Date(2000, mounth), 'LLLL', { locale: ru });
};

export const getArrayOfMounthes = (array) => {
  return array.map((el) => {
    const mounthName = getMounthName(el);
    return { [el]: mounthName.charAt(0).toUpperCase() + mounthName.slice(1) };
  });
};

export const postTypesMap = {
  APPLICATION_FORM: 'APPLICATION_FORM',
  FEEDBACK_FORM: 'FEEDBACK_FORM',
  REFUND_FORM: 'REFUND_FORM',
};

export const statusesCodesMap = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = (str) => emailValidation.test(str);

export const telValidation = (str) => str.replace(/[^0-9]/g, '').length === 11;
