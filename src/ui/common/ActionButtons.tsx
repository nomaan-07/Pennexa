import Button from "../buttons/Button";
import Buttons from "../buttons/Buttons";
import Modal from "./Modal";

function ActionButtons({
  onCancel,
  onConfirm,
  isLoading,
  confirmText,
  loadingText,
  onClose,
  isOpen,
  type,
  message,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeButton={false}>
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm sm:text-base">{message}</p>
        <Buttons>
          <Button type={type} onClick={onConfirm} disabled={isLoading}>
            {isLoading ? loadingText : confirmText}
          </Button>
          <Button type="secondary" onClick={onCancel} disabled={isLoading}>
            Cancel
          </Button>
        </Buttons>
      </div>
    </Modal>
  );
}

export default ActionButtons;
