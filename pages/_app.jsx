/* eslint-disable react/prop-types */
// import "../styles/style.scss";
import { ThemeProvider } from '@emotion/react';
import { YMaps } from 'react-yandex-maps';
import ScrollToTop from 'containers/scroll-to-top';
import { wrapper } from '../redux/index';
import '../styles/style.scss';

const App = ({ Component, pageProps }) => {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <YMaps>
          <Component {...pageProps} />
        </YMaps>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(App);

// import Document, { Html, Head, Main, NextScript } from 'next/document';

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <title>Лабдиагностика</title>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
