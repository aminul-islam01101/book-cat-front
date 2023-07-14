import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Root';

import Login from '@/components/auth/Login';
import SignUp from '@/components/auth/SignUp';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export default router;
