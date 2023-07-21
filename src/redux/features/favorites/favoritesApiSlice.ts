import { privateApiSlice } from '@/redux/api/apiSlice';
import { TGenericResponse } from '@/types/authTypes';
import { TFavorites } from '@/types/bookTypes';

export const reviewApiSlice = privateApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReader: builder.query({
      query: (email: string) => ({
        url: `/books/reader/${email}`,
      }),
      providesTags: ['reader'],
    }),
    manipulateFavorites: builder.mutation<TGenericResponse, { email: string; data: TFavorites }>({
      query: ({ email, data }) => ({
        url: `/books/favorite/${email}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reader'],
    }),
  }),
});
export const { useManipulateFavoritesMutation, useGetReaderQuery } = reviewApiSlice;
