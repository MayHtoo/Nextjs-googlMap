// components/Map.js
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = ({ markers }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 13.740688453393423, lng: 100.65104828867743 },
          zoom: 10,
        });

        markers.forEach((marker) => {
          const mapMarker = new google.maps.Marker({
            position: marker.position,
            map,
            title: marker.title,
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `<div style= " color:#000;" ><h1>${marker.title}</h1><p>${marker.description}</p></div>`,
          });

          mapMarker.addListener('click', () => {
            infoWindow.open(map, mapMarker);
          });
        });
      }
    });
  }, [markers]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
