/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { isEmpty } from 'utils/common';
import rootReducer from './reducers/index';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    nextState.userForm = state.userForm;
    if (!isEmpty(state.cart)) nextState.cart = state.cart;
    if (!isEmpty(state.cities)) nextState.cities = state.cities;
    if (!isEmpty(state.routes)) nextState.routes = state.routes;
    if (state.offers.length) nextState.offers = state.offers;
    if (state.articles.length) nextState.articles = state.articles;
    if (state.complexes.length) nextState.complexes = state.complexes;
    if (state.links.length) nextState.links = state.links;
    if (state.features.length) nextState.features = state.features;
    if (state.shares.length) nextState.shares = state.shares;
    if (state.hints.length) nextState.hints = state.hints;
    if (state.specialists.length) nextState.specialists = state.specialists;
    if (state.discounts.length) nextState.discounts = state.discounts;

    return nextState;
  }

  return rootReducer(state, action);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
