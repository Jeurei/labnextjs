import FullSpeialist from 'components/specialists/fullSpecialistsInfo';
import InnerPageLayout from 'components/InnerPageLayout';
import { wrapper } from 'Redux/index';
import {
  setSpecialist,
  getDiscounts,
  getCart,
  getCities,
  getRoutes,
  getRoutesInBurger,
} from 'Redux/actions/actions';

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
    await store.dispatch(getDiscounts());
    await store.dispatch(getCart());
    await store.dispatch(getRoutes());
    await store.dispatch(getRoutesInBurger());
    await store.dispatch(getCities());
  },
);

export default Index;
