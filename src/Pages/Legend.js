import React from 'react'
import L from "leaflet";
import { useMap } from 'react-leaflet';
export const Legend = () => {
const map = useMap();  
  const addL=()=>{
    var legend = L.control({ position: "topleft" });
    legend.onAdd = function(map) {
    var div = L.DomUtil.create("div", 'bg-white ');
    div.innerHTML += "<h4 class='bg-indigo-900 text-white py-3 px-2 w-96'>Legend</h4>";
    div.innerHTML += "<div class='text-xs flex m-2'><p class='mr-2 bg-red-600 text-red-600 '>test</p><span className='mx-2 '>Fire</span></div>";
    div.innerHTML += "<div class='text-xs flex m-2'><p class='mr-2 bg-blue-600 text-blue-600'>test</p><span className='mx-2 '>Flood</span></div>"
    div.innerHTML += "<div class='text-xs flex m-2'><p class='mr-2 bg-green-600 text-green-600'>test</p><span className='mx-2 '>Other</span></div>"
    return div;
  };
  legend.addTo(map);
  };
  addL()
  console.log(map,'map form Legend')
  return (
    <div></div>
  )
}
