import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Root from './Root';

import AddBook from '@/pages/addBooks/AddBook';
import Books from '@/pages/allBooks/Books';
import Login from '@/pages/auth/Login';
import SignUp from '@/pages/auth/SignUp';
import BookDetails from '@/pages/bookDetails/BookDetails';
import EditBook from '@/pages/editBooks/EditBookPage';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/all-books" element={<Books />} />
      <Route path="/all-books/:id" element={<BookDetails />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/add-book"
        element={
          <ProtectedRoute>
            <AddBook />
          </ProtectedRoute>
        }
      />

      <Route
        path="/books/edit/:id"
        element={
          <ProtectedRoute>
            <EditBook />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

export default router;
