import FullSpeialist from 'components/specialists/fullSpecialistsInfo';
import InnerPageLayout from 'components/InnerPageLayout';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForSpecialist } from 'api';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка">
      <FullSpeialist />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps(
  (store) => async ({ query }) => {
    await getInitialPropsForApp(store);
    await getInitialPropsForSpecialist(store, query);
  },
);

export default Index;
