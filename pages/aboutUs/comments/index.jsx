import Comments from 'components/comments/comments';
import InnerPageLayout from 'components/InnerPageLayout';
import { getReviews } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Отзывы">
      <Comments />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const state = store.getState();
    if (state.comments.length === 0) await store.dispatch(getReviews());
  },
);

export default Index;
