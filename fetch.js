import axios from 'axios';

const HOME_URL = 'http://localhost:3005';

const serverRoutesMap = {
  CART: `${HOME_URL}/cart`,
  CITIES: `${HOME_URL}/cities`,
  MAPCITIES: `${HOME_URL}/mapCities`,
  SEARCHCATEGORIES: `${HOME_URL}/searchCategories`,
  HINTS: `${HOME_URL}/hints`,
  MENU: `${HOME_URL}/menu`,
  OFFERS: `${HOME_URL}/offers`,
  COMPLEX: `${HOME_URL}/complex`,
  LINKS: `${HOME_URL}/links`,
  ARTICLES: `${HOME_URL}/articles`,
  SHARES: `${HOME_URL}/shares`,
  FEATURES: `${HOME_URL}/features`,
  SPECIALISTS: `${HOME_URL}/specialists`,
  SPECIALISTSFILTER: `${HOME_URL}/specialistsFilter`,
  DISCOUNTS: `${HOME_URL}/discounts`,
  ROUTES: `${HOME_URL}/routes`,
};

export const getData = (url) => {
  return axios(url).then((res) => Promise.resolve(res.data));
};

export default serverRoutesMap;
