import Main from 'components/main/main';
import {
  getLinks,
  getFeatures,
  getShares,
  getOffers,
  getComplexes,
  getArticles,
  getHints,
  getUserForm,
} from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import MainLayout from '../components/MainLayout';

const Index = () => {
  return (
    <MainLayout title="Лабдиагностка">
      <Main />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const state = store.getState();
    const req = [];

    if (!state.features.length) req.push(store.dispatch(getFeatures()));
    if (!state.links.length) req.push(store.dispatch(getLinks()));
    if (!state.shares.length) req.push(store.dispatch(getShares()));
    if (!state.offers.length) req.push(store.dispatch(getOffers()));
    if (!state.complexes.length) req.push(store.dispatch(getComplexes()));
    if (!state.articles.length) req.push(store.dispatch(getArticles()));
    if (!state.hints.length) req.push(store.dispatch(getHints()));
    await Promise.all(req);

    store.dispatch(getUserForm());
  },
);

export default Index;
