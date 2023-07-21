import { FC } from 'react';
import { BsBookmark } from 'react-icons/bs';

import { useManipulateFavoritesMutation } from '@/redux/features/favorites/favoritesApiSlice';
import { useAppSelector } from '@/redux/hooks';

type WishListProps = {
  bookmark: string[];
  bookId: string;
};

const WishList: FC<WishListProps> = ({ bookmark, bookId }) => {
  const { user } = useAppSelector((state) => state.auth);

  const [manipulateFavorites] = useManipulateFavoritesMutation();

  const handleBookmarkRemove = async () => {
    await manipulateFavorites({
      email: user?.email as string,

      data: { bookId, type: 'bookmark' },
    });
  };

  return (
    <div>
      {bookmark?.length > 0 && bookmark.includes(bookId) ? (
        <button onClick={handleBookmarkRemove} type="button" className="flex items-center gap-1">
          bookmarked <BsBookmark />
        </button>
      ) : (
        <button onClick={handleBookmarkRemove} type="button" className="flex items-center gap-1">
          bookmark <BsBookmark />
        </button>
      )}
    </div>
  );
};

export default WishList;
