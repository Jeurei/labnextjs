import InnerPageLayout from 'components/InnerPageLayout';
import ToHome from 'components/toHome/toHome';
import axios from 'axios';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <ToHome data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await axios(`${serverRoutesMap.TOHOME}`).then((res) => {
    return res.data;
  });

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
