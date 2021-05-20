import InnerPageLayout from 'components/InnerPageLayout';
import Corpo from 'components/corpo/corpo';
import { serverRoutesMap } from 'Redux/actions/actions';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getInitialPropsForApp } from 'utils/common';
import { wrapper } from 'Redux/index';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Корпоративным клиентам">
      <Corpo data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await axios(`${serverRoutesMap.CORPO}`).then((res) => {
    return res.data;
  });

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
