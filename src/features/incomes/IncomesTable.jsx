import { Pencil, Trash2 } from "lucide-react";

import Pagination from "../../ui/tables/Pagination";
import Table from "../../ui/tables/Table";
import TransactionRow from "../../ui/tables/TransactionRow";
import TableAction from "../../ui/tables/TableAction";
import TableActionButton from "../../ui/buttons/TableActionButton";
import MobileTableBox from "../../ui/tables/MobileTableBox";
import MobileTransactionTable from "../../ui/tables/MobileTransactionTable";
import Spinner from "../../ui/common/Spinner";
import CreateTransactionForm from "../transaction/CreateTransactionForm";
import ActionButtons from "../../ui/common/ActionButtons";

import { useModal } from "../../hooks/uesModal";
import { useState } from "react";
import { useTransactions } from "../transaction/useTransactions";
import { useDeleteTransaction } from "../transaction/useDeleteTransaction";
import { useToast } from "../../hooks/useToast";

function IncomesTable() {
  const [modalType, setModalType] = useState(null);
  const [chosenIncome, setChosenIncome] = useState(null);
  const { transactions, isLoading } = useTransactions();
  const { deleteTransaction, isDeleting } = useDeleteTransaction();
  const { isOpen, openModal, closeModal } = useModal();
  const { showToast } = useToast();

  if (isLoading) return <Spinner />;

  const incomes = transactions.filter(
    (transaction) => transaction.type === "income",
  );

  function handleOpenModal(type, transaction) {
    if (type === "edit") {
      setChosenIncome({ ...transaction, transactionType: "edit" });
    } else if (type === "delete") {
      setChosenIncome(transaction);
    }

    setModalType(type);
    openModal();
  }

  function handleCloseModal() {
    setChosenIncome(null);
    setModalType(null);
    closeModal();
  }

  function handleDeleteIncome() {
    deleteTransaction(chosenIncome, {
      onSuccess: () => {
        handleCloseModal();
        showToast("success", "Income deleted successfully");
      },
    });
  }

  return (
    <>
      <Table columns="grid-cols-[3rem_1fr_0.7fr_0.9fr_3rem]">
        <Table.Header>
          <div>Sl</div>
          <div>Source</div>
          <div>amount</div>
          <div>date</div>
          <div>action</div>
        </Table.Header>

        <Table.Body
          data={incomes}
          render={(income, index) => (
            <TransactionRow number={index + 1} item={income} key={income.id}>
              <TableAction>
                <TableActionButton
                  icon={<Pencil />}
                  label="edit"
                  onClick={() => handleOpenModal("edit", income)}
                />
                <TableActionButton
                  icon={<Trash2 />}
                  label="delete"
                  onClick={() => handleOpenModal("delete", income.id)}
                />
              </TableAction>
            </TransactionRow>
          )}
        />
      </Table>

      <MobileTransactionTable>
        {incomes.map((income, index) => (
          <MobileTableBox
            title="source"
            item={income}
            number={index + 1}
            key={income.id}
          >
            <TableAction>
              <TableActionButton
                icon={<Pencil />}
                label="edit"
                onClick={() => handleOpenModal("edit", income)}
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
          onCancel={handleCloseModal}
          onConfirm={handleDeleteIncome}
          isLoading={isDeleting}
          confirmText="Delete"
          loadingText="Deleting..."
          type="danger"
          message={`Are you sure you want to delete this income?`}
        />
      )}

      {modalType === "edit" && (
        <CreateTransactionForm
          isOpen={isOpen}
          onClose={handleCloseModal}
          transactionToEdit={chosenIncome}
        />
      )}
    </>
  );
}

export default IncomesTable;
