import InnerPageLayout from 'components/InnerPageLayout';
import Suppliers from 'components/suppliers/suppliers';
import axios from 'axios';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Поставщикам">
      <Suppliers data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await axios(`${serverRoutesMap.SUPPLIERS}`).then((res) => {
    return res.data;
  });

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
