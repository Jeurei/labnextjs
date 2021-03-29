import InnerPageLayout from 'components/InnerPageLayout';
import AboutUs from 'components/aboutus/aboutus';
import { wrapper } from 'Redux/index';
import { getFeatures } from 'Redux/actions/actions';

const Index = () => {
  return (
    <InnerPageLayout title="Лабдиагностика | О компании">
      <AboutUs />
    </InnerPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(getFeatures());
  },
);

export default Index;
