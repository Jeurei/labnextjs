import DiscountProgram from 'components/discounts/discountProgram';
import InnerPageLayout from 'components/InnerPageLayout';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import axios from 'axios';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <DiscountProgram data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  const pageData = await axios(`${serverRoutesMap.DISCOUNTSPAGE}`).then(
    (res) => {
      return res.data;
    },
  );

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
