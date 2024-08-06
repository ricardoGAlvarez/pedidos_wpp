// components/Modal.js
import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${modalOpen ? 'visible' : 'invisible'}`}>
      <div className="absolute w-full h-full bg-black opacity-50" onClick={closeModal}></div>
      <div className="z-10 bg-white p-4 rounded-md">
        {children}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={closeModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
