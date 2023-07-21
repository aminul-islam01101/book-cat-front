import { FC } from 'react';

import { TBookQueryResponse } from '@/types/bookTypes';

type TModalProps = {
  title: string;
  message: string;
  successButtonName: string;
  modalData: TBookQueryResponse;
  closeModal: () => void;
  successAction: (modalData: TBookQueryResponse) => void;
};

const ConfirmationModal: FC<TModalProps> = ({
  title,
  message,
  successButtonName,
  closeModal,
  modalData,
  successAction,
}) => (
  <div>
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-black z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h3 className="font-bold text-lg text-center mb-4">{title}</h3>
        <p className="text-center">{message}</p>
        <div className="modal-action mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => successAction(modalData)}
            className="btn btn-primary mr-2"
          >
            {successButtonName}
          </button>
          <button type="button" onClick={closeModal} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ConfirmationModal;
