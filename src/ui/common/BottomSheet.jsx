import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import ModalCloseButton from "../buttons/ModalCloseButton";

function BottomSheet({ children, isOpen, onClose }) {
  return createPortal(
    <>
      <div
        className={`fixed right-0 left-0 z-110 max-h-screen overflow-y-auto rounded-t-2xl bg-white px-4 py-6 transition-all sm:px-8 lg:hidden dark:bg-slate-800 ${isOpen ? "modal--open bottom-0" : "modal--close -bottom-20"}`}
      >
        {children}
        <ModalCloseButton onClose={onClose} />
      </div>
      <Overlay isOpen={isOpen} onClose={onClose} />
    </>,
    document.body,
  );
}

export default BottomSheet;
