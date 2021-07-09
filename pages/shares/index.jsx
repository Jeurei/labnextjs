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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
    await getInitialPropsForShares(store);
  },
);

export default Index;
