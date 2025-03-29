import { useState } from "react";
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
import ActionDisabled from "../../ui/buttons/ActionDisabled";

import { useModal } from "../../hooks/uesModal";
import { useTransactions } from "../transaction/useTransactions";
import { useDeleteTransaction } from "../transaction/useDeleteTransaction";
import { useToast } from "../../hooks/useToast";
import { filterAndSortData, paginatedData } from "../../utils/helpers";
import { filterField, sortField } from "../../data/filter-options";
import { useQueryParam } from "../../hooks/useQueryParam";
import { PAGE_SIZE } from "../../utils/constants";

function ExpensesTable() {
  const [modalType, setModalType] = useState(null);
  const [chosenExpense, setChosenExpense] = useState(null);
  const { transactions, isLoading } = useTransactions();
  const { deleteTransaction, isDeleting } = useDeleteTransaction();
  const { isOpen, openModal, closeModal } = useModal();
  const { showToast } = useToast();
  const { getQueryParam } = useQueryParam();

  if (isLoading) return <Spinner />;

  const expenses = transactions?.filter(
    (transaction) => transaction.type === "expense",
  );

  const filterValue = getQueryParam(filterField, "all");
  const sortValue = getQueryParam(sortField, "date-desc");

  const filteredExpenses = filterAndSortData(expenses, filterValue, sortValue);

  const page = Number(getQueryParam("page", 1));
  const currentPage = page <= expenses.length / PAGE_SIZE + 1 ? page : 1;
  const paginatedExpenses = paginatedData(filteredExpenses, currentPage);

  function handleOpenModal(type, transaction) {
    setChosenExpense(() =>
      type === "edit"
        ? { ...transaction, transactionType: "edit" }
        : transaction,
    );

    setModalType(type);
    openModal();
  }

  function handleCloseModal() {
    setChosenExpense(null);
    setModalType(null);
    closeModal();
  }

  function handleDeleteExpense() {
    deleteTransaction(chosenExpense, {
      onSuccess: () => {
        handleCloseModal();
        showToast("success", "Expense deleted successfully");
      },
    });
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
          data={paginatedExpenses}
          render={(expense, index) => (
            <TransactionRow number={index + 1} item={expense} key={expense.id}>
              {expense.public ? (
                <TableAction>
                  <TableActionButton
                    icon={<Pencil />}
                    label="edit"
                    onClick={() => handleOpenModal("edit", expense)}
                  />
                  <TableActionButton
                    icon={<Trash2 />}
                    label="delete"
                    onClick={() => handleOpenModal("delete", expense.id)}
                  />
                </TableAction>
              ) : (
                <ActionDisabled />
              )}
            </TransactionRow>
          )}
        />
      </Table>

      <MobileTransactionTable>
        {paginatedExpenses.map((expense, index) => (
          <MobileTableBox
            title="category"
            item={expense}
            number={index + 1}
            key={expense.id}
          >
            {expense.public ? (
              <TableAction>
                <TableActionButton
                  icon={<Pencil />}
                  label="edit"
                  onClick={() => handleOpenModal("edit", expense)}
                />
                <TableActionButton
                  icon={<Trash2 />}
                  label="delete"
                  onClick={() => handleOpenModal("delete", expense.id)}
                />
              </TableAction>
            ) : (
              <ActionDisabled />
            )}
          </MobileTableBox>
        ))}
      </MobileTransactionTable>

      <Pagination currentPage={currentPage} count={filteredExpenses.length} />

      {modalType === "delete" && (
        <ActionButtons
          isOpen={isOpen}
          onClose={handleCloseModal}
          onCancel={handleCloseModal}
          onConfirm={handleDeleteExpense}
          isLoading={isDeleting}
          confirmText="Delete"
          loadingText="Deleting..."
          type="danger"
          message={`Are you sure you want to delete this expense?`}
        />
      )}

      {modalType === "edit" && (
        <CreateTransactionForm
          isOpen={isOpen}
          onClose={handleCloseModal}
          transactionToUpdate={chosenExpense}
        />
      )}
    </>
  );
}

export default ExpensesTable;
