import MediaLayout from 'components/media/mediaLayout';
import { getArticles } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return <MediaLayout />;
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  const state = store.getState();
  if (!state.articles.length) await store.dispatch(getArticles());
});

export default Index;
