/* eslint-disable import/no-cycle */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import bookFilterReducer from 'features/filters/bookFilterSlice';

import { privateApiSlice, publicApiSlice } from './api/apiSlice';

import cartReducer from '@/redux/features/books/bookSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    bookFilters: bookFilterReducer,
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
