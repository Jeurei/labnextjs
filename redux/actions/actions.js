import axios from 'axios';
import * as Actions from '../actionTypes';

const HOME_URL = 'https://localhost:3005';

export const serverRoutesMap = {
  CART: `${HOME_URL}/cart`,
  CITIES: `https://labdiag.praweb.ru/api/cities`,
  MAPCITIES: `${HOME_URL}/mapCities`,
  SEARCHCATEGORIES: `https://labdiag.praweb.ru/api/searchcategories`,
  HINTS: `https://labdiag.praweb.ru/api/hints`,
  OFFERS: `https://labdiag.praweb.ru/spravochniki/aktualnye-predlozheniya`,
  COMPLEX: `https://labdiag.praweb.ru/api/complex`,
  LINKS: `https://labdiag.praweb.ru/api/links`,
  ARTICLES: `https://labdiag.praweb.ru/press-centr`,
  SHARES: `https://labdiag.praweb.ru/api/promo`,
  FEATURES: `https://labdiag.praweb.ru/api/features-on-main`,
  SPECIALISTS: `https://labdiag.praweb.ru/api/specialists`,
  DISCOUNTS: `https://labdiag.praweb.ru/api/disconts`,
  ROUTES: `https://labdiag.praweb.ru/api/routes`,
  ROUTESINBURDGER: `https://labdiag.praweb.ru/api/routesinburger`,
  MEDCENTERS: `https://labdiag.praweb.ru/api/centers`,
  SPECIALITIES: 'https://labdiag.praweb.ru/api/specializations',
  FORM: 'https://labdiag.praweb.ru/api/form',
  VACANCIES: 'https://labdiag.praweb.ru/api/vacansii',
  FAQPAGE: 'https://labdiag.praweb.ru/api/getpage?id=74',
  SUPPLIERS: 'https://labdiag.praweb.ru/api/getpage?id=75',
  ABOUTUS: 'https://labdiag.praweb.ru/api/getpage?id=76',
  COMMENTS: 'https://labdiag.praweb.ru/api/reviews',
  REFERENCESPAGE: 'https://labdiag.praweb.ru/api/getpage?id=85',
  CORPO: 'https://labdiag.praweb.ru/api/getpage?id=79',
  CONFIG: 'https://labdiag.praweb.ru/config',
  DISCOUNTSPAGE: 'https://labdiag.praweb.ru/api/getpage?id=87',
};

export const getConfig = () => (dispatch) => {
  axios({
    method: 'GET',
    url: serverRoutesMap.CONFIG,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_CONFIG, payload: response.data }),
  );
};

export const getData = (url) => {
  return axios(url).then((res) => res.data);
};

export const postData = (url, data) => {
  return axios({ method: 'post', url, data });
};

export const getRoutes = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.ROUTES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_ROUTES, payload: response.data }),
  );

export const getRoutesInBurger = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.ROUTESINBURDGER,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_ROUTES_IN_BURGER, payload: response.data }),
  );

export const getSpecialists = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.SPECIALISTS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_SPECIALISTS, payload: response.data }),
  );

export const setSpecialist = (id) => (dispatch) =>
  axios({
    method: 'GET',
    url: `${serverRoutesMap.SPECIALISTS}\\${id}`,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.SET_SPECIALIST, payload: response.data }),
  );

export const getSpecialities = () => (dispatch) => {
  axios({
    method: 'GET',
    url: serverRoutesMap.SPECIALITIES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_SPECIALITIES, payload: response.data }),
  );
};

export const getDiscounts = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.DISCOUNTS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_DISCOUTNS, payload: response.data }),
  );

export const getCart = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.CART,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_CART, payload: response.data }),
  );

export const getCities = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.CITIES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_CITIES, payload: response.data }),
  );

export const getCenters = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.MEDCENTERS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_CENTERS, payload: response.data }),
  );

export const getOffers = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.OFFERS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_OFFERS, payload: response.data }),
  );

export const getComplexes = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.COMPLEX,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_COMPLEXES, payload: response.data }),
  );

export const getShares = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.SHARES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_SHARES, payload: response.data }),
  );

export const getVacasies = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.VACANCIES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_VACANSIES, payload: response.data }),
  );

export const getReviews = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.COMMENTS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_REVIEWS, payload: response.data }),
  );

export const getArticles = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.ARTICLES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_ARTICLES, payload: response.data }),
  );

export const getFeatures = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.FEATURES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_FEATURES, payload: response.data }),
  );

export const getLinks = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.LINKS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_LINKS, payload: response.data }),
  );

export const getSearchCategories = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.SEARCHCATEGORIES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_SEARCH_CATEGORIES, payload: response.data }),
  );

export const getHints = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.HINTS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_SEARCH_HINTS, payload: response.data }),
  );

export const getUserForm = () => (dispatch) =>
  dispatch({ type: Actions.GET_USER_FORM_STATE });

export const setUserFormState = (payload) => ({
  type: Actions.SET_USER_FORM_STATE,
  payload,
});

export const setSpecialists = (payload) => ({
  type: Actions.SET_SPECIALISTS,
  payload,
});

export const setRoutes = (payload) => ({
  type: Actions.SET_ROUTES,
  payload,
});

export const setCurrentCity = (payload) => ({
  type: Actions.SET_CURRENT_CITY,
  payload,
});

export const setItemToCart = (payload) => ({
  type: Actions.SET_ITEM_TO_CART,
  payload,
});

export const removeItemFromCart = (payload) => ({
  type: Actions.REMOVE_ITEM_FROM_CART,
  payload,
});

export const fetchDataRoute = 'https://labdiag.praweb.ru/api/getpage?id=';
