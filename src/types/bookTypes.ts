import { z } from 'zod';

export type TReview = {
  reviewer: string;
  description: string;
  profileImage: string;
  createdAt: Date;
};
export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export const publicationMonths: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export type TBook = {
  title: string;
  author: string;
  genre: string;
  publicationMonth: TMonths;
  publicationYear: string;
  email: string;
};

export type TBookQueryResponse = {
  author: string;
  createdAt: string;
  genre: string;
  id: string;
  owner: string;
  publicationYear: string;
  publicationMonth: string;
  publicationTime: string;
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
export const createBookZodSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(3, 'title must be at least 3 characters long'),
    author: z
      .string({ required_error: 'Author is required' })
      .min(3, 'Author must be at least 3 characters long'),

    genre: z.string({ required_error: 'Genre is required' }),

    publicationYear: z.string({
      required_error: 'Publication Year is required ',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
    publicationMonth: z.enum([...publicationMonths] as [string, ...string[]], {
      required_error: 'Month is needed',
    }),
  }),
});
