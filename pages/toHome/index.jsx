import InnerPageLayout from 'components/InnerPageLayout';
import ToHome from 'components/toHome/toHome';
import axios from 'axios';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout>
      <ToHome data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.TOHOME}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;
