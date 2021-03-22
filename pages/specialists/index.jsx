import {
  getSpecialists,
  getDiscounts,
  getCart,
  getRoutes,
  getCities,
  getRoutesInBurger,
} from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import Specialists from 'components/specialists/specialists';
import InnerPageLayout from 'components/InnerPageLayout';
import { isEmpty } from 'utils/common';
import PropTypes from 'prop-types';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка">
      <Specialists />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(getSpecialists());
    await store.dispatch(getDiscounts());
    await store.dispatch(getCart());
    await store.dispatch(getRoutes());
    await store.dispatch(getRoutesInBurger());
    await store.dispatch(getCities());
  },
);

export default Index;
