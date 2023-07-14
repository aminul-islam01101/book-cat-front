import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from 'features/auth/authSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import { TLogin, loginSchema } from '@/types/authTypes';

const Login = () => {
  const [login, { isLoading, isSuccess }] = useLoginMutation();
  console.log('🌼 🔥🔥 file: SignUp.tsx:11 🔥🔥 SignUp 🔥🔥 isLoading🌼', isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({ resolver: zodResolver(loginSchema), mode: 'onChange' });

  const onSubmit: SubmitHandler<TLogin> = async (data): Promise<void> => {
    await login(data);
  };

  return (
    <div className=" pt-40 ">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    {...register('password')}
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm`}
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none   "
                >
                  Login
                </button>
              </div>
              <div className="mt-6">
                <p className="text-center text-sm font-medium text-gray-500">Or Login with</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md  text-sm font-medium text-white shadow-custom  hover:bg-black/5 focus:outline-none "
                  >
                    <FcGoogle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
