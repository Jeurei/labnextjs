import InnerPageLayout from 'components/InnerPageLayout';
import VacansyPage from 'components/vacansies/vacansy';
import axios from 'axios';
import { fetchDataRoute } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Vacansy = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <VacansyPage data={pageData} />
    </InnerPageLayout>
  );
};

Vacansy.getInitialProps = wrapper.getInitialPageProps(
  (store) => async ({ query: { id } }) => {
    await getInitialPropsForApp(store);

    const pageData = await axios(`${fetchDataRoute}${id}`).then((res) => {
      return res.data;
    });

    return { pageData };
  },
);

Vacansy.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Vacansy;
