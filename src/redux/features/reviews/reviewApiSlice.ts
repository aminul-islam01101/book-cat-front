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
      invalidatesTags: ['reviews'],
    }),
  }),
});
export const { useAddReviewMutation } = reviewApiSlice;
