import InnerPageLayout from 'components/InnerPageLayout';
import ToHome from 'components/toHome/toHome';
import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsForToHome } from 'api';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <ToHome data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await getInitialPropsForToHome();

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
