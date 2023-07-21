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
      invalidatesTags: (_result, _error, arg) => ['books', { type: 'book', id: arg.bookId }],
      // invalidatesTags: ['book'],
    }),
    addBook: builder.mutation({
      query: (data: TFormData) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    getBook: builder.query({
      query: (bookId: string) => `/books/${bookId}`,
      // providesTags: ['reviews'],
      providesTags: (_result, _error, arg) => [
        { type: 'review', id: arg },
        { type: 'book', id: arg },
      ],
    }),
    deleteBook: builder.mutation({
      query: (bookId: string) => ({
        url: `/books/${bookId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useGetBookQuery,
  useGetYearGenreQuery,
  useUpdateBookMutation,
  useAddBookMutation,
  useDeleteBookMutation,
} = bookApiSlice;
