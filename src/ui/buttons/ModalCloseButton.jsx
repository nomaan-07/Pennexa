import { X } from "lucide-react";

function ModalCloseButton({ onClose }) {
  return (
    <X
      role="button"
      className="absolute top-4 right-4 text-slate-500 transition-colors md:cursor-pointer md:hover:text-inherit dark:text-slate-400"
      onClick={onClose}
    />
  );
}

export default ModalCloseButton;
