import InnerPageLayout from 'components/InnerPageLayout';
import Vacansies from 'components/vacansies/vacansies';
import { getVacasies } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Вакансии">
      <Vacansies />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getVacasies());
  },
);
export default Index;
