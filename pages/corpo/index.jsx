import InnerPageLayout from 'components/InnerPageLayout';
import Corpo from 'components/corpo/corpo';
import PropTypes from 'prop-types';
import { getInitialPropsForApp, getInitialCorpo } from 'api';
import { wrapper } from 'Redux/index';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Корпоративным клиентам">
      <Corpo data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await getInitialCorpo();

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
