import FAQ from 'components/FAQ/FAQ';
import InnerPageLayout from 'components/InnerPageLayout';
import axios from 'axios';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';

const Index = ({ pageData }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Ответы на вопросы">
      <FAQ data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async () => {
  const pageData = await axios(`${serverRoutesMap.FAQPAGE}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Index.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;
