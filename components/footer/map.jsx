import { css } from '@emotion/react';

import MapLeft from './map-left';
import Ymap from './ymap';

const Map = () => (
  <section className="footer__section footer__section--map section map">
    <MapLeft />
    <div className="map__right">
      <Ymap />
    </div>
  </section>
);

export default Map;
