import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setComponent } from './alsice';


export const Comp1 = () => {
  return (
    <div>Comp1 redenre</div>
  )
}

export const Comp2 = () => {
  return (
    <div>Comp2 rendered</div>
  )
}

export const MainPage = () => {
  const component = useSelector(state => state.component);


  const [Comp,setcomp]=useState('no')
  const dispatch = useDispatch();
  
  console.log(component)
  console.log(Comp)
  useEffect(()=>{
    console.log('useeffect')
    if (Comp=='Comp1'){
      setComponent(<Comp1/>)
    }
    if (Comp=='Comp2'){
      setComponent(<Comp2/>)
    }
  },[])

  const handleClick = (e) => {
    const { target: { id } } = e;
    dispatch(setComponent(id));
  }

  return (
    <>    <div className='flex'>
      Main page----
      <button id='Comp1' onClick={handleClick}>Render Comp1</button>
      <button id='Comp2' onClick={handleClick}>Render Comp2</button>
    
    </div>
    *{component}*
    {Comp}
    </>

  )
}