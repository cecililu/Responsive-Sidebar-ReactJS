import React from 'react'

export const LiveData = () => {
    const data=[1,2,3,4,5]
  return (
    <div >
    <div className=" flex flex-col p-2 bg-gray-200 mt-9 py-5" >
            <div className="text-gray-700 text-[11px]">
              Date: 2022/2/3- 2022/4/3
            </div>
            <div className="text-gray-700 text-[11px] ">
              <span className='mr-3'>Source:</span>
              
                <p className=" inline px-2 bg-red-700 text-white text-[11px] rounded-lg w-1/3">
                  Live
                </p>
              
            </div>
          </div>
  <div className="flex flex-col mt-0">
  <div className="">
    <div className="py-2 inline-block min-w-full ">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
           {data.map(()=>{

            return ( <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Mark
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Otto
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @mdo
            </td>
          </tr>)
           })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
