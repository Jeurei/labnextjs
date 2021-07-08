import InnerPageLayout from 'components/InnerPageLayout';
import Insurance from 'components/insurance/insurance';
import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsInsurance } from 'api';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Обслуживание через страховые компании">
      <Insurance data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  const pageData = await getInitialPropsInsurance();

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
