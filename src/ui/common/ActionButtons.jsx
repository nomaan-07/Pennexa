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
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeButton={false}>
      <Buttons>
        <Button type={type} onClick={onConfirm} disabled={isLoading}>
          {isLoading ? loadingText : confirmText}
        </Button>
        <Button type="secondary" onClick={onCancel} disabled={isLoading}>
          Cancel
        </Button>
      </Buttons>
    </Modal>
  );
}

export default ActionButtons;
