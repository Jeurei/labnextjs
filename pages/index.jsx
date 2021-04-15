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
  getSpecialists,
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
    store.dispatch(getUserForm());
    await store.dispatch(getLinks());
    await store.dispatch(getFeatures());
    await store.dispatch(getShares());
    await store.dispatch(getOffers());
    await store.dispatch(getComplexes());
    await store.dispatch(getArticles());
    await store.dispatch(getHints());
    await store.dispatch(getSpecialists());
  },
);

export default Index;
