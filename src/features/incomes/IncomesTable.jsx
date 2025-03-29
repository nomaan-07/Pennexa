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

function IncomesTable() {
  const { transactions, isLoading } = useTransactions();
  const [modalType, setModalType] = useState(null);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const { isOpen, openModal, closeModal } = useModal();

  if (isLoading) return <Spinner />;

  const incomes = transactions.filter(
    (transaction) => transaction.type === "income",
  );

  function handleOpenModal(type, transaction) {
    if (transaction) {
      setTransactionToEdit({ ...transaction, transactionType: "edit" });
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
                  onClick={() => handleOpenModal("delete")}
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

export default IncomesTable;
