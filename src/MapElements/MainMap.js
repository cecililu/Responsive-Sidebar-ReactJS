import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import district from "./LalitpurGEOJSON.json";
// import '../App.css'

export const MainMap = ({resizer}) => {
  const [first, setfirst] = useState(resizer)
  console.log('width',resizer)
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
      <MapContainer center={[27.5500, 85.31]} zoom={12} scrollWheelZoom={false}  style={{width:'192vh',height:'100vh'}}>
        <GeoJSON data={district.features} pathOptions={LalitpurStyle} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={layerurl}
        />
       
      </MapContainer>
    </div>
  );}
  