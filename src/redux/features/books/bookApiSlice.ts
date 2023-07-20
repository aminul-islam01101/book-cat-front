import { FilterState } from '../filters/bookFilterSlice';

import { TFormData } from '@/pages/editBooks/EditBookForm';
import { privateApiSlice } from '@/redux/api/apiSlice';
import { TGenericResponse } from '@/types/authTypes';

export const bookApiSlice = privateApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (bookFilters: FilterState) => {
        const queryString = Object.entries(bookFilters)
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          .map(([key, value]) => `${key}=${value}`)
          .join('&');

        return `/books?${queryString}`;
      },
      providesTags: ['books'],
    }),
    getYearGenre: builder.query({
      query: () => `/books/year-genre`,
    }),
    updateBook: builder.mutation<TGenericResponse, { bookId: string; data: TFormData }>({
      query: ({ bookId, data }) => ({
        url: `/books/${bookId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => ['books', { type: 'book', id: arg.bookId }],
      // invalidatesTags: ['book'],
    }),
    addBook: builder.mutation({
      query: (data: TFormData) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => ['books'],
    }),
    getBook: builder.query({
      query: (bookId: string) => `/books/${bookId}`,
      // providesTags: ['reviews'],
      providesTags: (result, error, arg) => [
        { type: 'review', id: arg },
        { type: 'book', id: arg },
      ],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useGetBookQuery,
  useGetYearGenreQuery,
  useUpdateBookMutation,
  useAddBookMutation,
} = bookApiSlice;
