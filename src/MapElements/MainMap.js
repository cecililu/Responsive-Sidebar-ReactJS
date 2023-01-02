import { AiFillFire } from "react-icons/ai";
import {BiAlarm} from "react-icons/bi";
import {
  TileLayer,
  MapContainer,
  GeoJSON,
  Marker,
  useMap,
  Popup,
} from "react-leaflet";
import React, { useState, useRef, useEffect, useCallback } from "react";
import "leaflet/dist/leaflet.css";
import useSupercluster from "use-supercluster";
import district from "./LalitpurGEOJSON.json";
import L from "leaflet";
import fire from "./fire.png";

var greenIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var blueIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var blackIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const getIcon=(type)=>{
  switch (type){
    case 'Flood':
      return blueIcon;
    case 'Fire':
      return redIcon
    case 'LandSlide':
      return blackIcon
    case 'Other':
      return greenIcon
    default:
      return greenIcon
  }
}

export const MainMap = ({ resizer }) => {
  const icons = {};

  const fetchIcons = (count, size) => {
    if (!icons[count]) {
      icons[count] = L.divIcon({
        html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
          ${count}
        </div>`,
      });
    }
    return icons[count];
  };

  const layerurl =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png";

  const LalitpurStyle = {
    fillColor: "red",
    fillOpacity: 0,
    color: "blue",
    weight: 1,
  };

  const [bounds, setBounds] = useState(null);
  const map = useMap();

  function updateMap() {
    console.log("Updating");
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);

    setzoom(map.getZoom());
  }
  const onMove = useCallback(() => {
    updateMap();
  }, [map]);
  useEffect(() => {
    updateMap();
  }, [map]);
  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  useEffect(() => {});

  const [zoom, setzoom] = useState(12);
  
  //get this from the server
  const events = [
    [27.55001, 85.31,'Landslide'],
    [27.55902, 85.3,'Fire'],
    [27.55, 85.32,'Flood'],
    [27.55403, 85.31,'Others'],
    [27.45, 85.33,'Others'],
    [27.4521, 85.3312,'Others'],
    [27.503, 85.33,'Fire'],
    [27.503, 85.333,'Flood'],
  ];
  const maxZoom = 22;
  const points = events.map((ev) => {
    return {
      type: "Feature",
      properties: {
        cluster: false,
        crimeId: ev[0],
        category: ev[2],
      },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(ev[1]), parseFloat(ev[0])],
      },
    };
  });

 const { clusters, supercluster }=useSupercluster({
  points,
  bounds,
  zoom,
  options: {radius:75,maxZoom:17}
 })
 console.log(clusters)
  return (
    <>
      <GeoJSON data={district.features} pathOptions={LalitpurStyle} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={layerurl}
      />
         {clusters.map((cluster) => {
        // every cluster point has coordinates
        const [longitude, latitude] = cluster.geometry.coordinates;
        // the point may be either a cluster or a crime point
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        // we have a cluster to render
        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcons(
                pointCount,
                10 + (pointCount / points.length) * 40
              )}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    maxZoom
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                },
              }}
            />
          );
        }

        // we have a single point (crime) to render
        return (
          <Marker
            key={`disaster-${cluster.properties.crimeId}`}
            position={[latitude, longitude]}
            icon={getIcon(cluster.properties.category)}
          >
            <Popup>
              <div class="">
                <div class="bg-indigo-700 text-white text-md border-gray-200 border-t-2 pt-3 "><center><h1>{cluster.properties.category}</h1></center><br/></div>
                
                <div class="text-black-900 text-sm mt-3">Fire in the forest of Godawari</div>
                <div className="border-gray-200 border-b-2 p-3 hover:bg-gray-200 py-4">
                 <div className="text-md font-medium flex flex-row  ">
              <div className="text-red-700 text-sm flex flex-col  border-indigo-300 border-r-2 pr-4">
                 <span className="px-2"> <AiFillFire size={30} /></span>
                <p className="text-xs pl-3">Fire</p>
              </div>
              <span className="font-normal ml-5 pt-1 text-sm">
              <div className="font-semibold "> Kyonjan Municipality</div>
              <div>
              <div className="text-xs  text-gray-500 flex justify-start ">
              <span className="">2023/1/23</span>
              <div className="flex items-center px-2">
                <span>
                  <BiAlarm />
                </span>
                <span className="pl-1">4:55</span>
              </div>
            </div>
              </div>
                
              </span>
              
            </div>
            
           
          </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    
    </>
  );
};
