import { privateApiSlice } from '@/redux/api/apiSlice';
import { TGenericResponse } from '@/types/authTypes';
import { TReviewData } from '@/types/reviewTypes';

export const reviewApiSlice = privateApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation<TGenericResponse, { bookId: string; data: TReviewData }>({
      query: ({ bookId, data }) => ({
        url: `/books/review/${bookId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: 'review', id: arg.bookId }],
      // invalidatesTags: (result, error, arg) => [{ type: 'review', id: arg }, 'book']
    }),
  }),
});
export const { useAddReviewMutation } = reviewApiSlice;
