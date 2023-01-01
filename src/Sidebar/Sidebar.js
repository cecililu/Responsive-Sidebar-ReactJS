import { motion } from "framer-motion";
import React from "react";
import { AiFillAlert, AiFillSignal } from "react-icons/ai";
import "../App.css";

const routes = [
  {
    name: "Alert",
    icon: <AiFillAlert />,
  },
  {
    name: "Charts",
    icon: <AiFillSignal />,
  },
];

export const Sidebar = ({ children }) => {
  return (
    <div className="sidebar-container">
      <motion.div animate={{ width: "500px" }} className="side-bar">
        <div className="flex p-2 border">
          {routes.map((index) => {
            return (
              <>
                <div className="p-2 mr-5 ">
                  <span>{index.icon}</span>
                  <p className="text-xs">{index.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
