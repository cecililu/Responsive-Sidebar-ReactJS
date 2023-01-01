import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import district from "./LalitpurGEOJSON.json";
import '../App.css'

export const MainMap = () => {
  const layerurl =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png";
  const LalitpurStyle = {
    fillColor: "red",
    fillOpacity: 0,
    color: "blue",
    weight: 1,
  };

  return (
    <div>
      <MapContainer center={[27.5602, 85.31]} zoom={12} scrollWheelZoom={false}>
        <GeoJSON data={district.features} pathOptions={LalitpurStyle} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={layerurl}
        />
       
      </MapContainer>
    </div>
  );
};
