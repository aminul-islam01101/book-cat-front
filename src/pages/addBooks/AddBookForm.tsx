import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAddBookMutation } from '@/redux/features/books/bookApiSlice';
import { TErrorData } from '@/types/globalTypes';
import { convertYearMonth } from '@/utils/convertYearMonth';
import { useAppSelector } from '@/redux/hooks';

export type TFormData = {
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationMonth: string;
  publicationYear: string;

  // Add other form fields as needed
};

const AddBookForm = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [addBook, options] = useAddBookMutation();
  const { isLoading, isSuccess, isError, error } = options;

  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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
    const data: TFormData = {
      email: user?.email as string,
      title,
      author,
      genre: selectedGenre,
      publicationMonth: month,
      publicationYear: year.toString(),
    };
    await addBook(data);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success('Book Added successfully');
      navigate(`/all-books`);
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
  }, [isSuccess, error, isError, options.data, navigate]);
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
                placeholder="Write book title"
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
              onChange={handleGenreChange}
              className=" rounded-md relative block w-full px-3 py-2 border border-gray-300
                 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
            >
              <option className="hidden" hidden>
                {selectedGenre || 'Select a genre'}
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
              Add Book
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

export default AddBookForm;
