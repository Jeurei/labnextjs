import FullSpeialist from 'components/specialists/fullSpecialistsInfo';
import InnerPageLayout from 'components/InnerPageLayout';
import { wrapper } from 'Redux/index';
import { setSpecialist } from 'Redux/actions/actions';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка">
      <FullSpeialist />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    await store.dispatch(setSpecialist(query.id));
  },
);

export default Index;
