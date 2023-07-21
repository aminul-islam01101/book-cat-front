import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Footer from '@/components/shared/Footer';
import NavLoad from '@/components/shared/NavLoad';
import { authApiSlice } from '@/redux/features/auth/authApiSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TLoginResponse } from '@/types/authTypes';

type TProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: TProps) => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [userP, setUserP] = useState(undefined as TLoginResponse | undefined);

  useEffect(() => {
    if (user?.email) {
      setIsLoading(false);
    }
    if (!user?.email) {
      dispatch(authApiSlice.endpoints.getMeP.initiate(null))
        .unwrap()
        .then((data) => {
          setUserP(data as TLoginResponse);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [dispatch, user?.email]);
  const { pathname } = useLocation();
  if (user?.email) {
    return children;
  }
  if (isLoading) {
    return (
      <div>
        <div className=" flex flex-col justify-between min-h-screen">
          <div className="pt-20">
            <NavLoad />
            <div className="container">
              <div> Loading ......</div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }

  if (user?.email === undefined && !isLoading && userP?.email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
