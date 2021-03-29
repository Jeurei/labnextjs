import InnerPageLayout from 'components/InnerPageLayout';
import Shares from 'components/shares/shares';
import { getSpecialists } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Акции">
      <Shares />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(getSpecialists());
  },
);

export default Index;
