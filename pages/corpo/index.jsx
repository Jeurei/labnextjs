import InnerPageLayout from 'components/InnerPageLayout';
import Corpo from 'components/corpo/corpo';
import { wrapper } from 'Redux/index';
import { getFeatures } from 'Redux/actions/actions';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Корпоративным клиентам">
      <Corpo />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const state = store.getState();
    if (!state.features) await store.dispatch(getFeatures());
  },
);

export default Index;
