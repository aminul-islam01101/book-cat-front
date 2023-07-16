/* eslint-disable import/no-cycle */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import cartReducer from 'features/cart/cartSlice';

import { privateApiSlice, publicApiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [publicApiSlice.reducerPath]: publicApiSlice.reducer,
    [privateApiSlice.reducerPath]: privateApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([publicApiSlice.middleware, privateApiSlice.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
