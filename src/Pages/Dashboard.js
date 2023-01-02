
import { Sidebar } from '../Sidebar/Sidebar'
import { TileLayer, MapContainer, GeoJSON ,Marker,Popup} from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MainMap } from '../MapElements/MainMap';
import {
  AiFillAlert,
  AiFillSignal,
  AiFillEnvironment,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";

const routes = [
  {
    name: "Alert",
    icon: <AiFillAlert size={24} />,
  },
  {
    name: "Events",
    icon: <AiFillEnvironment size={24}/>,
  },
  ,
  {
    name: "Charts",
    icon: <AiFillSignal size={24}/>,
  },
];

export const Dashboard = () => {
    
    const [resizer, setresizer] = useState('142vh')
    const position = [51.505, -0.09]
    return (
    <div className='flex  '>
         <div>
       <Sidebar setresizer={setresizer} resizer={resizer}/>  
        </div>
   
      
      <div className="flex flex-col justify-center text-white w-24 bg-indigo-900  top-0 right-0">
      {routes.map((index) => {
            return (
              <center>
                <div key={index.name} className="p-5 border-b-2 bg-indigo-900 border-white-600 hover:bg-indigo-800 hover:text-white cursor-pointer">
                    <span>{index.icon}</span>
        
                  <p className="text-[10px] pt-1">{index.name}</p>
                </div>
                </center>
            );
          })}
      </div>
      <div>
       <MapContainer center={[27.5500, 85.31]} zoom={11} scrollWheelZoom={false}  >
        <MainMap resizer={resizer}/>
       </MapContainer>
      </div>
    </div>
   
  )
}
