import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

import { useAddReviewMutation } from '@/redux/features/reviews/reviewApiSlice';
import { useAppSelector } from '@/redux/hooks';
import { TErrorData } from '@/types/globalTypes';
import { TReviewMessage, reviewSchema } from '@/types/reviewTypes';

const ReviewForm = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.auth);
  const [addReview, options] = useAddReviewMutation();
  const { isLoading, isSuccess, isError, error } = options;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TReviewMessage>({ resolver: zodResolver(reviewSchema), mode: 'onChange' });

  const onSubmit: SubmitHandler<TReviewMessage> = async (bodyData): Promise<void> => {
    const data = {
      ...bodyData,
      reviewer: user?.firstName && user?.lastName ? `${user?.firstName} ${user?.lastName}` : '',
      profileImage: user?.profileImage,
      email: user?.email as string,
    };
    const bookId = id as string;
    await addReview({ bookId, data });
  };
  useEffect(() => {
    if (isSuccess) {
      reset();

      toast.success('Review added successfully');
    }
    if (isError) {
      if (error) {
        if ('status' in error) {
          if ('error' in error) {
            toast.error('An error occurred');
          } else {
            const errMsg = error.data as TErrorData;
            toast.error(errMsg.errorName);
          }
        }
      } else {
        // you can access all properties of `SerializedError` here
        toast.error('An error occurred');
      }
    }
  }, [isSuccess, reset, error, isError, options.data]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <textarea
            className={`w-full p-2 border rounded ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={4}
            placeholder="Write your review..."
            {...register('description', { required: true, minLength: 4 })}
          />
          {errors.description && (
            <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
        {user?.email ? (
          <div className="grid place-items-end">
            {' '}
            <button
              type="submit"
              className="  mt-2 py-3 px-10 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none  items-center gap-4 "
            >
              Submit
              {isLoading && (
                <span className="w-5 h-5 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
              )}
            </button>
          </div>
        ) : (
          <div className="grid place-items-end">
            {' '}
            <Link
              to="/login"
              type="submit"
              className="  mt-2 py-3 px-10 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none  items-center gap-4 "
            >
              Submit
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
