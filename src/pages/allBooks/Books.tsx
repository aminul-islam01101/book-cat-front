import AllBooksLanding from './AllBooksLanding';
import BookListCard from './BookListCard';

import BookListLoader from '@/components/shared/Loader/BookListLoader';
import { useGetBooksQuery } from '@/redux/features/books/bookApiSlice';
import { useAppSelector } from '@/redux/hooks';
import { TGenericResponse } from '@/types/authTypes';
import { TBookQueryResponse } from '@/types/bookTypes';

const Books = () => {
  const { bookFilters } = useAppSelector((state) => state);
  const booksQuery = useGetBooksQuery(bookFilters);
  const { isSuccess, isError, isLoading } = booksQuery;
  const booksData = booksQuery?.data as TGenericResponse;
  const books = booksData?.data as TBookQueryResponse[];
  console.log('🌼 🔥🔥 file: Books.tsx:14 🔥🔥 Books 🔥🔥 books🌼', books);

  let content = null;
  if (isLoading) {
    content = (
      <>
        <BookListLoader />
        <BookListLoader />
        <BookListLoader />
        <BookListLoader />
        <BookListLoader />
        <BookListLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <div>There was an error</div>;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <div>No videos found!</div>;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books?.map((book: TBookQueryResponse) => (
      <div key={book._id}>
        <BookListCard book={book} />
      </div>
    ));
  }
  return (
    <AllBooksLanding>
      <div className="grid grid-cols-4 gap-5 pt-10">{content}</div>
    </AllBooksLanding>
  );
};

export default Books;
