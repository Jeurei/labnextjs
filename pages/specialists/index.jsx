import { getSpecialists } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import Specialists from 'components/specialists/specialists';
import InnerPageLayout from 'components/InnerPageLayout';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка | Специалистам">
      <Specialists />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(getSpecialists());
  },
);

export default Index;
