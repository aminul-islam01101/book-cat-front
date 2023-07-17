export type TReview = {
  reviewer: string;
  description: string;
  profileImage: string;
  createdAt: Date;
};

export type TBookQueryResponse = {
  author: string;
  createdAt: string;
  genre: string;
  id: string;
  owner: string;
  publicationYear: string;
  publicationMonth: string;
  reviews: TReview[];
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
export type TYearGenre = {
  genres: string[];
  years: { label: string; value: string }[];
};
