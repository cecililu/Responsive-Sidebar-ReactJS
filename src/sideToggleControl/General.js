
import React, { useState } from "react";

import {
  AiFillAlert,
  AiFillSignal,
  AiFillEnvironment,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";

import "../App.css";
import { Alert } from "../Sidebar/Alert";
import { Chart } from "../Sidebar/Chart";
import { Event } from "../Sidebar/Event";




export const General = () => {
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
    <div className="">
  <div className="flex pt-10 mt-10 pl-3 bg-gray-200 ">
    
  {routes.map((index) => {
            return (
              <div
                key={index.name}
                className="p-5 mr-2  border-t-2 border-indigo-600 hover:bg-gray-300 hover:text-white cursor-pointer"
                onClick={index.handler}
              >
                <center>
                  <span>{index.icon}</span>
                </center>
                <p className="text-[12px] pt-1">{index.name}</p>
              </div>
            );
          })}    
            <div className=" flex flex-col p-2">
            <span className="text-gray-700 text-[11px]">
              Date: 2022/2/3- 2022/4/3
            </span>
            <div className="text-gray-700 text-[11px] ">
              Source:{" "}
              <center>
                <div className="bg-red-700 text-white text-[11px] rounded-lg w-1/3">
                  Live
                </div>
              </center>
            </div>
          </div>
           
          <div>
            
          </div>
       
 </div>
  {selectedOption}
  
 </div>
  )
}
