import InnerPageLayout from 'components/InnerPageLayout';
import Suppliers from 'components/suppliers/suppliers';
import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsSuppliers } from 'api';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Поставщикам">
      <Suppliers data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await getInitialPropsSuppliers();
  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
