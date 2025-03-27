import { Plus } from "lucide-react";

import Button from "./Button";
import CreateGroupForm from "../../features/groups/CreateGroupForm";

import { useModal } from "../../hooks/uesModal";

function AddGroup({ incomeCount, expenseCount }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button type="secondary" onClick={openModal}>
        <span>Add new</span>
        <Plus />
      </Button>

      <CreateGroupForm
        incomeCount={incomeCount}
        expenseCount={expenseCount}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default AddGroup;
