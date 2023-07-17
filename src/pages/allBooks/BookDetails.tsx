import { useParams } from 'react-router-dom';

import { useGetBookQuery } from '@/redux/features/books/bookApiSlice';
import { TGenericResponse } from '@/types/authTypes';
import { TBookQueryResponse } from '@/types/bookTypes';

const BookDetails = () => {
  const { id } = useParams();
  const bookQuery = useGetBookQuery(id as string);
  const bookData = bookQuery.data as TGenericResponse;
  const { title, author, genre, reviews, publicationYear, publicationMonth } =
    (bookData?.data as TBookQueryResponse) || {};
  console.log('🌼 🔥🔥 file: BookDetails.tsx:12 🔥🔥 BookDetails 🔥🔥 title🌼', title);

  return <div className="pt-20">hel</div>;
};

export default BookDetails;
