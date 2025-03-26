import { LucidePlus } from "lucide-react";

import HeaderButton from "./HeaderButton";
import CreateTransactionForm from "../../features/transaction/CreateTransactionForm";

import { useModal } from "../../hooks/uesModal";

function AddTransaction() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <HeaderButton onClick={openModal}>
        <LucidePlus />
      </HeaderButton>

      <CreateTransactionForm isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default AddTransaction;
