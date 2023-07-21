import React from 'react';

type ReviewCardProps = {
  avatar: string;
  reviewerName: string;
  dateTime: string;
  description: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ avatar, reviewerName, dateTime, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="flex items-center">
      <img src={avatar} alt="Profile Avatar" className="w-12 h-12 rounded-full" />
      <h4 className="ml-2 font-medium text-gray-700">{reviewerName}</h4>
    </div>
    <div className="flex justify-between mt-2 text-gray-500">
      <p>{dateTime}</p>
    </div>
    <p className="mt-4">{description}</p>
  </div>
);

export default ReviewCard;
