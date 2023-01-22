import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  AiFillAlert,
  AiFillSignal,
  AiFillEnvironment,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import "../App.css";
import { Alert } from "./Alert";
import { Chart } from "./Chart";
import { Event } from "./Event";

export const Sidebar = ({ children ,setresizer,resizer}) => {
  
  
  
  
  const [sideBarOpen, setsideBarOpen] = useState(
    [<AiOutlineDoubleLeft size={10} />,1]
  );
  console.log(sideBarOpen, "state now");
  const handlerSideBarOpen = () => {
    
    if(sideBarOpen[1]){
      setresizer('200vh')
   }else{
     setresizer('140vh')} 
    if (sideBarOpen[0].type == (<AiOutlineDoubleLeft size={10} />).type) {
      console.log("ran first check");
      setsideBarOpen([<AiOutlineDoubleRight size={10} />,0]);
      return;
    }
    if (sideBarOpen[0].type == (<AiOutlineDoubleRight size={10} />).type);
    {
      console.log("ran first check");
      setsideBarOpen([<AiOutlineDoubleLeft size={10} />,1]);
    }
  };
  const [selectedOption, setselectedOption] = useState(<Alert />);

  const handletoggleAlert = (event) => {
    setselectedOption(<Alert />);
  };
  const handletoggleChart = (event) => {
    setselectedOption(<Chart />);
  };

  const handletoggleEvent = (event) => {
    setselectedOption(<Event />);
  };
  const routes = [
    {
      name: "Alert",
      icon: <AiFillAlert />,
      handler: handletoggleAlert,
    },
    {
      name: "Events",
      icon: <AiFillEnvironment />,
      handler: handletoggleEvent,
    },
    ,
    {
      name: "Charts",
      icon: <AiFillSignal />,
      handler: handletoggleChart,
    },
  ];
  return (
    <div className="sidebar-container bg-gray-200">
      <motion.div animate={{ width: sideBarOpen[1]?'500px':'30px'}} className="side-bar">
        {!sideBarOpen[1]?<div
          className="text-white flex justify-end border-rounded cursor-pointer "
          onClick={handlerSideBarOpen}
        >
          <button className="bg-red-600 m-1 rounded-full hover:rounded-lg p-2 " >
            {sideBarOpen[0]}
          </button></div>:''}
        { sideBarOpen[1]?
        <>
          
        <div className="bg-indigo-900 text-sm text-white py-2  border-dotted border-r-2 border-white flex" >
          <center className="px-20"><p className=" pl-20  text-white text-xs text-semibold py-0 ">Lalitpur District Disaster Portal</p>
          </center>
        </div>
        <div
          className="text-white flex justify-end border-rounded cursor-pointer "
          onClick={handlerSideBarOpen}
        >
          <button className="bg-red-600 m-1 rounded-full hover:rounded-lg p-2 " >
            {sideBarOpen[0]}
          </button>
        </div>
           </>
        :''}
        {sideBarOpen[1]? children:''}
      </motion.div>
    </div>
  );
};
