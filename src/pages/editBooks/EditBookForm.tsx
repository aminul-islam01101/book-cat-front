import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUpdateBookMutation } from '@/redux/features/books/bookApiSlice';
import { TBookQueryResponse } from '@/types/bookTypes';
import { TErrorData } from '@/types/globalTypes';
import { convertYearMonth } from '@/utils/convertYearMonth';

export type TFormData = {
  title: string;
  author: string;
  genre: string;
  publicationMonth: string;
  publicationYear: string;

  // Add other form fields as needed
};
type TBookProps = {
  book: TBookQueryResponse;
};

const EditBookForm: FC<TBookProps> = ({ book }) => {
  const {
    title: bookTitle,
    author: bookAuthor,
    genre: bookGenre,
    _id: id,
    publicationTime: bookPublicationTime,
  } = book || {};

  const navigate = useNavigate();
  const [title, setTitle] = useState(bookTitle);
  const [author, setAuthor] = useState(bookAuthor);

  const [updateBook, options] = useUpdateBookMutation();
  const { isLoading, isSuccess, isError, error } = options;

  const [selectedGenre, setSelectedGenre] = useState(bookGenre);
  const [selectedDate, setSelectedDate] = useState(bookPublicationTime);

  const domain = [
    'Fiction',
    'Mystery',
    'Thriller',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Horror',
    'Historical Fiction',
    'Dystopian',
    'Adventure',
    'Biography',
    'Autobiography',
    'Self-Help',
  ];

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { month, year } = convertYearMonth(selectedDate);

    // Handle form submission here
    const formData: TFormData = {
      title,
      author,
      genre: selectedGenre,
      publicationMonth: month,
      publicationYear: year.toString(),
    };
    await updateBook({ bookId: id, data: formData });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success('Book updated successfully');
      navigate(`/all-books/${id}`);
    }
    if (isError) {
      if (error) {
        if ('status' in error) {
          if ('error' in error) {
            toast.error('An error occurred');
          } else {
            const errMsg = error.data as TErrorData;
            toast.error(errMsg.errorName);
          }
        }
      } else {
        // you can access all properties of `SerializedError` here
        toast.error('An error occurred');
      }
    }
  }, [isSuccess, error, isError, options.data, id, navigate]);
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit}>
          {/* Other form fields */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <div className="mt-1">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                type="text"
                // defaultValue={title}
                required
                autoComplete="given-name"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300
                 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <div className="mt-1">
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                id="author"
                type="text"
                // defaultValue={author}
                required
                placeholder="Write an author name"
                autoComplete="family-name"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300
                 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          {/* Select Genre field */}
          <div className=" w-full flex flex-col">
            <label htmlFor="genre" className="text-base font-medium">
              Select a genre
            </label>
            <select
              value={selectedGenre}
              // defaultValue={genre}
              onChange={handleGenreChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300
                 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
            >
              <option className="hidden" hidden>
                {selectedGenre}
              </option>
              {domain?.map((item) => (
                <option value={item} key={item} className="text-[18px]">
                  {item}
                </option>
              ))}
            </select>
            {/* {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>} */}
          </div>

          {/* Datepicker field */}
          <div className=" w-full flex flex-col">
            <label htmlFor="datepicker" className="text-base font-medium">
              Select a Date
            </label>
            <input
              value={selectedDate}
              onChange={handleChange}
              // defaultValue={bookPublicationTime}
              type="month"
              required
              id="datepicker"
              name="datepicker"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300
                 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
            />
            {/* {errors.publicationTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.publicationTime.message}</p> */}
            {/* )} */}
          </div>

          <div className="flex justify-center  ">
            <button
              type="submit"
              className="w-full flex justify-center mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none  items-center gap-4 "
            >
              Edit Book
              {isLoading && (
                <span className="w-5 h-5 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookForm;
