import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import ModalCloseButton from "../buttons/ModalCloseButton";

function TopSheet({ children, isOpen, onClose }) {
  return createPortal(
    <>
      <div
        className={`fixed top-6 z-110 rounded-l-2xl bg-white px-8 pt-8 pb-12 transition-all lg:hidden dark:bg-slate-800 ${isOpen ? "modal--open right-0" : "modal--close -right-20"}`}
      >
        {children}
        <ModalCloseButton onClose={onClose} position="bottom" />
      </div>
      <Overlay isOpen={isOpen} onClose={onClose} />
    </>,
    document.body,
  );
}

export default TopSheet;
