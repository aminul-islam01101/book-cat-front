import { FC, useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import ConfirmationModal from '@/components/shared/ConfirmationModal';
import { useDeleteBookMutation } from '@/redux/features/books/bookApiSlice';
import { TBookQueryResponse } from '@/types/bookTypes';

const DeleteBook: FC<{ book: TBookQueryResponse }> = ({ book }) => {
  const [deleteBook, setDeleteBook] = useState<TBookQueryResponse | null>(null);
  const [deleteBookReq, deleteOptions] = useDeleteBookMutation();
  const { isSuccess: isDeleteSuccess, isError: isDeleteError } = deleteOptions;

  const navigate = useNavigate();
  const handleDelete = async (bookData: TBookQueryResponse) => {
    await deleteBookReq(bookData?._id);
  };
  const closeModal = () => {
    setDeleteBook(null);
  };
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success('Book deleted successfully');
      closeModal();
      navigate('/all-books');
    }
    if (isDeleteError) {
      toast.success('Something went wrong');
      closeModal();
    }
  }, [isDeleteSuccess, isDeleteError, navigate]);

  return (
    <div>
      <button type="button" onClick={() => setDeleteBook(book)}>
        <label className=" cursor-pointer " htmlFor="confirmation-modal">
          <AiOutlineDelete className="text-3xl font-bold " />
        </label>
      </button>
      {deleteBook && (
        <ConfirmationModal
          title="Are you sure you want to delete?"
          message={`If you delete ${deleteBook?.title}. It cannot be undone.`}
          successAction={handleDelete}
          successButtonName="Delete"
          modalData={deleteBook}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default DeleteBook;
