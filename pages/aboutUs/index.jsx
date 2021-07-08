import InnerPageLayout from 'components/InnerPageLayout';
import AboutUs from 'components/aboutus/aboutus';
import PropTypes from 'prop-types';
import { wrapper } from 'Redux/index';
import { getInitialPropsAboutUs, getInitialPropsForApp } from 'api';

const Index = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | О компании">
      <AboutUs data={pageData} />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
  const pageData = await getInitialPropsAboutUs();

  return { pageData };
});

Index.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
