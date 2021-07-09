import InnerPageLayout from 'components/InnerPageLayout';
import References from 'components/references/references';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Справки в ФНС">
      <References />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
  },
);

export default Index;
