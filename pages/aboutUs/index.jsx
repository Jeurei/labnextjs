import InnerPageLayout from 'components/InnerPageLayout';
import AboutUs from 'components/aboutus/aboutus';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import axios from 'axios';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | О компании">
      <AboutUs data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  const pageData = await axios(`${serverRoutesMap.ABOUTUS}`).then((res) => {
    return res.data;
  });

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
