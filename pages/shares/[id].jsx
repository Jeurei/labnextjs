import InnerPageLayout from 'components/InnerPageLayout';
import PageBuilder from 'components/common/pageBuilder';
import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialPropsDynamic } from 'api';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      {pageData.page && <PageBuilder data={pageData.page} />}
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps(
  (store) => async ({ query: { id } }) => {
    await getInitialPropsForApp(store);

    const pageData = await getInitialPropsDynamic(id);

    return { pageData };
  },
);

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;
