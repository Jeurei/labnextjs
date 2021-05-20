import FAQ from 'components/FAQ/FAQ';
import InnerPageLayout from 'components/InnerPageLayout';
import axios from 'axios';
import { serverRoutesMap } from 'Redux/actions/actions';

import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Ответы на вопросы">
      <FAQ data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);

  const pageData = await axios(`${serverRoutesMap.FAQPAGE}`).then((res) => {
    return res.data;
  });

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
