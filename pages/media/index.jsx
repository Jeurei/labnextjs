import MediaLayout from 'components/media/mediaLayout';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForMedia } from 'api';

const Index = () => {
  return <MediaLayout />;
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  await getInitialPropsForMedia(store);
});

export default Index;
