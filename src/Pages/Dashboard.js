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
import {RiInformationFill, RiProfileLine} from 'react-icons/ri'
import {GoReport} from 'react-icons/go'
import  Legend  from "./Legend";
import { General } from "../sideToggleControl/General";
import { LiveData } from "../sideToggleControl/LiveData";

import { Report } from "../sideToggleControl/Report";
import { Login } from "../sideToggleControl/Login";
import { WebService } from "../sideToggleControl/WebService";
import { Profile } from "../sideToggleControl/Profile";
import { Graph } from "../sideToggleControl/Graph";
import { InformationModeule } from "../sideToggleControl/InformationModeule";



export const Dashboard = () => {
  const [selectedMainOption, setselectedMainOption] = useState(<General/>);
  const handleDashboard=()=>{
    console.log("Clicked")
    setselectedMainOption(<General/>)
  }
  const handleLiveData=()=>{
    console.log("Clicked")
    setselectedMainOption(<LiveData/>)
  }
  const handleCharts=()=>{
    console.log("Clicked")
    setselectedMainOption(<Graph/>)
  }
  const handleReport=()=>{
    console.log("Clicked")
    setselectedMainOption(<Report/>)
  }
  const handleLogin=()=>{
    console.log("Clicked")
    setselectedMainOption(<Login/>)
  }
  
  const handleProfile=()=>{
    console.log("Clicked")
    setselectedMainOption(<Profile/>)
  }
  const handleWebServices=()=>{
    console.log("Clicked")
    setselectedMainOption(<WebService/>)
  }
  const handleInfoModule=()=>{
    setselectedMainOption(<InformationModeule/>)
  }
  
const routes = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard size={19} />,
    handleClick:handleDashboard
  },
  {
    name: "Live Data",
    icon: <MdCellWifi size={19} />,
    handleClick:handleLiveData
  },
  ,
  {
    name: "Charts",
    icon: <AiFillSignal size={19} />,
    handleClick:handleCharts
  },
  {
    name: "Report an event",
    icon: <GoReport size={19} />,
    handleClick:handleReport
  },
  {
     name: "Login",
     icon: <AiOutlineLogin size={19} />,
     handleClick:handleLogin
  },
  {
    name: "Profile",
    icon: <RiProfileLine size={19} />,
    handleClick:handleProfile
 },
 {
  name: "Web Services",
  icon: <RiProfileLine size={19} />,
  handleClick:handleWebServices
},
{
  name: "Information",
  icon: <RiInformationFill size={19} />,
  handleClick: handleInfoModule
},
];
  
  const [resizer, setresizer] = useState("142vh");
  
  // const mapRef = useRef();
  
  // useEffect(() => {
  //   console.log("dashboard map ref",mapRef.current);
  // }, [mapRef]);
  
  return (
    <div className="static bg-gray-100">
      <div className="flex  ">
        <div>
          <Sidebar setresizer={setresizer} resizer={resizer} >
            {selectedMainOption}
          </Sidebar>
        </div>

        <div className="flex flex-col justify-center text-white  bg-indigo-900 ">
          {routes.map((index) => {
            return (
              <center>
                <div
                  key={index.name}
                  className="p-1 border-b-2 bg-indigo-900 border-white-600 hover:bg-indigo-800 hover:text-white cursor-pointer"
                onClick={index.handleClick}>
                 
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
  )
        }
        