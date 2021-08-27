import FullSpeialist from 'components/specialists/fullSpecialistsInfo';
import InnerPageLayout from 'components/InnerPageLayout';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForSpecialist } from 'api';
import SectionInner from 'components/header/section-inner';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностка">
      <SectionInner>
        <FullSpeialist />
      </SectionInner>
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ query }) => {
    await getInitialPropsForApp(store);
    await getInitialPropsForSpecialist(store, query);
  },
);

export default Index;
