import DiscountProgram from 'components/discounts/discountProgram';
import InnerPageLayout from 'components/InnerPageLayout';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import axios from 'axios';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout>
      <DiscountProgram data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.DISCOUNTSPAGE}`).then(
    (res) => {
      return res.data;
    },
  );

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;
