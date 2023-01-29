import { configureStore } from '@reduxjs/toolkit';
import  LiveSliceReducer  from '../sideToggleControl/LiveDataSlice';
import componentSliceReducer from "../Pages/alsice"

const store = configureStore({
  
  reducer:{
    live:LiveSliceReducer,
    component: componentSliceReducer
  }

});
export default store;
