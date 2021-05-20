import InnerPageLayout from 'components/InnerPageLayout';
import Shares from 'components/shares/shares';
import { getShares } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Акции">
      <Shares />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const state = store.getState();

  if (!state.shares.length) await store.dispatch(getShares());
});

export default Index;
