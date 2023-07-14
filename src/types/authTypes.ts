import { ZodType, z } from 'zod';

export type TLogin = {
  email: string;
  password: string;
};
export type TSignUp = TLogin & {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
};
export const loginSchema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email address'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password must be at least 8 characters'),
});

export const signUpSchema: ZodType<TSignUp> = z
  .object({
    firstName: z.string().min(2).max(30).nonempty('First Name is required'),
    lastName: z.string().min(2).max(30).nonempty('Last Name is required'),
    email: z.string().nonempty('Email is required').email('Invalid email address'),
    phoneNumber: z.string().nonempty('Phone Number is required').min(10, 'Invalid phone number'),
    password: z
      .string()
      .nonempty('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .nonempty('Password is required')
      .min(6, 'Confirm Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// export type TSignIn = z.infer<typeof signInSchema>;
// export type TSignUp = z.infer<typeof signUpSchema>;
