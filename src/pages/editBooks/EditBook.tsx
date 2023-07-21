import { useParams } from 'react-router-dom';

import EditBookForm from './EditBookForm';

import { useGetBookQuery } from '@/redux/features/books/bookApiSlice';
import { TGenericResponse } from '@/types/authTypes';
import { TBookQueryResponse } from '@/types/bookTypes';

const EditBook = () => {
  const { id } = useParams();
  const bookQuery = useGetBookQuery(id as string);
  const { isLoading, isError } = bookQuery;
  const bookData = bookQuery.data as TGenericResponse;
  const book = bookData?.data as TBookQueryResponse;

  // const {
  //   title: bookTitle,
  //   author: bookAuthor,
  //   genre: bookGenre,
  //   _id,
  //   publicationTime: bookPublicationTime,
  // } = (bookData?.data as TBookQueryResponse) || {};

  // const [startDate, setStartDate] = useState(publicationTime);

  // const [selectedGenre, setSelectedGenre] = useState(genre);
  // const [selectedDate, setSelectedDate] = useState('');
  // const [signUp, { isLoading, isSuccess, isError, error }] = useSignUpMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoading && !isError && book?._id) {
    return (
      <div className="pt-20 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit Book</h2>
        </div>
        <EditBookForm book={book} />
      </div>
    );
  }
};
export default EditBook;
