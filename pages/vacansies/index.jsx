import InnerPageLayout from 'components/InnerPageLayout';
import Vacansies from 'components/vacansies/vacansies';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForVacansies } from 'api';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Вакансии">
      <Vacansies />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
    await getInitialPropsForVacansies(store);
  },
);

export default Index;
