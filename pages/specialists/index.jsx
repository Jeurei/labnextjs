import {
  getSpecialists,
  getDiscounts,
  getCart,
  getRoutes,
  getCities,
} from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import Specialists from 'components/specialists/specialists';
import InnerPageLayout from 'components/InnerPageLayout';
import { isEmpty } from 'utils/common';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка">
      <Specialists />
    </InnerPageLayout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(getSpecialists());
  await store.dispatch(getDiscounts());
  await store.dispatch(getCart());
  await store.dispatch(getRoutes());
  await store.dispatch(getCities());
});

export default Index;
