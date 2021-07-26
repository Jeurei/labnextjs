import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Loader from 'common/loader';
import { useRef } from 'react';
import useOnScreen from 'hooks/useOnScreen';
import Contacts from './contacts';
import Copyrights from './copyrights';
import FooterBottom from './footer-bottom';
import Form from './form';

const Map = dynamic(import('./map'), { loading: () => <Loader /> });

const Footer = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <footer className="footer" ref={ref}>
      <Form />
      {isVisible && <Map />}
      <div
        css={css`
          background-color: #f7f7f7;
        `}
      >
        <Contacts />
        <FooterBottom />
      </div>

      <Copyrights />
    </footer>
  );
};

export default Footer;
