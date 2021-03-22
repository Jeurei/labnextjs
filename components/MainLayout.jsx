import React, { useContext, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import MainContainer from 'containers/main-container';
import Header from './header/header';
import Footer from './footer/footer';
import Form from './common/form';
import Load from './common/load';

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
