import Services from 'components/servicePage/services';
import Complex from 'components/servicePage/complex/index';
import {
  getCart,
  getCities,
  getDiscounts,
  getRoutes,
  getRoutesInBurger,
} from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';

const Index = () => {
  return (
    <Services>
      <Complex />
    </Services>
  );
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

export default Index;
