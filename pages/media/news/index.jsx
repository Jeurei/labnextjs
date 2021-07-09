import { getInitialArticles, getInitialPropsForApp } from 'api/';
import MediaLayout from 'components/media/mediaLayout';
import { wrapper } from 'Redux/index';

const Index = () => {
  return <MediaLayout />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
    await getInitialArticles(store);
  },
);

export default Index;
