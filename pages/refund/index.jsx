import InnerPageLayout from 'components/InnerPageLayout';
import Refund from 'components/refund/refund';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Index = () => {
  return (
    <InnerPageLayout>
      <Refund />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Index;
