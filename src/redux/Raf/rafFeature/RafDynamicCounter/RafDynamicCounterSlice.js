/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { increment } from '../RafCounter/RafCounterSlice';

// initial state
const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: 'dynamicCounter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) => {
    // if need to access other reducers action
    builder.addCase(increment, (state, action) => {
      state.count += 1;
    });
    // if need any other async work like api handling
    // but we will handle api using rtk query
    // if any other async work then we can use this like firebase auth or any async work
    // here is some example of async actions
    // see exmple of video slice
  },
});
export const { increment: incrementDynamicCounter, decrement: decrementDynamicCounter } =
  dynamicCounterSlice.actions;

export default dynamicCounterSlice.reducer;
