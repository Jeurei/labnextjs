import Illnes from 'components/ilness/index';
import InnerPageLayout from 'components/InnerPageLayout';
import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialIllness } from 'api';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <Illnes data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await getInitialIllness();

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
