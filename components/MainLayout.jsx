import Head from 'next/head';
import PropTypes from 'prop-types';
import MainContainer from 'containers/main-container';
import Header from './header/header';
import Footer from './footer/footer';

const MainLayout = ({ children, title = 'Лабдиагностика' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <MainContainer className="main">{children}</MainContainer>
      <Footer />
    </>
  );
};

MainLayout.defaultProps = {
  title: 'Лабдиагностика',
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

export default MainLayout;
