import React from 'react';

import Footer from '@/components/shared/Footer';
import NavLoad from '@/components/shared/NavLoad';
import { useGetMePQuery } from '@/redux/features/auth/authApiSlice';
import { useAppSelector } from '@/redux/hooks';

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);
  // const { isLoading } = authApi.endpoints.getMeP.useQuery(null, {
  //   skip: !user?.email,
  // });
  const { isLoading } = useGetMePQuery(null, {
    skip: user?.email !== undefined,
  });
  //   useEffect(() => {
  //     if (user?.email) {
  //       authApi.endpoints.getMe.initiate(null);
  //     }
  //   }, [user?.email]);

  if (isLoading) {
    return (
      <div>
        {' '}
        <div className=" flex flex-col justify-between min-h-screen">
          <div className="pt-20">
            <NavLoad />
            <div className="container">
              <div> Loading ......</div>
            </div>
          </div>

          <Footer />
        </div>{' '}
      </div>
    );
  }

  return children;
};

export default AuthMiddleware;
