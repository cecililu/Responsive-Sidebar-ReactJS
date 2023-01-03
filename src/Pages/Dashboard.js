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
  AiFillSignal,AiOutlineLogin,
  AiFillEnvironment,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import {MdSpaceDashboard,MdCellWifi} from 'react-icons/md'
import {RiProfileLine} from 'react-icons/ri'
import {GoReport} from 'react-icons/go'
import { Legend } from "./Legend";

const handleDashboard=()=>{}
const handleLiveData=()=>{}
const handleCharts=()=>{}
const handleReport=()=>{}
const handleLogin=()=>{}
const handleProfile=()=>{}
const handleWebServices=()=>{}

const routes = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard size={19} />,
  },
  {
    name: "Live Data",
    icon: <MdCellWifi size={19} />,
  },
  ,
  {
    name: "Charts",
    icon: <AiFillSignal size={19} />,
  },
  {
    name: "Report an event",
    icon: <GoReport size={19} />,
  },
  {
     name: "Login",
     icon: <AiOutlineLogin size={19} />,
  },
  {
    name: "Profile",
    icon: <RiProfileLine size={19} />,
 },
 {
  name: "Web Services",
  icon: <RiProfileLine size={19} />,
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

        <div className="flex flex-col justify-center text-white  bg-indigo-900 ">
          {routes.map((index) => {
            return (
              <center>
                <div
                  key={index.name}
                  className="p-2 border-b-2 bg-indigo-900 border-white-600 hover:bg-indigo-800 hover:text-white cursor-pointer"
                onClick={routes.handleClick}>
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
