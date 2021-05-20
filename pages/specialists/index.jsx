import { getSpecialists } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import Specialists from 'components/specialists/specialists';
import InnerPageLayout from 'components/InnerPageLayout';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка | Специалистам">
      <Specialists />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getServerSideProps((store) => async () => {
  await getInitialPropsForApp(store);

  await store.dispatch(getSpecialists());
});

export default Index;
