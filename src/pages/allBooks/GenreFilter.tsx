import { ChangeEvent, FC } from 'react';

import { setGenre } from '@/redux/features/filters/bookFilterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type TGenreListProps = {
  genres: string[] | [];
};

const GenreFilter: FC<TGenreListProps> = ({ genres }) => {
  const dispatch = useAppDispatch();
  const { genre } = useAppSelector((state) => state.bookFilters);

  const titles = ['Title 1', 'Title 2', 'Title 3'];

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGenre(event.target.value));
  };

  return (
    <div>
      {genres.map((title) => (
        <label key={title} className="flex items-center">
          <input
            type="radio"
            value={title}
            checked={genre === title}
            onChange={handleTitleChange}
            className="mr-2"
          />
          {title}
        </label>
      ))}
    </div>
  );
};

export default GenreFilter;
