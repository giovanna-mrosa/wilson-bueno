/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.scss';
import '../../node_modules/leaflet-geosearch/dist/geosearch.css';

import iconRetinaUrl from './assets/location-sign.png';
import iconUrl from './assets/location-sign.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'

const { MapContainer, MapConsumer, useMap } = ReactLeaflet;

const Search = (props) => {
  const map = useMap() 
  const { provider } = props

  useEffect(() => {
      const searchControl = new GeoSearchControl({
          provider,
          searchLabel: 'Procure sua cidade',
          showMarker: false,
          retainZoomLevel: true,
      })

      map.addControl(searchControl) 
      return () => map.removeControl(searchControl)
  }, [props])

  return null
}

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

      <Search provider={new OpenStreetMapProvider()} />
    </MapContainer>
  )
}

export default Map;