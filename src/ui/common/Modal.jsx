import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import ModalCloseButton from "../buttons/ModalCloseButton";

function Modal({ children, isOpen, onClose, closeButton = true }) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
        <div className="relative z-110 max-h-[96vh] overflow-y-auto rounded-xl bg-white px-4 py-6 shadow dark:bg-slate-800 dark:shadow-slate-700">
          {children}
          {closeButton && <ModalCloseButton onClose={onClose} />}
        </div>
        <Overlay isOpen={isOpen} onClose={onClose} />
      </div>
    </>,
    document.body,
  );
}

export default Modal;
