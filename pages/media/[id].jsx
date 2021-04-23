import axios from 'axios';
import { fetchDataRoute } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import InnerPageLayout from 'components/InnerPageLayout';
import { isEmpty } from 'utils/common';
import PageBuilder from 'components/common/pageBuilder';

const News = ({ pageData }) => {
  return (
    <InnerPageLayout>
      <h2 className="main__title">{pageData.title}</h2>
      {pageData.page && !isEmpty(pageData.page) && (
        <PageBuilder data={pageData.page} />
      )}
    </InnerPageLayout>
  );
};

export const getServerSideProps = async ({ params: { id } }) => {
  const pageData = await axios(`${fetchDataRoute}${id}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

News.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default News;
