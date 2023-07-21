import { FaEdit } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

import DeleteBook from './DeleteBook';
import Read from './Read';
import WishList from './WishList';
import Reading from './Reading';
import ReviewCards from './reviews/ReviewCards';
import ReviewForm from './reviews/ReviewForm';

import { useGetBookQuery } from '@/redux/features/books/bookApiSlice';
import { useGetReaderQuery } from '@/redux/features/favorites/favoritesApiSlice';
import { useAppSelector } from '@/redux/hooks';
import { TGenericResponse } from '@/types/authTypes';
import { TBookQueryResponse, TReaderResponse } from '@/types/bookTypes';

const BookDetails = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { id } = useParams();
  const bookQuery = useGetBookQuery(id as string);
  const bookData = bookQuery.data as TGenericResponse;
  const { title, author, genre, reviews, publicationYear, publicationMonth, owner } =
    (bookData?.data as TBookQueryResponse) || {};

  const readerQuery = useGetReaderQuery(user?.email as string);
  const readerData = readerQuery.data as TGenericResponse;
  console.log('🌼 🔥🔥 file: BookDetails.tsx:25 🔥🔥 BookDetails 🔥🔥 readerData🌼', readerData);

  const { bookmark, booksRead, booksReading } = (readerData?.data as TReaderResponse) || {};

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold  ">Book Title:{title}</h1>
        {user?.email === owner?.email && (
          <div className="flex">
            <Link to={`/books/edit/${id as string}`}>
              <FaEdit className="text-3xl font-bold" />
            </Link>
            {bookData?.data && <DeleteBook book={bookData?.data as TBookQueryResponse} />}
          </div>
        )}
      </div>
      <div className="flex   mb-4 gap-4">
        <WishList bookmark={bookmark} bookId={id as string} /> ||
        <Reading reading={booksReading} bookId={id as string} /> ||
        <Read read={booksRead} bookId={id as string} />
      </div>
      <div className="mb-4">
        <p className="font-semibold">Author: {author}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Genre: {genre}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">
          Publication Date: {publicationMonth}, {publicationYear}
        </p>
      </div>
      <ReviewForm />
      <ReviewCards reviews={reviews || []} />
    </div>
  );
};

export default BookDetails;
