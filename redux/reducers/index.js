import { combineReducers } from 'redux';
import cart from './cartReducer';
import cities from './citiesReducer';
import offers from './offersReducer';
import articles from './articlesReducer';
import complexes from './complexesReducer';
import links from './linksReducer';
import features from './featuresReducer';
import shares from './sharesReducer';
import hints from './searchHintsReducer';
import routes from './routesReducer';
import specialists from './specialistsReducer';
import discounts from './discountsReducer';

const rootReducer = combineReducers({
  cart,
  cities,
  offers,
  articles,
  complexes,
  links,
  features,
  shares,
  hints,
  routes,
  specialists,
  discounts,
});

export default rootReducer;
