/* eslint-disable max-len */

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
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

export const createElement = (str) => {
  const div = document.createElement('div');
  div.innerHTML = str;

  return div;
};

export const numWord = (value, words) => {
  const newValue = Math.abs(value) % 100;
  const num = newValue % 10;
  if (newValue > 10 && newValue < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];

  return words[2];
};

export const formatDate = (date) => {
  return format(new Date(Number(date)), 'd MMMM yyyy', { locale: ru });
};

export const formatDateForHtml = (date) => {
  return format(new Date(Number(date)), 'yyyy-M-d', { locale: ru });
};
