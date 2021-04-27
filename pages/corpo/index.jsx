import InnerPageLayout from 'components/InnerPageLayout';
import Corpo from 'components/corpo/corpo';
import { serverRoutesMap } from 'Redux/actions/actions';
import PropTypes from 'prop-types';
import axios from 'axios';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Корпоративным клиентам">
      <Corpo data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.CORPO}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;
