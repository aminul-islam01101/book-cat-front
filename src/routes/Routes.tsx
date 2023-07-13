import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Root';

import RouteCheck from '@/components/RouteCheck';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/route-check" element={<RouteCheck />} />

            {/* <Route path="/Signup" element={<RegistrationPage />} />

      <Route path="/login" element={<LoginPage />} /> */}
        </Route>
    )
);

export default router;
