import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'teal',
  'blue',
  'purple',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};




export const Graph = () => {
    const [chartData, setchartData] = useState({
        datasets: []
      });
    
  const chartRef = useRef(null);
  
  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        borderColor: 'red',
      })),
    };

    setchartData(chartData);
  }, []);

  return (<div className='mt-10'>
     <div className=" flex flex-col p-2 bg-gray-100 mt-9 py-5" >
            <div className="text-gray-700 text-[11px]">
              Date: 2022/2/3- 2022/4/3
            </div>
            <div className="text-gray-700 text-[11px] ">
              <span className='mr-3'>Source:</span>
              
                <p className=" inline px-2 pb-1 bg-red-700 text-white text-[11px] rounded-lg w-1/3">
                  As of Today
                </p>
              
            </div>
          </div>
  <div className="bg-indigo-900 text-sm text-white py-1 flex justify-center">
            Data of the Occurance of event
          </div>

  <div className='p-7 bg-gray-100'><Chart ref={chartRef} type='line' data={chartData} />
  </div></div>);
}
