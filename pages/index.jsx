import Main from 'components/main/main';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForIndex } from '../api';
import MainLayout from '../components/MainLayout';

const Index = () => {
  return (
    // <MainLayout title="Лабдиагностка">
    <Main />
    // </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
    await getInitialPropsForIndex(store);
  },
);

export default Index;
