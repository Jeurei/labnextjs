import DiscountProgram from 'components/discounts/discountProgram';
import InnerPageLayout from 'components/InnerPageLayout';
import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp, getInitialDiscounts } from 'api';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <DiscountProgram data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  const pageData = await getInitialDiscounts();

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
