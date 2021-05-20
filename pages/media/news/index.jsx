import MediaLayout from 'components/media/mediaLayout';
import { getArticles } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return <MediaLayout />;
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  await store.dispatch(getArticles());
});

export default Index;
