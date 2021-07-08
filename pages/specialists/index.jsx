import { wrapper } from 'Redux/index';
import Specialists from 'components/specialists/specialists';
import InnerPageLayout from 'components/InnerPageLayout';
import { getInitialPropsForApp, getInitialPropsForSpecialists } from 'api';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка | Специалистам">
      <Specialists />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getServerSideProps((store) => async () => {
  await getInitialPropsForApp(store);

  await getInitialPropsForSpecialists(store);
});

export default Index;
