import React from 'react';

import { authApi, useGetMePQuery } from '@/redux/features/auth/authApi';
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
  const { isLoading } = useGetMePQuery(null, {
    // skip: user?.email,
  });
  console.log('🌼 🔥🔥 file: AuthMiddleware.tsx:20 🔥🔥 isLoading🌼', isLoading);

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
