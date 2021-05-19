import InnerPageLayout from 'components/InnerPageLayout';
import AboutUs from 'components/aboutus/aboutus';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import axios from 'axios';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | О компании">
      <AboutUs data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.ABOUTUS}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
