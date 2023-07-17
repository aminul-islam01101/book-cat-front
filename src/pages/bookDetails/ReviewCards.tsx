import moment from 'moment';
import React from 'react';

import { TReview } from '@/types/bookTypes';

type ReviewCardProps = {
  reviews: TReview[] | [];
};

const ReviewCards: React.FC<ReviewCardProps> = ({ reviews }) => {
  const sortedReviews = [...reviews].sort(
    (a, b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf()
  );
  return (
    <div>
      {reviews?.length > 0 ? (
        <div>
          {sortedReviews.map((review: TReview) => {
            const { profileImage, reviewer, createdAt, description } = review;
            return (
              <div className="py-2" key={Math.random()}>
                <div className="bg-white rounded-lg shadow-md p-4 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <img
                        src={
                          profileImage ||
                          'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=826'
                        }
                        alt="Profile Avatar"
                        className="w-12 h-12 rounded-full"
                      />
                      <h4 className="ml-2 font-medium text-gray-700">{reviewer}</h4>
                    </div>
                    <div className="flex justify-between mt-2 text-gray-500">
                      <p>{moment(createdAt).format('h.mmA DD MMM YYYY')}</p>
                    </div>
                  </div>

                  <p className="mt-4">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        'Be the first to write a review'
      )}
    </div>
  );
};

export default ReviewCards;
