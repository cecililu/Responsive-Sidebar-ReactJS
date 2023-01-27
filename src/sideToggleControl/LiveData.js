import React, { useEffect, useState } from 'react'

export const LiveData = () => {
  
  const [data,setdata]= useState([])
  const [data2,setdata2]= useState([])
  const getdata=async()=>{
        const data=await fetch('https://bipadportal.gov.np/api/v1/pollution-stations/?name=&created_on__lt=&created_on__gt=&date_time__lt=&date_time__gt=&ward=&municipality=25004&district=&province=')
        const res=await data.json()
        
        const data2=await fetch('https://bipadportal.gov.np/api/v1/river-stations/?status__iexact=&water_level__gt=&water_level__lt=&water_level_on__gt=&water_level_on__lt=&title=&station_series_id=&ward=&municipality=25004&district=28&province=')
        const res2=await data2.json()
        setdata(res.results)
        setdata2(res2.results)

      }
        
      useEffect(()=>{
        getdata()
      }
      ,[])
 console.log('this is ddataasddd',data2)


  return (
    <div >
   
    {/* <div className=" flex flex-col p-2 bg-gray-200 mb-1" >
            <div className="text-gray-700 text-[12px] px-10 ">
              <span className='mr-1 text-[10px]'>Source</span>
                <p className="inline px-1 py-1 bg-red-600 text-white text-[9px] rounded-lg w-1/3">
                  Live
                </p>
              
            </div>
          </div> */}
  <center className='text-[12px] py-4'>Pollution Live Data</center>
  <div className="flex flex-col mt-0">
  <div className="">
    <div className="py-0 inline-block min-w-full ">
      <div className="overflow-hidden bg-white">
          <div className="bg-gray-100 border-b">
          <div className="w-full bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 flex justify-evenly">
              <div className="font-bold text-[11px] text-black font-light px-6 py-4 ">
                ID
              </div>
              
              <div className="font-bold text-[11px] text-bold text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Station
              </div>
              
              <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Nepali Name
              </div>
              
              <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Data Source
              </div>
              
            </div>
          </div>
          <tbody className=''>
           {data.map((instance)=>{

            return ( 
              <div className=' border-b-2 border-gray-300'>
            <div className="pl-3 w-full  transition duration-300 ease-in-out bg-white flex justify-evenly">
              <div className="text-[12px] text-gray-900 font-light px-8 py-4 whitespace-nowrap">
                {instance.id} 
              </div>

              <div className="text-[12px] text-gray-900 font-light px-10 py-4 whitespace-nowra">
                {instance.name} Station
              </div>

              <div className="text-[12px] text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                {instance.nepaliName?instance.nepaliName:'............'}
              </div>
              
              <div className="text-[12px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {instance.dataSource}
              </div>
              
              
            </div>


              <div className='pl-12 py-2 text-[12px] text-red-400 bg-white '>
                 {instance.description}
              </div>
              <div className='px-9 pt-3 text-[10px] text-gray-400 bg-gray-100 flex justify-end  mb-6  bg-white'>
                 {instance.modifiedOn}
              </div>
              
            </div>
            )

           })}
          
          </tbody>
        
      </div>
    </div>
  </div>
</div>
<center className='text-[12px] '>River Live Data</center>
  <div className="flex flex-col mt-0">
  <div className="">
    <div className="py-0 inline-block min-w-full ">
      <div className="overflow-hidden bg-white">
          <div className="bg-gray-100 border-b">
          <div className="w-full bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 flex justify-evenly">
              <div className="font-bold text-[11px] text-black font-light px-6 py-4 ">
                ID
              </div>
              
              <div className="font-bold text-[11px] text-bold text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Station at
              </div>
              
              <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Warning Level
              </div>
              
              <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Danger Level
              </div>
              
            </div>
          </div>
          <tbody className=''>
           {data2.map((instance)=>{

            return ( 
              <div className='  border-b-2 border-gray-300'>
            <div className="w-full   transition duration-300 ease-in-out bg-white flex justify-evenly pl-4">
              <div className="text-[12px] text-gray-900 font-light px-8 py-4 whitespace-nowrap ">
                {instance.id} 
              </div>

              <div className="text-[12px] text-gray-900 font-light px-5 py-4 whitespace-nowra">
                {instance.title} 
              </div>

              <div className="text-[12px] text-gray-900 font-light px-5 py-4 whitespace-nowrap pl-10 pr-10">
                {instance.warningLevel?instance.warningLevel:'............'}
              </div>
              
              <div className="text-[12px] text-gray-900 font-light px-6 py-4 whitespace-nowrap pl-10 pr-10">
                {instance.dangerLevel}
              </div>
              
              
            </div>


              <div className='pl-12 py-2 text-[12px] text-red-400 bg-white '>
                 {instance.description}
              </div>
              <div className='px-9 py-3 text-[10px] text-gray-400 bg-gray-100 flex justify-end pb-5 mb-6  bg-white'>
                 {instance.modifiedOn}
              </div>
              
            </div>
            )

           })}
          
          </tbody>
        
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
