import { FilterState } from '../filters/bookFilterSlice';

import { privateApiSlice } from '@/redux/api/apiSlice';

export const authApiSlice = privateApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (bookFilters: FilterState) => {
        const queryString = Object.entries(bookFilters)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&');

        return `/books?${queryString}`;
      },
    }),
    getYearGenre: builder.query({
      query: () => `/books/year-genre`,
    }),
    getBook: builder.query({
      query: (bookId: string) => `/books/${bookId}`,
      providesTags: ['reviews'],
    }),
  }),
});
export const { useGetBooksQuery, useGetBookQuery, useGetYearGenreQuery } = authApiSlice;
