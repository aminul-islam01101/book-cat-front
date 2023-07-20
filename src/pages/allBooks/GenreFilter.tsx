import { ChangeEvent, FC } from 'react';

import { setGenre } from '@/redux/features/filters/bookFilterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type TGenreListProps = {
  genres: string[] | [];
};

const GenreFilter: FC<TGenreListProps> = ({ genres }) => {
  const dispatch = useAppDispatch();
  const { genre } = useAppSelector((state) => state.bookFilters);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGenre(event.target.value));
  };

  return (
    <div className="w-full mt-2 border rounded-md p-1  bg-gray-100 shadow-md">
      <h3 className="text-sm pb-1">Genre</h3>
      <div className="flex sm:flex-col gap-2 flex-wrap md:flex-nowrap ">
        {genres.map((title) => (
          <label
            key={title}
            className="flex text-xs lg:text-sm items-center py-2 px-4 bg-white rounded-md cursor-pointer transition-all duration-300 hover:bg-gray-200 focus:bg-gray-200"
          >
            <input
              type="radio"
              value={title}
              checked={genre === title}
              onChange={handleTitleChange}
              className="mr-2 focus:ring-primary focus:border-primary"
            />
            {title}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
