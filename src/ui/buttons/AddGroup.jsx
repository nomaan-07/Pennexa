import { Plus } from "lucide-react";
import Button from "./Button";
import CreateGroupForm from "../../features/groups/CreateGroupForm";
import { useModal } from "../../hooks/uesModal";

function AddGroup() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button type="secondary" onClick={openModal}>
        <span>Add new</span>
        <Plus />
      </Button>

      <CreateGroupForm isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default AddGroup;
