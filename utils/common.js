/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const randomDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const isEmpty = (obj) => obj && Object.keys(obj).length === 0;

export const allTrue = (obj) => {
  let result = true;
  Object.values(obj).forEach((el) => {
    if (!el) result = false;
  });

  return result;
};
