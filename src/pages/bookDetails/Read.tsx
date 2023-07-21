import { FC } from 'react';
import { BiSolidCommentCheck } from 'react-icons/bi';
import { MdIncompleteCircle } from 'react-icons/md';

import { useManipulateFavoritesMutation } from '@/redux/features/favorites/favoritesApiSlice';
import { useAppSelector } from '@/redux/hooks';

type WishListProps = {
  read: string[];
  bookId: string;
};

const Read: FC<WishListProps> = ({ read, bookId }) => {
  const { user } = useAppSelector((state) => state.auth);

  const [manipulateFavorites] = useManipulateFavoritesMutation();

  const handleBookmarkRemove = async () => {
    await manipulateFavorites({
      email: user?.email as string,
      data: { bookId, type: 'read' },
    });
  };

  return (
    <div>
      {read?.length > 0 && read.includes(bookId) ? (
        <button onClick={handleBookmarkRemove} type="button" className="flex items-center gap-1">
          Read <BiSolidCommentCheck />
        </button>
      ) : (
        <button onClick={handleBookmarkRemove} type="button" className="flex items-center gap-1">
          Mark as read <MdIncompleteCircle />
        </button>
      )}
    </div>
  );
};

export default Read;
