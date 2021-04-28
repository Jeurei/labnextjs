import InnerPageLayout from 'components/InnerPageLayout';
import Shares from 'components/shares/shares';
import { getArticles } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Акции">
      <Shares />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const state = store.getState();

    if (!state.articles.length) await store.dispatch(getArticles());
  },
);

export default Index;
