import InnerPageLayout from 'components/InnerPageLayout';
import MedCenter from 'components/medcenters/medCenter';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Center = () => {
  return (
    <InnerPageLayout title="Лабдиагностика">
      <MedCenter />
    </InnerPageLayout>
  );
};

Center.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Center;
