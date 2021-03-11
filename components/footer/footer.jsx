import { css } from '@emotion/react';

import Contacts from './contacts';
import Copyrights from './copyrights';
import FooterBottom from './footer-bottom';
import Form from './form';
import Map from './map';

const Footer = () => (
  <footer className="footer">
    <Form />
    <Map />
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

export default Footer;
