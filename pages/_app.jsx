/* eslint-disable react/prop-types */
// import "../styles/style.scss";
import React from 'react';
import Router from 'next/router';
import nProgress from 'nprogress';
import {
  getDiscounts,
  getCart,
  getRoutes,
  getCities,
  getRoutesInBurger,
} from 'Redux/actions/actions';
import { ThemeProvider } from '@emotion/react';
import { YMaps } from 'react-yandex-maps';
import ScrollToTop from 'containers/scroll-to-top';
import { wrapper } from '../redux/index';
import '../styles/style.scss';
import 'nprogress/nprogress.css';

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = React.useState(false);
  nProgress.configure({ showSpinner: false });

  const theme = {
    colors: {
      colorText: {
        hex: '#4a4a4a',
        rgb: '74,74,74',
      },
      altColorText: '#fff',
      labelColor: '#222',
      iconsColor: '#4a4a4a',
      altIconsColor: '#222',
      altBaseColor: '#fff',
      bgColor: '#fff',
      borderColor: 'RGBA(112, 112, 112, 0.2)',
      boxShadow: '1px 1px 22px 0 RGBA(74, 74, 74, 0.2)',
      green: '#65bc29',
      white: '#fff',
      blue: '#4faaed',
      red: '#fc5a8d',
      hoverColor: '#f7f7f7',
      inactiveColor: '#dedede',
      linearGradient: 'linear-gradient(257deg, #5BA6FB, #DF20EE);',
    },

    fontSizes: {
      bodyFs: '12px',
      bodyLh: '16px',
      altFs: '13px',
      altLh: '17px',
      titleH2Fs: '33px',
      titleH2Lh: '44px',
      titleH3Fs: '20px',
      titleH3Lh: '27px',
      titleH4Fs: '16px',
      titleH4Lh: '21px',
      titleH5Fs: '14px',
      titleH5Lh: '19px',
    },
  };

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', () => {
      start();
      nProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      end();
      nProgress.done();
    });

    Router.events.on('routeChangeError', () => {
      end();
      nProgress.done();
    });

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <YMaps
          query={{
            apikey: 'dfd9fe91-82da-412d-a4dd-eafd43340cfa',
          }}
        >
          {loading ? <h1>Loading...</h1> : <Component {...pageProps} />}
        </YMaps>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(App);
