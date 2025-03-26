import { createPortal } from "react-dom";
import Overlay from "./Overlay";

function Modal({ children, isOpen, onClose }) {
  return createPortal(
    <>
      <div
        className={`fixed inset-0 z-110 flex items-center justify-center ${isOpen ? "modal--open" : "modal--close"}`}
      >
        <div className="z-110 rounded-xl bg-white px-4 py-6 dark:bg-slate-800">
          {children}
        </div>

        <Overlay isOpen={isOpen} onClose={onClose} />
      </div>
    </>,
    document.body,
  );
}

export default Modal;
