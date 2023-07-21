import { useEffect } from 'react';

import BookListCard from './allBooks/BookListCard';

import BookListLoader from '@/components/shared/Loader/BookListLoader';
import { useGetBooksQuery } from '@/redux/features/books/bookApiSlice';
import { setLimitAndOrder } from '@/redux/features/filters/bookFilterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TGenericResponse } from '@/types/authTypes';
import { TBookQueryResponse } from '@/types/bookTypes';

const Home = () => {
  const dispatch = useAppDispatch();
  const { bookFilters } = useAppSelector((state) => state);
  const booksQuery = useGetBooksQuery(bookFilters);
  const { isSuccess, isError, isLoading } = booksQuery;
  console.log('🌼 🔥🔥 file: Home.tsx:14 🔥🔥 Home 🔥🔥 isSuccess🌼', isSuccess);

  const booksData = booksQuery?.data as TGenericResponse;
  const books = booksData?.data as TBookQueryResponse[];
  console.log('🌼 🔥🔥 file: Home.tsx:18 🔥🔥 Home 🔥🔥 books🌼', books);

  useEffect(() => {
    dispatch(setLimitAndOrder({ limit: 10, sortOrder: 'desc' }));
  }, [dispatch]);

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
    <div>
      <div>Recently added Books </div>
      <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pt-10">
        {content}
      </div>
    </div>
  );
};

export default Home;
