import InnerPageLayout from 'components/InnerPageLayout';
import Vacansies from 'components/vacansies/vacansies';
import { getVacasies } from 'Redux/actions/actions';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | Вакансии">
      <Vacansies />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  await store.dispatch(getVacasies());
});

export default Index;
