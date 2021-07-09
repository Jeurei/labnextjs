import React, { useContext, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import MainContainer from 'containers/main-container';
import dynamic from 'next/dynamic';
import Form from './common/form';
import Load from './common/load';

const Header = dynamic(() => import('components/header/header'));
const Footer = dynamic(() => import('components/footer/footer'));
const pageContext = React.createContext();

export const usePageContext = () => {
  return useContext(pageContext);
};

const MainLayout = ({
  children,
  title = 'Лабдиагностика',
  isLoading = false,
}) => {
  const [formState, setFormState] = useState(false);

  const onClickFormHandler = (bool) => {
    setFormState(bool);
  };

  const onCloseClickHandler = () => {
    setFormState(false);
  };

  return (
    <Load state={isLoading}>
      <Head>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <pageContext.Provider value={onClickFormHandler}>
        <Header />
        <MainContainer className="main">{children}</MainContainer>
        {formState && <Form closeHandler={onCloseClickHandler} />}
        <Footer />
      </pageContext.Provider>
    </Load>
  );
};

MainLayout.defaultProps = {
  title: 'Лабдиагностика',
  isLoading: false,
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default MainLayout;
