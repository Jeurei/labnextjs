import Comments from 'components/comments/comments';
import InnerPageLayout from 'components/InnerPageLayout';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialComments } from 'api';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Отзывы">
      <Comments />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  await getInitialComments(store);
});

export default Index;
