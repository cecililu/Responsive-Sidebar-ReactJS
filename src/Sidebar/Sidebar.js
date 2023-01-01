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
    <div className="sidebar-container ">
      <motion.div animate={{ width: sideBarOpen[1]?'500px':'30px'}} className="side-bar">
      <div
          className="text-white flex justify-end border-rounded cursor-pointer bg-indigo-900"
          onClick={handlerSideBarOpen}
        >
          <button className="bg-red-600 m-1 rounded-full hover:rounded-lg p-2 " >
            {sideBarOpen[0]}
          </button>
        </div>
        { sideBarOpen[1]?<>
        <div className="bg-indigo-900 text-sm text-white px-2 py-5" >
          <p className="pl-2">Lalitpur District Disaster Portal</p>
        </div>
        
        <div className="flex pt-3 px-3  ">
          {routes.map((index) => {
            return (
              <div
                key={index.name}
                className="p-7 mr-2  border-t-2 border-indigo-600 hover:bg-gray-300 hover:text-white cursor-pointer"
                onClick={index.handler}
              >
                <center>
                  <span>{index.icon}</span>
                </center>
                <p className="text-[12px] pt-1">{index.name}</p>
              </div>
            );
          })}
          <div className="ml-10 flex flex-col p-2">
            <span className="text-gray-700 text-[11px]">
              Date: 2022/2/3- 2022/4/3{" "}
            </span>
            <div className="text-gray-700 text-[11px] ">
              Source:{" "}
              <center>
                <div className="bg-red-700 text-white text-[11px] rounded-lg w-1/3">
                  {" "}
                  Live
                </div>
              </center>
            </div>
          </div>
        </div>

        <div className="p-0"> {selectedOption}</div>
        </>:null}
      </motion.div>
    </div>
  );
};
