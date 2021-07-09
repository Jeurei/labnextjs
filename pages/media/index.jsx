import MediaLayout from 'components/media/mediaLayout';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForMedia } from 'api';

const Index = () => {
  return <MediaLayout />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
    await getInitialPropsForMedia(store);
  },
);

export default Index;
