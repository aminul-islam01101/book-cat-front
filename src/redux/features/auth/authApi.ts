import { api } from '@/redux/api/apiSlice';
import { TLogin, TSignUp } from '@/types/authTypes';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //   query: () => '/products',
    // }),
    // singleProduct: builder.query({
    //   query: (id) => `/product/${id}`,
    // }),
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
      invalidatesTags: [],
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ['comments'],
    // }),
  }),
});
export const { useSignUpMutation, useLoginMutation } = authApi;
