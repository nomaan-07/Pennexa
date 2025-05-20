import { Plus } from "lucide-react";

import CreateTransactionForm from "../../features/transaction/CreateTransactionForm";

import { useModal } from "../../hooks/useModal";

function AddTransaction() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div
        className="relative flex h-11 w-32 items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-2 text-sm text-slate-500 select-none md:cursor-pointer md:transition-colors md:hover:bg-slate-200 lg:w-auto lg:gap-3 lg:px-3 lg:text-base dark:border-slate-500 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600"
        onClick={openModal}
        role="button"
      >
        <span>Transaction</span>
        <Plus className="size-6" strokeWidth={1.5} />
      </div>

      <CreateTransactionForm isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default AddTransaction;
