import { useRef, useState } from 'react';
import MapLeft from './map-left';
import Ymap from './ymap';

const Map = () => {
  const [mapCenter, setMapCenter] = useState([58.04935, 56.086989]);
  const mapObjRef = useRef();

  return (
    <section className="footer__section footer__section--map section map">
      <MapLeft refProp={mapObjRef} />
      <div className="map__right">
        <Ymap center={mapCenter} objRef={mapObjRef} />
      </div>
    </section>
  );
};

export default Map;
