import Cart from 'components/cart/cart';
import InnerPageLayout from 'components/InnerPageLayout';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const CartPage = () => {
  return (
    <InnerPageLayout>
      <Cart />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
  },
);

export default CartPage;
