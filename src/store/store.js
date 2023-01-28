import { configureStore } from '@reduxjs/toolkit';
import  LiveSliceReducer  from '../sideToggleControl/LiveDataSlice';

const store = configureStore({
  reducer:{
    live:LiveSliceReducer
  }

});
export default store;
