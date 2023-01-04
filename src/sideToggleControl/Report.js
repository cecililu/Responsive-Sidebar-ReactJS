import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';

export const Report = ({}) => 
 {  
    const latlng={
        lat:23.4,
        lng:85.99
    }
    // console.log(latlng.lat)
   const [type, settype] = useState([])
   const [rating, setrating] = useState([])
   console.log('rating adn type',type,rating)
   
//    const getRatingandType=async()=>{
//       let rating=await fetch("http://127.0.0.1:8000/api/disaster/v1/ratings/")
//       rating= await rating.json()
//       let type=await fetch("http://127.0.0.1:8000/api/disaster/v1/type/")
//       type=await type.json()
//       settype(type)
//       setrating(rating)
//     }

//    useEffect(()=>{
//       getRatingandType()
//    },[])
  return (
    <div className='bg-gray-100  h-screen pt-2 mt-9'>
       <center className='pt-2'>
        <span className='text-indigo-900 text-xl '>Report a disaster data</span>
      </center> 
        
    <div class="px-8"> 
    <div class="mt-5">
    <Formik
       initialValues={{ disaster: '', Comment: '',address:'',type:'',rating:'' }}
       onSubmit={async(value)=>{
         const send={
          ...value,
          lat: latlng.lat,
          long:latlng.lng ,
         }
         
        console.log('send value_____',send,JSON.stringify(send))
        
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(send)
      };
       const data=await fetch('http://127.0.0.1:8000/api/disaster/v1/geoapi/', requestOptions)
       if(data,data.ok){
    //    setcount(1)
      }
       }}
       >
    {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
        
         /* and other goodies */
       }) => (
    <form>
    <label for="exampleFormControlInput1" className="form-label inline-block mb-1 text-sm text-indigo-900" >Disaster</label>
    <input type="text"
      className="
        text-xs
        mb-2
        form-control
        block
        w-full
        px-2
        py-1.5
        text-xs
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-700 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Describe a Disaster"
      name='disaster'
      value={values.disaster}
      onChange={handleChange}
    />
    
    <label for="exampleFormControlInput1" className="form-label inline-block mb-1 text-sm text-indigo-900" >Address</label>
    <input type="text"
      class="
      text-xs
      mb-2
      form-control
      block
      w-full
      px-2
      py-1.5
      text-xs
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-indigo-700 focus:outline-none
    "
      id="exampleFormControlInput1"
      name='address'
      value={values.address}
      placeholder="Enter the address"
      onChange={handleChange}
    />

<label for="exampleFormControlInput2" className="form-label inline-block mb-1 text-sm text-indigo-900" >Latitude</label>
    <input type="text"
      className="
      text-xs
        mb-2
        form-control
        block
        w-full
        px-2
        py-1.5
        text-xs
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-700 focus:outline-none
         "
      id="exampleFormControlInput2"
      placeholder="Enter Laltitude"
      name='lat'
      value={latlng.lat}
      onChange={handleChange}
    />

<label for="exampleFormControlInput1" className="form-label inline-block mb-1 text-sm text-indigo-900" >Longitude</label>
    <input type="text"
      className="
      text-xs
      mb-2
      form-control
      block
      w-full
      px-2
      py-1.5
      text-xs
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-indigo-700 focus:outline-none
     "
      id="exampleFormControlInput1"
      placeholder="Enter the longitude"
      name='long'
      value={latlng.lng}
      onChange={handleChange}
    />
    <label for="exampleFormControlInput1" className="form-label inline-block mb-1 text-sm text-indigo-900" >Comment</label>
    <input type="text"
      className=" text-xs
      h-20
      mb-5
      form-control
      block
      w-full
      px-2
      
      text-xs
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-indigo-700 focus:outline-none
   "
      id="exampleFormControlInput1"
      placeholder="Add a comment"
      name='Comment'
      value={values.Comment}
      onChange={handleChange}
    />
     {/* <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 " >Ratings</label>
     <select
        className='text-black mb-3 mb-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        id="exampleFormControlInput1"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: "block" }}
      > 
      <option value="" label="Select Rating">
          Select a rating{" "}
        </option>
       {rating?  
       
      rating.map((item)=>{
         return (
          <option value={item.rating} label={item.rating}>
          {item.rating}
        </option>
        );
       }):''}
      </select>
    <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 " >Type</label>
    <select
        className='text-black mb-3 mb-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        id="exampleFormControlInput1"
        name="type"
        value={values.type}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: "block" }}
      > 
      <option value="" label="Select Rating">
          Select a rating{" "}
        </option>
       {type?  
       
      type.map((item)=>{
         return (
          <option value={item.name} label={item.name}>
          {item.rating}
        </option>
        );
       }):''}
      </select> */}
    
    <div className='flex justify-center mt-6'>
    <button class="bg-indigo-900 hover:bg-indigo-700 text-white py-1 px-4 rounded-lg " type='submit' onClick={handleSubmit}> Add data</button>
    </div>
    </form>
       )}
    </Formik>
  </div>
</div>
</div>
  )
}