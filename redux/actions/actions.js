import axios from 'axios';
import MD5 from 'crypto-js/md5';
import { differenceInMinutes } from 'date-fns';
import fs from 'fs';
import path from 'path';
import * as Actions from '../actionTypes';

const HOME_URL = 'https://labdiag-prod.praweb.ru/';

const MAX_FILE_TIME = 15;
export const serverRoutesMap = {
  CART: `${HOME_URL}/cart`,
  CITIES: `${HOME_URL}api/cities`,
  MAPCITIES: `${HOME_URL}/mapCities`,
  SEARCHCATEGORIES: `${HOME_URL}api/searchcategories`,
  HINTS: `${HOME_URL}api/hints`,
  OFFERS: `${HOME_URL}spravochniki/aktualnye-predlozheniya`,
  COMPLEX: `${HOME_URL}api/complex`,
  LINKS: `${HOME_URL}api/links`,
  ARTICLES: `${HOME_URL}press-centr`,
  SHARES: `${HOME_URL}api/promo`,
  FEATURES: `${HOME_URL}api/features-on-main`,
  SPECIALISTS: `${HOME_URL}api/specialists`,
  DISCOUNTS: `${HOME_URL}api/disconts`,
  ROUTES: `${HOME_URL}api/routes`,
  ROUTESINBURDGER: `${HOME_URL}api/routesinburger`,
  MEDCENTERS: `${HOME_URL}api/centers`,
  SPECIALITIES: `${HOME_URL}api/specializations`,
  FORM: `${HOME_URL}api/form`,
  VACANCIES: `${HOME_URL}api/vacansii`,
  FAQPAGE: `${HOME_URL}api/getpage?id=74`,
  SUPPLIERS: `${HOME_URL}api/getpage?id=75`,
  ABOUTUS: `${HOME_URL}api/getpage?id=76`,
  COMMENTS: `${HOME_URL}api/reviews`,
  REFERENCESPAGE: `${HOME_URL}api/getpage?id=85`,
  CORPO: `${HOME_URL}api/getpage?id=79`,
  CONFIG: `${HOME_URL}config`,
  DISCOUNTSPAGE: `${HOME_URL}api/getpage?id=87`,
  TOHOME: `${HOME_URL}api/getpage?id=77`,
  ILLNESS: `${HOME_URL}api/getpage?id=89`,
};

const getDifference = (file) => {
  const { birthtime } = fs.statSync(file);
  return differenceInMinutes(new Date(), new Date(birthtime));
};

const getDataFromFs = async (url, action, dispatch) => {
  const fileName = `${MD5(url)}.json`;
  let res;
  const file = path.join(process.cwd(), '/cache/', fileName);

  try {
    if (fs.existsSync(file) && getDifference(file) < MAX_FILE_TIME) {
      res = JSON.parse(fs.readFileSync(file, 'utf8'));
      dispatch({ type: action, payload: res });
    } else {
      res = await axios({ method: 'GET', url, headers: [] });

      res = res.data;
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }

      fs.writeFileSync(`cache/${fileName}`, JSON.stringify(res), (data, e) => {
        if (e) console.log(e);
      });
    }
    dispatch({ type: action, payload: res });
  } catch (e) {
    console.log(e);
  }
};

export const getConfig = () => async (dispatch) => {
  await getDataFromFs(serverRoutesMap.CONFIG, Actions.GET_CONFIG, dispatch);
};

export const getData = (url) => {
  return axios(url).then((res) => res.data);
};

export const postData = (url, data) => {
  return axios({ method: 'post', url, data });
};

export const getRoutes = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.ROUTES, Actions.GET_ROUTES, dispatch);

export const getRoutesInBurger = () => (dispatch) =>
  getDataFromFs(
    serverRoutesMap.ROUTESINBURDGER,
    Actions.GET_ROUTES_IN_BURGER,
    dispatch,
  );

export const getSpecialists = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.SPECIALISTS, Actions.GET_SPECIALISTS, dispatch);

export const setSpecialist = (id) => (dispatch) =>
  getDataFromFs(
    `${serverRoutesMap.SPECIALISTS}\\${id}`,
    Actions.SET_SPECIALIST,
    dispatch,
  );

export const getSpecialities = () => (dispatch) =>
  getDataFromFs(
    serverRoutesMap.SPECIALITIES,
    Actions.GET_SPECIALITIES,
    dispatch,
  );

export const getDiscounts = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.DISCOUNTS, Actions.GET_DISCOUTNS, dispatch);

export const getCart = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.CART, Actions.GET_CART, dispatch);

export const getCities = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.CITIES, Actions.GET_CITIES, dispatch);

export const getCenters = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.MEDCENTERS, Actions.GET_CENTERS, dispatch);

export const getOffers = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.OFFERS, Actions.GET_OFFERS, dispatch);

export const getComplexes = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.COMPLEX, Actions.GET_COMPLEXES, dispatch);

export const getShares = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.SHARES, Actions.GET_SHARES, dispatch);

export const getVacasies = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.VACANCIES, Actions.GET_VACANSIES, dispatch);

export const getReviews = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.COMMENTS, Actions.GET_REVIEWS, dispatch);

export const getArticles = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.ARTICLES, Actions.GET_ARTICLES, dispatch);

export const getFeatures = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.FEATURES, Actions.GET_FEATURES, dispatch);

export const getLinks = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.LINKS, Actions.GET_LINKS, dispatch);

export const getSearchCategories = () => (dispatch) =>
  getDataFromFs(
    serverRoutesMap.SEARCHCATEGORIES,
    Actions.GET_SEARCH_CATEGORIES,
    dispatch,
  );

export const getHints = () => (dispatch) =>
  getDataFromFs(serverRoutesMap.HINTS, Actions.GET_SEARCH_HINTS, dispatch);

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

export const fetchDataRoute = `${HOME_URL}api/getpage?id=`;
