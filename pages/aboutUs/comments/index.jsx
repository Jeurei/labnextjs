import Comments from 'components/comments/comments';
import InnerPageLayout from 'components/InnerPageLayout';
import { getReviews } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Отзывы">
      <Comments />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  const state = store.getState();
  if (state.comments.length === 0) await store.dispatch(getReviews());
});

export default Index;
