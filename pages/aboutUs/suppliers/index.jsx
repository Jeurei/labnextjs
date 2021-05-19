import InnerPageLayout from 'components/InnerPageLayout';
import Suppliers from 'components/suppliers/suppliers';
import axios from 'axios';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Поставщикам">
      <Suppliers data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.SUPPLIERS}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
