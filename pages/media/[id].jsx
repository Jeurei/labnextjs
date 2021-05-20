import axios from 'axios';
import { fetchDataRoute } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import InnerPageLayout from 'components/InnerPageLayout';
import { getInitialPropsForApp, isEmpty } from 'utils/common';
import PageBuilder from 'components/common/pageBuilder';
import SectionInner from 'containers/section-inner';
import { wrapper } from 'Redux/index';

const News = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <SectionInner>
        <h2 className="main__title">{pageData.title}</h2>
      </SectionInner>
      {pageData.page && !isEmpty(pageData.page) && (
        <PageBuilder data={pageData.page} />
      )}
    </InnerPageLayout>
  );
};

News.getInitialProps = wrapper.getInitialPageProps(
  (store) => async ({ query: { id } }) => {
    await getInitialPropsForApp(store);
    const pageData = await axios(`${fetchDataRoute}${id}`).then((res) => {
      return res.data;
    });

    return { pageData };
  },
);

News.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default News;
