import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Root from './Root';

import Books from '@/pages/allBooks/Books';
import Login from '@/pages/auth/Login';
import SignUp from '@/pages/auth/SignUp';
import BookDetails from '@/pages/bookDetails/BookDetails';
import EditBook from '@/pages/editBooks/EditBook';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';
import AddBookForm from '@/pages/addBooks/AddBookForm';
import AddBook from '@/pages/addBooks/AddBook';

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
