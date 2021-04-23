import MediaLayout from 'components/media/mediaLayout';
import { getArticles } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';

const Index = () => {
  return <MediaLayout />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const state = store.getState();
    if (!state.articles) await store.dispatch(getArticles());
  },
);

export default Index;
