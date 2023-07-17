import { setUser } from './authSlice';

import { privateApiSlice } from '@/redux/api/apiSlice';
import { TGenericResponse, TLogin, TLoginResponse, TSignUp } from '@/types/authTypes';

export const authApiSlice = privateApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMeP: builder.query({
      query() {
        return {
          url: 'auth/me',
          providesTags: [],
        };
      },
      transformResponse: (result: TGenericResponse) => result.data,
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const response = result?.data;
          dispatch(setUser(response as TLoginResponse));
        } catch (error) {
          // do nothing
        }
      },
    }),
    signUp: builder.mutation({
      query: (data: TSignUp) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [],
    }),
    login: builder.mutation({
      query: (data: TLogin) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          const response = result?.data as TGenericResponse;
          dispatch(setUser(response?.data as TLoginResponse));
        } catch (err) {
          // do nothing
        }
      },
    }),
    logOut: builder.mutation<TGenericResponse, void>({
      query() {
        return {
          url: '/auth/logout',
          method: 'POST',
          credentials: 'include',
        };
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const response = result?.data;

          if (response.statusCode === 200) {
            dispatch(setUser(undefined));
          }
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation, useGetMePQuery, useLogOutMutation } =
  authApiSlice;
