import InnerPageLayout from 'components/InnerPageLayout';
import MedCenters from 'components/medcenters/medCenters';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Медецинские центры">
      <MedCenters />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
  },
);

export default Index;
