import { Sidebar } from "../Sidebar/Sidebar";
import {
  TileLayer,
  MapContainer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import React, { useState, useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MainMap } from "../MapElements/MainMap";

import L from "leaflet";
import {
  AiFillAlert,
  AiFillSignal,
  AiFillEnvironment,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { Legend } from "./Legend";

const routes = [
  {
    name: "Alert",
    icon: <AiFillAlert size={24} />,
  },
  {
    name: "Events",
    icon: <AiFillEnvironment size={24} />,
  },
  ,
  {
    name: "Charts",
    icon: <AiFillSignal size={24} />,
  },
];

export const Dashboard = () => {
  const [resizer, setresizer] = useState("142vh");

  // const mapRef = useRef();
  
  // useEffect(() => {
  //   console.log("dashboard map ref",mapRef.current);
  // }, [mapRef]);
  
  return (
    <div className="static">
      <div className="flex  ">
        <div>
          <Sidebar setresizer={setresizer} resizer={resizer} />
        </div>

        <div className="flex flex-col justify-center text-white w-24 bg-indigo-900 ">
          {routes.map((index) => {
            return (
              <center>
                <div
                  key={index.name}
                  className="p-5 border-b-2 bg-indigo-900 border-white-600 hover:bg-indigo-800 hover:text-white cursor-pointer"
                >
                  <span>{index.icon}</span>
                  <p className="text-[10px] pt-1">{index.name}</p>
                </div>
              </center>
            );
          })}
        </div>
        <div>
          <MapContainer
           
            center={[27.54, 85.45]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <Legend />
            <MainMap resizer={resizer} />
          
          </MapContainer>
          {/*  */}
        </div>
      </div>
    </div>
  );
};
