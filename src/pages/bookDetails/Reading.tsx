import { FC } from 'react';
import { FcReading, FcReadingEbook } from 'react-icons/fc';

import { useManipulateFavoritesMutation } from '@/redux/features/favorites/favoritesApiSlice';
import { useAppSelector } from '@/redux/hooks';

type WishListProps = {
  reading: string[];
  bookId: string;
};

const Reading: FC<WishListProps> = ({ reading, bookId }) => {
  const { user } = useAppSelector((state) => state.auth);

  const [manipulateFavorites] = useManipulateFavoritesMutation();

  const handleBookmarkRemove = async () => {
    await manipulateFavorites({
      email: user?.email as string,
      data: { bookId, type: 'reading' },
    });
  };

  return (
    <div>
      {reading?.length > 0 && reading.includes(bookId) ? (
        <button onClick={handleBookmarkRemove} type="button" className="flex items-center gap-1">
          Reading <FcReading />
        </button>
      ) : (
        <button onClick={handleBookmarkRemove} type="button" className="flex items-center gap-1">
          Mark as reading <FcReadingEbook />
        </button>
      )}
    </div>
  );
};

export default Reading;
