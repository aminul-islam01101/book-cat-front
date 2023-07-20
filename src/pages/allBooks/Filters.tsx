import GenreFilter from './GenreFilter';
import YearFilter from './YearFilter';

import { useGetYearGenreQuery } from '@/redux/features/books/bookApiSlice';
import { resetFilter } from '@/redux/features/filters/bookFilterSlice';
import { useAppDispatch } from '@/redux/hooks';
import { TGenericResponse } from '@/types/authTypes';
import { TYearGenre } from '@/types/bookTypes';

const Filters = () => {
  const yearGenreQuery = useGetYearGenreQuery(undefined);
  const yearGenreData = yearGenreQuery.data as TGenericResponse;
  const yearGenre = yearGenreData?.data as TYearGenre;
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetFilter());
  };

  return (
    <div className="pt-8 space-y-4 ">
      <div className="flex gap-2 justify-between border rounded p-1">
        <span className="w-full   rounded p-1 ">Filters</span>
        <button
          className="w-full  border rounded-md p-1  bg-gray-100 shadow-md"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <GenreFilter genres={yearGenre?.genres || []} />
      <YearFilter years={yearGenre?.years} />
    </div>
  );
};

export default Filters;
