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

import { useModal } from "../../hooks/useModal";
import { useTransactions } from "../transaction/useTransactions";
import { useDeleteTransaction } from "../transaction/useDeleteTransaction";
import { useToast } from "../../hooks/useToast";
import { filterAndSortData, paginatedData } from "../../utils/helpers";
import { filterField, sortField } from "../../data/filter-options";
import { useQueryParam } from "../../hooks/useQueryParam";
import { PAGE_SIZE } from "../../utils/constants";
import { Transaction } from "../../utils/types";

interface EditIncome extends Transaction {
  transactionType: "edit";
}

type ChosenIncome = EditIncome | number | null;

type ModalType = "edit" | "delete" | null;

function IncomesTable() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [chosenIncome, setChosenIncome] = useState<ChosenIncome>(null);
  const { transactions, isLoading } = useTransactions();
  const { deleteTransaction, isDeleting } = useDeleteTransaction();
  const { isOpen, openModal, closeModal } = useModal();
  const { showToast } = useToast();
  const { getQueryParam } = useQueryParam();

  if (isLoading || !transactions) return <Spinner />;

  const incomes = transactions.filter(
    (transaction) => transaction.type === "income",
  );

  const filterValue = getQueryParam(filterField, "all");
  const sortValue = getQueryParam(sortField, "date-desc");

  const filteredIncomes = filterAndSortData(incomes, filterValue, sortValue);

  const page = Number(getQueryParam("page", "1"));
  const currentPage = page <= incomes.length / PAGE_SIZE + 1 ? page : 1;
  const paginatedIncomes = paginatedData(filteredIncomes, currentPage);

  function handleOpenModal(type: ModalType, transaction: Transaction | number) {
    if (typeof transaction === "number") {
      setChosenIncome(transaction);
    } else {
      setChosenIncome({ ...transaction, transactionType: "edit" });
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
    if (typeof chosenIncome !== "number") return;

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
          data={paginatedIncomes}
          render={(income, index) => (
            <TransactionRow number={index + 1} item={income} key={income.id}>
              {income.public ? (
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
              ) : (
                <ActionDisabled />
              )}
            </TransactionRow>
          )}
        />
      </Table>

      <MobileTransactionTable>
        {paginatedIncomes.map((income, index) => (
          <MobileTableBox
            title="source"
            item={income}
            number={index + 1}
            key={income.id}
          >
            {income.public ? (
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
            ) : (
              <ActionDisabled />
            )}
          </MobileTableBox>
        ))}
      </MobileTransactionTable>

      <Pagination currentPage={currentPage} count={filteredIncomes.length} />

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
          transactionToUpdate={chosenIncome as EditIncome}
        />
      )}
    </>
  );
}

export default IncomesTable;
