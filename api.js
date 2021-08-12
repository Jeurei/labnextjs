import axios from 'axios';
import * as Actions from 'Redux/actions/actions';
import { isEmpty } from 'components/utils/common';
import { SPECIALIST_SHEDULE_URL } from 'constants/constants';

export const getInitialPropsForApp = async (store) => {
  const state = store.getState();
  const req = [];

  if (!state.config.length) req.push(store.dispatch(Actions.getConfig()));
  if (!state.discounts.length) req.push(store.dispatch(Actions.getDiscounts()));
  if (!state.routes.routes) req.push(store.dispatch(Actions.getRoutes()));
  if (!state.routes.burger)
    req.push(store.dispatch(Actions.getRoutesInBurger()));
  if (isEmpty(state.cities)) req.push(store.dispatch(Actions.getCities()));
  if (!state.medcenters.length) req.push(store.dispatch(Actions.getCenters()));
  if (isEmpty(state.specialities))
    req.push(store.dispatch(Actions.getSpecialities()));
  if (!state.search.length)
    req.push(store.dispatch(Actions.getSearchCategories()));

  await Promise.all(req);
};

export const getInitialPropsForIndex = async (store) => {
  const state = store.getState();
  const req = [];

  if (!state.features.length) req.push(store.dispatch(Actions.getFeatures()));
  if (!state.links.length) req.push(store.dispatch(Actions.getLinks()));
  if (!state.shares.length) req.push(store.dispatch(Actions.getShares()));
  if (!state.offers.length) req.push(store.dispatch(Actions.getOffers()));
  if (!state.complexes.length) req.push(store.dispatch(Actions.getComplexes()));
  if (!state.articles.length) req.push(store.dispatch(Actions.getArticles()));
  if (!state.hints.length) req.push(store.dispatch(Actions.getHints()));

  await Promise.all(req).then(() => {
    store.dispatch(Actions.getUserForm());
    return { props: {} };
  });
};

export const getInitialPropsForVacansies = async (store) => {
  const state = store.getState();
  if (!state.vacansies.length) await store.dispatch(Actions.getVacasies());
};

const parseSpecialists = async (store) => {
  const { specialists, medcenters, specialities, cities } = store.getState();

  const parsedCenters = Object.values(medcenters).map((el) => ({
    ...el,
    city: Object.values(cities).find((elem) => elem.value === el.city),
  }));

  const parsedSpecialists = Object.values(specialists).map((el) => ({
    ...el,
    name: {
      label: el.name,
      value: el.id,
    },
    centers: Object.values(el.centers)[0]
      ? Object.values(parsedCenters).find((elem) =>
          el.centers.includes(elem.id),
        )
      : null,
    specializations: Object.values(el.specializations)[0]
      ? el.specializations.map((elem) => ({
          label: Object.values(specialities).find((element) =>
            elem.includes(element.id),
          ).name,
          value: elem,
        }))
      : null,
  }));

  await store.dispatch(Actions.setSpecialists(parsedSpecialists));
};

export const getInitialPropsForSpecialists = async (store) => {
  const state = store.getState();

  if (!state.specialists.length) {
    await store.dispatch(Actions.getSpecialists());
    parseSpecialists(store);
  }
};

export const getInitialPropsForSpecialist = async (store, query) => {
  await store.dispatch(Actions.setSpecialist(query.id));
};

export const getInitialPropsForShares = async (store) => {
  const state = store.getState();

  if (!state.shares.length) await store.dispatch(Actions.getShares());
};

export const getInitialPropsForMedia = async (store) => {
  const state = store.getState();

  if (!state.articles.length) await store.dispatch(Actions.getArticles());
};

export const getInitialArticles = async (store) => {
  const state = store.getState();
  if (!state.articles.length) await store.dispatch(Actions.getArticles());
};

export const getInitialComments = async (store) => {
  const state = store.getState();
  if (!state.comments.length) await store.dispatch(Actions.getReviews());
};

// Страницы которые собираются модулем PageBuilder
export const getInitialPropsForToHome = async () => {
  return axios(`${Actions.serverRoutesMap.TOHOME}`).then((res) => {
    return res.data;
  });
};

export const getInitialPropsDynamic = async (id) => {
  return axios(`${Actions.fetchDataRoute}${id}`).then((res) => {
    return res.data;
  });
};

export const getInitialIllness = async () => {
  return axios(`${Actions.serverRoutesMap.ILLNESS}`).then((res) => {
    return res.data;
  });
};

export const getInitialPropsInsurance = async () => {
  return axios(`${Actions.serverRoutesMap.REFERENCESPAGE}`).then((res) => {
    return res.data;
  });
};

export const getInitialDiscounts = async () => {
  return axios(`${Actions.serverRoutesMap.DISCOUNTSPAGE}`).then((res) => {
    return res.data;
  });
};

export const getInitialCorpo = async () => {
  return axios(`${Actions.serverRoutesMap.CORPO}`).then((res) => {
    return res.data;
  });
};

export const getInitialPropsAboutUs = async () => {
  return axios(`${Actions.serverRoutesMap.ABOUTUS}`).then((res) => {
    return res.data;
  });
};

export const getInitialPropsSuppliers = async () => {
  return axios(`${Actions.serverRoutesMap.SUPPLIERS}`).then((res) => {
    return res.data;
  });
};

export const getInitialPropsFAQ = async () => {
  return axios(`${Actions.serverRoutesMap.FAQPAGE}`).then((res) => {
    return res.data;
  });
};

// methods for fething

export const getData = (url) => {
  return axios(url).then((res) => res.data);
};

export const postData = (url, data, type) => {
  return axios.post(url, { ...data, type });
};

export const getSpecialistShedule = async (id) => {
  return axios.get(`${SPECIALIST_SHEDULE_URL}${id}`).then((res) => {
    return res.data;
  });
};

export const getSpecialists = async (store) => {
  const specialists = await axios
    .get(Actions.serverRoutesMap.SPECIALISTS)
    .then((res) => res.data);
  store.dispatch(Actions.setSpecialists(Object.values(specialists)));
  parseSpecialists(store);
};
