import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import Pagination from "../../ui/tables/Pagination";
import Table from "../../ui/tables/Table";
import TransactionRow from "../../ui/tables/TransactionRow";
import TableAction from "../../ui/tables/TableAction";
import TableActionButton from "../../ui/buttons/TableActionButton";
import MobileTableBox from "../../ui/tables/MobileTableBox";
import Modal from "../../ui/common/Modal";
import Button from "../../ui/buttons/Button";
import Buttons from "../../ui/buttons/Buttons";
import MobileTransactionTable from "../../ui/tables/MobileTransactionTable";
import CreateTransactionForm from "../transaction/CreateTransactionForm";

import { expenses } from "../../data/data-expenses";
import { useModal } from "../../hooks/uesModal";
import ActionButtons from "../../ui/common/ActionButtons";

function ExpensesTable() {
  const [modalType, setModalType] = useState(null);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const { isOpen, openModal, closeModal } = useModal();

  function handleOpenModal(type, transaction) {
    if (transaction) {
      setTransactionToEdit({ ...transaction, transactionType: "expense" });
    }

    setModalType(type);
    openModal();
  }

  function handleCloseModal() {
    setTransactionToEdit(null);
    setModalType(null);
    closeModal();
  }

  return (
    <>
      <Table columns="grid-cols-[3rem_1fr_0.7fr_0.9fr_3rem]">
        <Table.Header>
          <div>Sl</div>
          <div>Category</div>
          <div>amount</div>
          <div>date</div>
          <div>action</div>
        </Table.Header>
        <Table.Body
          data={expenses}
          render={(expense, index) => (
            <TransactionRow number={index + 1} item={expense} key={expense.id}>
              <TableAction>
                <TableActionButton
                  icon={<Pencil />}
                  label="edit"
                  onClick={() => handleOpenModal("edit", expense)}
                />
                <TableActionButton
                  icon={<Trash2 />}
                  label="delete"
                  onClick={() => handleOpenModal("delete")}
                />
              </TableAction>
            </TransactionRow>
          )}
        />
      </Table>

      <MobileTransactionTable>
        {expenses.map((expense, index) => (
          <MobileTableBox
            title="category"
            item={expense}
            number={index + 1}
            key={expense.id}
          >
            <TableAction>
              <TableActionButton
                icon={<Pencil />}
                label="edit"
                onClick={() => handleOpenModal("edit", expense)}
              />
              <TableActionButton
                icon={<Trash2 />}
                label="delete"
                onClick={() => handleOpenModal("delete")}
              />
            </TableAction>
          </MobileTableBox>
        ))}
      </MobileTransactionTable>

      <Pagination />

      {modalType === "delete" && (
        <ActionButtons
          isOpen={isOpen}
          onClose={handleCloseModal}
          onCancel={closeModal}
          onConfirm={handleCloseModal}
          isLoading={false}
          confirmText="Delete"
          loadingText="Deleting..."
          type="danger"
        />
      )}

      {modalType === "edit" && (
        <CreateTransactionForm
          isOpen={isOpen}
          onClose={handleCloseModal}
          transactionToEdit={transactionToEdit}
        />
      )}
    </>
  );
}

export default ExpensesTable;
