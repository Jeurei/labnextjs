import Main from 'components/main/main';
import {
  getRoutes,
  getCities,
  getCart,
  getLinks,
  getFeatures,
  getShares,
  getOffers,
  getComplexes,
  getArticles,
  getHints,
  getRoutesInBurger,
  getUserForm,
} from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import { isEmpty } from 'utils/common';
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
    store.dispatch(getUserForm());
    await store.dispatch(getLinks());
    await store.dispatch(getFeatures());
    await store.dispatch(getShares());
    await store.dispatch(getOffers());
    await store.dispatch(getComplexes());
    await store.dispatch(getArticles());
    await store.dispatch(getHints());
  },
);

export default Index;
