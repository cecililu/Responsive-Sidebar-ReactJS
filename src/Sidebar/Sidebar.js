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

const routes = [
  {
    name: "Alert",
    icon: <AiFillAlert />,
  },
  {
    name: "Events",
    icon: <AiFillEnvironment />,
  },
  ,
  {
    name: "Charts",
    icon: <AiFillSignal />,
  },
];

export const Sidebar = ({ children }) => {
  const [sideBarOpen, setsideBarOpen] = useState(
    <AiOutlineDoubleLeft size={10} />
    
  );
  console.log(sideBarOpen,'state now')
  const handlerSideBarOpen = () => {
    // console.log(sideBarOpen,'side bar open')
    // console.log(<AiOutlineDoubleLeft size={10} />)
    // console.log('check',sideBarOpen.type==(<AiOutlineDoubleLeft size={10}/>).type)
    if (sideBarOpen.type ==(<AiOutlineDoubleLeft size={10} />).type) {
        console.log('ran first check')
      setsideBarOpen(<AiOutlineDoubleRight size={10} />);
      return
    }
     if (sideBarOpen .type== (<AiOutlineDoubleRight size={10} />).type);
    {
        console.log('ran second check')
      setsideBarOpen(<AiOutlineDoubleLeft size={10} />);
    }
  };

  return (
    <div className="sidebar-container">
      <motion.div animate={{ width: "500px" }} className="side-bar">
        <div className="bg-indigo-900 text-sm text-white px-2 py-3">
          <p className="pl-2">Lalitpur District Disaster Portal</p>
        </div>
        <div
          className="text-white flex justify-end border-rounded cursor-pointer"
          onClick={handlerSideBarOpen}
        >
          <button className="bg-red-600 m-1 rounded-full hover:rounded-lg p-2 ">

            {sideBarOpen}
          </button>
        </div>
        <div className="flex pt-3 px-3 border-t-2 border-b-2">
          {routes.map((index) => {
            return (
              <>
                <div className="p-5 mr-2  border-t-2 border-indigo-600 hover:bg-gray-400 hover:text-white cursor-pointer">
                  <center>
                    <span>{index.icon}</span>
                  </center>
                  <p className="text-[10px] pt-1">{index.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
