import Illnes from 'components/ilness/index';
import InnerPageLayout from 'components/InnerPageLayout';
import axios from 'axios';
import { serverRoutesMap } from 'Redux/actions/actions';
import PropTypes from 'prop-types';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout>
      <Illnes data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.ILLNESS}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;
