// /* eslint-disable radix */
// import { zodResolver } from '@hookform/resolvers/zod';
// import { ChangeEvent, useEffect, useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// import { useSignUpMutation } from '@/redux/features/auth/authApiSlice';
// import { useGetBookQuery } from '@/redux/features/books/bookApiSlice';
// import { TGenericResponse, signUpSchema } from '@/types/authTypes';
// import { TBook, TBookQueryResponse } from '@/types/bookTypes';
// import { TError } from '@/types/globalTypes';
// import { convertYearMonth } from '@/utils/convertYearMonth';

// const EditBook = () => {
//   const { id } = useParams();
//   console.log('🌼 🔥🔥 file: EditBook.tsx:17 🔥🔥 EditBook 🔥🔥 id🌼', id);

//   // const bookQuery = useGetBookQuery(id as string);
//   // const bookData = bookQuery.data as TGenericResponse;
//   // const { title, author, genre, reviews, publicationTime } =
//   //   (bookData?.data as TBookQueryResponse) || {};

//   // const [startDate, setStartDate] = useState(publicationTime);

//   // const [selectedGenre, setSelectedGenre] = useState(genre);
//   // const [selectedDate, setSelectedDate] = useState('');
//   // const [signUp, { isLoading, isSuccess, isError, error }] = useSignUpMutation();
//   // const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<TBook>({ resolver: zodResolver(signUpSchema), mode: 'onChange' });
//   const jData = {
//     domains: [
//       'Fiction',
//       'Mystery',
//       'Thriller',
//       'Romance',
//       'Science Fiction',
//       'Fantasy',
//       'Horror',
//       'Historical Fiction',
//       'Dystopian',
//       'Adventure',
//       'Biography',
//       'Autobiography',
//       'Self-Help',
//     ],
//   };

//   // useEffect(() => {
//   //   if (isSuccess) {
//   //     navigate('/login');
//   //   }

//   //   if (isError) {
//   //     if (error) {
//   //       if ('status' in error) {
//   //         if ('error' in error) {
//   //           toast.error('An error occurred');
//   //         } else {
//   //           const errMsg = 'error' in error ? error.error : (error.data as TError);
//   //           toast.error((errMsg as TError).errorName);
//   //         }
//   //       }
//   //     } else {
//   //       toast.error('An error occurred');
//   //     }
//   //   }
//   // }, [isSuccess, navigate, error, isError]);

//   // const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
//   //   e.preventDefault();
//   //   setSelectedGenre(e.target.value);
//   // };
//   // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//   //   event.preventDefault();
//   //   setSelectedDate(event.target.value);
//   // };

//   const onSubmit: SubmitHandler<TBook> = (bodyData) => {

//   };

//   return (
//     <div className="pt-20 ">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit Book</h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
//             <div>
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                 Title
//               </label>
//               <div className="mt-1">
//                 <input
//                   {...register('title')}
//                   id="title"
//                   type="text"
//                   // placeholder={title || 'Write a title'}
//                   autoComplete="given-name"
//                   className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
//                     errors.title ? 'border-red-300' : 'border-gray-300'
//                   } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm`}
//                 />
//                 {errors.title && (
//                   <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="author" className="block text-sm font-medium text-gray-700">
//                 Author
//               </label>
//               <div className="mt-1">
//                 <input
//                   {...register('author')}
//                   id="author"
//                   type="text"
//                   // placeholder={author || 'Write an author name'}
//                   autoComplete="family-name"
//                   className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
//                     errors.author ? 'border-red-300' : 'border-gray-300'
//                   } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm`}
//                 />
//                 {errors.author && (
//                   <p className="mt-2 text-sm text-red-600">{errors.author.message}</p>
//                 )}
//               </div>
//             </div>

//             {/* <div className="lg:w-[43%] w-full flex flex-col">
//               <label htmlFor="genre" className="text-base font-medium">
//                 Select a genre
//               </label>
//               <select
//                 name="genre"
//                 id="genre"
//                 onChange={handleGenreChange}
//                 className="select select-bordered focus:outline-none w-full lg:w-[80%] mt-3"
//               >
//                 <option value="" className="hidden" hidden>
//                   {selectedGenre || ' Choose'}
//                 </option>
//                 {jData?.domains?.map((item) => (
//                   <option value={item} key={Math.random()} className="text-[18px]">
//                     {item}
//                   </option>
//                 ))}
//               </select>
//             </div> */}
//             {/* <div className=" w-full flex flex-col">
//               <label htmlFor="genre" className="text-base font-medium">
//                 Select Genre
//               </label>
//               <select
//                 {...register('genre', { required: 'Please select a Genre' })}
//                 name="genre"
//                 id="genre"
//                 onChange={handleGenreChange}
//                 className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
//                   errors.author ? 'border-red-300' : 'border-gray-300'
//                 } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm`}
//               >
//                 <option value="" className="hidden" hidden>
//                   {genre || 'Choose'}
//                 </option>
//                 {jData?.domains?.map((item: string) => (
//                   <option value={item} key={item} className="text-[18px]">
//                     {item}
//                   </option>
//                 ))}
//               </select>
//               {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>}
//             </div> */}
//             {/* <DatePicker
//               selected={startDate || new Date(publicationTime)}
//               onChange={(date) => setStartDate(date as Date)}
//               dateFormat="MM/yyyy"
//               showMonthYearPicker
//             /> */}

//             {/* <input
//               className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
//                 errors.author ? 'border-red-300' : 'border-gray-300'
//               } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm`}
//               defaultValue={publicationTime}
//               onChange={handleChange}
//               type="month"
//               id="datepicker"
//               name="datepicker"
//             /> */}
//             <div className="flex justify-center mt-10 lg:mt-16">
//               <button
//                 type="submit"
//                 className="w-full flex justify-center mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none  items-center gap-4 "
//               >
//                 Edit Book
//                 {/* {isLoading && (
//                   <span className="w-5 h-5 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
//                 )} */}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditBook;
