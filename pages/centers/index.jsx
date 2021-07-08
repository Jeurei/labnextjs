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

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Index;
