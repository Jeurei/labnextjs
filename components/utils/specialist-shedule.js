import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const getMounthName = (mounth) => {
  return format(new Date(2000, mounth), 'LLLL', { locale: ru });
};
