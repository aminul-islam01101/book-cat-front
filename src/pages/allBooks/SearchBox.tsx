import { ChangeEvent } from 'react';

import { setSearchTerm } from '@/redux/features/filters/bookFilterSlice';
import { useAppDispatch } from '@/redux/hooks';

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const handleSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="relative">
        <input
          type="text"
          onChange={handleSearchData}
          className="bg-white text-gray-700 border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Search"
        />
        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
