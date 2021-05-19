import InnerPageLayout from 'components/InnerPageLayout';
import Insurance from 'components/insurance/insurance';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import axios from 'axios';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Обслуживание через страховые компании">
      <Insurance data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.REFERENCESPAGE}`).then(
    (res) => {
      return res.data;
    },
  );

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
