import InnerPageLayout from 'components/InnerPageLayout';
import axios from 'axios';
import { fetchDataRoute } from 'Redux/actions/actions';
import PageBuilder from 'components/common/pageBuilder';

import PropTypes from 'prop-types';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout>
      {pageData.page && <PageBuilder data={pageData.page} />}
    </InnerPageLayout>
  );
};

export const getServerSideProps = async ({ params: { id } }) => {
  const pageData = await axios(`${fetchDataRoute}${id}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
