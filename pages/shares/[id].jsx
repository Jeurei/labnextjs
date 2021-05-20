import InnerPageLayout from 'components/InnerPageLayout';
import axios from 'axios';
import { fetchDataRoute } from 'Redux/actions/actions';
import PageBuilder from 'components/common/pageBuilder';

import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

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

    const pageData = await axios(`${fetchDataRoute}${id}`).then((res) => {
      return res.data;
    });

    return { pageData };
  },
);

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;
