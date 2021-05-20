import FullSpeialist from 'components/specialists/fullSpecialistsInfo';
import InnerPageLayout from 'components/InnerPageLayout';
import { wrapper } from 'Redux/index';
import { setSpecialist } from 'Redux/actions/actions';
import { getInitialPropsForApp } from 'utils/common';

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
    await store.dispatch(setSpecialist(query.id));
  },
);

export default Index;
