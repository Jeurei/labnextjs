import InnerPageLayout from 'components/InnerPageLayout';
import VacansyPage from 'components/vacansies/vacansy';
import axios from 'axios';
import { fetchDataRoute } from 'Redux/actions/actions';

import PropTypes from 'prop-types';

const Vacansy = ({ pageData }) => {
  return (
    <InnerPageLayout>
      <VacansyPage data={pageData} />
    </InnerPageLayout>
  );
};

export const getServerSideProps = async ({ params: { id } }) => {
  const pageData = await axios(`${fetchDataRoute}${id}`).then((res) => {
    return res.data;
  });

  return { props: { pageData } };
};

Vacansy.propTypes = {
  pageData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Vacansy;
