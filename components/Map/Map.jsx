import { useEffect } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

import iconRetinaUrl from './assets/location-sign.png';
import iconUrl from './assets/location-sign.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const { MapContainer, MapConsumer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
  let mapClassName = styles.map;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,

        iconSize: [35, 35],
        iconAnchor:   [0, 50],
        shadowAnchor: [-10, 72],
        popupAnchor:  [17, -65]
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      <MapConsumer>
        {(map) => children(ReactLeaflet, map)}
      </MapConsumer>
    </MapContainer>
  )
}

export default Map;