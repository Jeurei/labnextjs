import Services from 'components/servicePage/services';
import {
  getCart,
  getCities,
  getDiscounts,
  getRoutes,
  getRoutesInBurger,
} from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';

const index = () => {
  return <Services />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(getDiscounts());
    await store.dispatch(getCart());
    await store.dispatch(getRoutes());
    await store.dispatch(getRoutesInBurger());
    await store.dispatch(getCities());
  },
);

export default index;
