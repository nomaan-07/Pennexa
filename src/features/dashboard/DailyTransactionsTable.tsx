import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import TableActionButton from "../../ui/buttons/TableActionButton";
import Heading from "../../ui/layout/Heading";
import Table from "../../ui/tables/Table";
import TableAction from "../../ui/tables/TableAction";
import TransactionRow from "../../ui/tables/TransactionRow";
import ActionButtons from "../../ui/common/ActionButtons";
import CreateTransactionForm from "../transaction/CreateTransactionForm";
import MobileTransactionTable from "../../ui/tables/MobileTransactionTable";
import Pagination from "../../ui/tables/Pagination";
import MobileTableBox from "../../ui/tables/MobileTableBox";
import ActionDisabled from "../../ui/buttons/ActionDisabled";

import { useModal } from "../../hooks/uesModal";
import { useDeleteTransaction } from "../transaction/useDeleteTransaction";
import { useToast } from "../../hooks/useToast";
import { useQueryParam } from "../../hooks/useQueryParam";
import { paginatedData } from "../../utils/helpers";
import { PAGE_SIZE } from "../../utils/constants";

function DailyTransactionsTable({ transactions }) {
  const [chosenTransaction, setChosenTransaction] = useState(null);
  const [modalType, setModalType] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const { deleteTransaction, isDeleting } = useDeleteTransaction();
  const { showToast } = useToast();
  const { getQueryParam } = useQueryParam();

  const page = Number(getQueryParam("page", 1));
  const currentPage = page <= transactions.length / PAGE_SIZE + 1 ? page : 1;
  const paginatedTransactions = paginatedData(transactions, currentPage);

  function handleOpenModal(type, transaction) {
    setChosenTransaction(() =>
      type === "edit"
        ? { ...transaction, transactionType: "edit" }
        : transaction,
    );
    setModalType(type);
    openModal();
  }

  function handleCloseModal() {
    setChosenTransaction(null);
    setModalType(null);
    closeModal();
  }

  function handleDeleteTransaction() {
    deleteTransaction(chosenTransaction, {
      onSuccess: () => {
        handleCloseModal();
        showToast("success", "Transaction deleted successfully");
      },
    });
  }

  return (
    <>
      <div className="rounded-xl capitalize md:bg-white md:p-4 md:dark:bg-slate-800">
        <Heading type="h6" className="md:mb-4">
          Today's Transactions
        </Heading>
        <Table columns="grid-cols-[3rem_1fr_1fr_1fr_3rem]">
          <Table.Header>
            <div>Sl</div>
            <div>Type</div>
            <div>Category</div>
            <div>amount</div>
            <div>action</div>
          </Table.Header>
          <Table.Body
            data={paginatedTransactions}
            render={(transaction, index) => (
              <TransactionRow
                number={index + 1}
                item={transaction}
                key={transaction.id}
                isDashboard={true}
              >
                {transaction.public ? (
                  <TableAction>
                    <TableActionButton
                      icon={<Pencil />}
                      label="edit"
                      onClick={() => handleOpenModal("edit", transaction)}
                    />
                    <TableActionButton
                      icon={<Trash2 />}
                      label="delete"
                      onClick={() => handleOpenModal("delete", transaction.id)}
                    />
                  </TableAction>
                ) : (
                  <ActionDisabled />
                )}
              </TransactionRow>
            )}
          ></Table.Body>
        </Table>
      </div>

      <MobileTransactionTable>
        {paginatedTransactions.map((transaction, index) => (
          <MobileTableBox
            title={transaction.type === "income" ? "source" : "category"}
            item={transaction}
            number={index + 1}
            key={transaction.id}
            isDashboard={true}
          >
            {transaction.public ? (
              <TableAction>
                <TableActionButton
                  icon={<Pencil />}
                  label="edit"
                  onClick={() => handleOpenModal("edit", transaction)}
                />
                <TableActionButton
                  icon={<Trash2 />}
                  label="delete"
                  onClick={() => handleOpenModal("delete", transaction.id)}
                />
              </TableAction>
            ) : (
              <ActionDisabled />
            )}
          </MobileTableBox>
        ))}
      </MobileTransactionTable>

      <Pagination currentPage={currentPage} count={transactions.length} />

      {modalType === "delete" && (
        <ActionButtons
          isOpen={isOpen}
          onClose={handleCloseModal}
          onCancel={handleCloseModal}
          onConfirm={handleDeleteTransaction}
          isLoading={isDeleting}
          confirmText="Delete"
          loadingText="Deleting..."
          type="danger"
          message={`Are you sure you want to delete this transaction?`}
        />
      )}

      {modalType === "edit" && (
        <CreateTransactionForm
          isOpen={isOpen}
          onClose={handleCloseModal}
          transactionToUpdate={chosenTransaction}
        />
      )}
    </>
  );
}

export default DailyTransactionsTable;
