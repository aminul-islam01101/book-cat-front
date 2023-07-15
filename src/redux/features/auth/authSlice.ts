/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TLoginResponse } from '@/types/authTypes';

type TUserState = {
  user: TLoginResponse | null;
};

const initialState: TUserState = { user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TLoginResponse | null>) => {
      state.user = action.payload;
    },
    logOut: () => initialState,
  },
});
export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

// export const selectAppUser = (state: RootState) => state.auth.user;
// export const { user: appUser } = store.getState().auth;
