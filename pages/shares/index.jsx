import InnerPageLayout from 'components/InnerPageLayout';
import Shares from 'components/shares/shares';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForShares } from 'api';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Акции">
      <Shares />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  await getInitialPropsForShares(store);
});

export default Index;
