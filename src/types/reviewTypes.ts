import { z } from 'zod';

export type TReviewMessage = {
  description: string;
};
export type TReviewData = TReviewMessage & {
  profileImage?: string;
  reviewer?: string;
  email: string;
};
export const reviewSchema = z.object({
  description: z
    .string({ required_error: 'Message is required' })
    .min(4, 'Message must be at least 4 characters long'),
});
