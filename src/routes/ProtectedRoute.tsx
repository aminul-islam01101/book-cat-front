import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { authApiSlice } from '@/redux/features/auth/authApiSlice';
import { useAppSelector } from '@/redux/hooks';

type TProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: TProps) => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const { isLoading, isFetching } = authApiSlice.endpoints.getMeP.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const { pathname } = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user?.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
