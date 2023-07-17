import React from 'react';

import { useGetMePQuery } from '@/redux/features/auth/authApiSlice';
import { useAppSelector } from '@/redux/hooks';

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);
  console.log('🌼 🔥🔥 file: AuthMiddleware.tsx:12 🔥🔥 user🌼', user);

  // const { isLoading } = authApi.endpoints.getMeP.useQuery(null, {
  //   skip: !user?.email,
  // });
  console.log(
    '🌼 🔥🔥 file: AuthMiddleware.tsx:20 🔥🔥 user?.email===undefined🌼',
    user?.email === undefined
  );
  const { isLoading } = useGetMePQuery(null, {
    skip: user?.email !== undefined,
  });
  //   useEffect(() => {
  //     if (user?.email) {
  //       authApi.endpoints.getMe.initiate(null);
  //     }
  //   }, [user?.email]);

  if (isLoading) {
    return <div> Loading</div>;
  }

  return children;
};

export default AuthMiddleware;
