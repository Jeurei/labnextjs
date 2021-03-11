import axios from 'axios';
import * as Actions from '../actionTypes';

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

export const getRoutes = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.ROUTES,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_ROUTES, payload: response.data }),
  );

export const getSpecialists = () => (dispatch) =>
  axios({
    method: 'GET',
    url: serverRoutesMap.SPECIALISTS,
    headers: [],
  }).then((response) =>
    dispatch({ type: Actions.GET_SPECIALISTS, payload: response.data }),
  );

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

export const setCurrentCity = (playload) => ({
  type: Actions.SET_CURRENT_CITY,
  playload,
});

export const removeItemFromCart = (playload) => ({
  type: Actions.REMOVE_ITEM_FROM_CART,
  playload,
});
