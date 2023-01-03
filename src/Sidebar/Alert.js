import React from "react";
import { BiAlarm } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
const data = [
  {
    ward: "Ward 1",
    municipality: "Lalitpur Metropolitan city",
    type: "Forest Fire",
    date: "2022/01/23",
    time: "5:30",
  },
  {
    ward: "Ward 2",
    municipality: "Godawari Municpiapality",
    type: "Forest Fire",
    date: "2022/01/23",
    time: "5:30",
  },
  {
    ward: "Ward 3",
    municipality: "Kyonjon  Municpiapality",
    type: "Forest Fire",
    date: "2022/01/23",
    time: "5:30",
  },
];
export const Alert = () => {
  return (
    <div className="bg-gray-100  border-t-2 mt-4">
      {data.map((ind) => {
        return (
          <div className="border-gray-200 border-b-2 p-3 hover:bg-gray-200 py-4">
            <div className="text-md font-medium flex flex-row ">
              <div className="text-red-700 text-sm flex flex-col">
                 <span className="px-2"> <AiFillFire size={30} /></span>
                <p className="text-xs">{ind.type}</p>
              </div>
              <span className="font-normal ml-5 pt-1 text-sm">
              <div className="font-semibold"> {ind.municipality}</div>
              <div>
              <div className="text-xs  text-gray-500 flex justify-start ">
              <span className="">{ind.date}</span>
              <div className="flex items-center px-2">
                <span>
                  <BiAlarm />
                </span>
                <span className="pl-1">{ind.time}</span>
              </div>
            </div>
              </div>
                
              </span>
              
            </div>
            
            {/* <div className="text-xs text-gray-500 flex justify-end ">
              <span className="px-2">{ind.date}</span>
              <div className="flex items-center px-2">
                <span>
                  <BiAlarm />
                </span>
                <span className="pl-1">{ind.time}</span>
              </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
