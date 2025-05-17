import { X } from "lucide-react";
import { ClickHandler } from "../../utils/types";

interface ModalCloseButtonProps {
  onClose: ClickHandler;
  position?: "top" | "bottom";
}

function ModalCloseButton({
  onClose,
  position = "top",
}: ModalCloseButtonProps) {
  return (
    <X
      role="button"
      className={`absolute text-slate-500 transition-colors md:cursor-pointer md:hover:text-inherit dark:text-slate-400 ${position === "top" ? "top-4 right-4" : "bottom-4 left-4"}`}
      onClick={onClose}
    />
  );
}

export default ModalCloseButton;
