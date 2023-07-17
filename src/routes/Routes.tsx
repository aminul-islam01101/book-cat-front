import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Root';

import AllBooksLanding from '@/pages/allBooks/AllBooksLanding';
import Login from '@/pages/auth/Login';
import SignUp from '@/pages/auth/SignUp';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';
import BookDetails from '@/pages/allBooks/BookDetails';
import Books from '@/pages/allBooks/Books';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/all-books" element={<Books />} />
      <Route path="/all-books/:id" element={<BookDetails />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export default router;
