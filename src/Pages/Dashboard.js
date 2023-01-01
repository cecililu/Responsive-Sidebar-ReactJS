
import { Sidebar } from '../Sidebar/Sidebar'
import { TileLayer, MapContainer, GeoJSON ,Marker,Popup} from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MainMap } from '../MapElements/MainMap';



export const Dashboard = () => {
    
    const position = [51.505, -0.09]
    return (
    <div className='flex'>
         <div>
       <Sidebar/>
       
    </div>
   
    <div>
      <MainMap/>
    </div>
    </div>
   
  )
}
