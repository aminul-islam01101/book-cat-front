import DatePick from './DatePick';
import GenreFilter from './GenreFilter';
import YearFilter from './YearFilter';

import { useGetYearGenreQuery } from '@/redux/features/books/bookApiSlice';
import { TGenericResponse } from '@/types/authTypes';
import { TYearGenre } from '@/types/bookTypes';

const Filters = () => {
  const yearGenreQuery = useGetYearGenreQuery(undefined);
  const yearGenreData = yearGenreQuery.data as TGenericResponse;
  const yearGenre = yearGenreData?.data as TYearGenre;

  return (
    <div>
      <DatePick />
      <YearFilter years={yearGenre?.years} />
      <GenreFilter genres={yearGenre?.genres || []} />
    </div>
  );
};

export default Filters;
