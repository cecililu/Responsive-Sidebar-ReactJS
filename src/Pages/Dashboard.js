
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
import  {Legend} from './Legend';

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
      <div className='static'>
    <div className='flex  '>
      
         <div >
          
       <Sidebar setresizer={setresizer} resizer={resizer}/>  
      {/*  */}
    
   {/*  */}
    
        {/*  */}
        </div>
        
      <div className="flex flex-col justify-center text-white w-24 bg-indigo-900 ">
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
      
       <MapContainer center={[27.540, 85.45]} zoom={12} scrollWheelZoom={false}  >
        <Legend/>
        <MainMap resizer={resizer}/>
        {/* <div className='absolute inline-block w-96 bottom-0 left-100 '>
        <div className='bg-indigo-900 text-white py-3 px-2'>Legend</div>
    <div className='text-xs flex m-2'>
      <p className='bg-black '>test</p>
      <span className='mx-2 '>LandSlide</span>
    </div>

    <div className='text-xs flex m-2'>
      <p className=' bg-red-600 text-red-600 '>test</p>
      <span className='mx-2 '>Fire</span>
    </div>

    <div className='text-xs flex m-2'>
      <p className='bg-blue-600 text-blue-600'>test</p>
      <span className='mx-2 '>Flood</span>
    </div>

    <div className='text-xs flex m-2'>
      <p className='bg-green-600 text-green-600'>test</p>
      <span className='mx-2 '>Other</span>
    </div>
   </div> */}
       </MapContainer>
       {/*  */}
      </div>
    </div>
   </div>
  )
}
