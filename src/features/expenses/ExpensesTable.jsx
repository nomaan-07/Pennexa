import { useNavigate } from "react-router";
import { Eye, Trash2 } from "lucide-react";

import Pagination from "../../ui/tables/Pagination";
import Table from "../../ui/tables/Table";
import TransactionRow from "../../ui/tables/TransactionRow";
import TableAction from "../../ui/tables/TableAction";
import TableActionButton from "../../ui/buttons/TableActionButton";
import MobileTransactionBox from "../../ui/tables/MobileTransactionBox";
import Modal from "../../ui/common/Modal";

import { expenses } from "../../data/data-expenses";
import { useModal } from "../../hooks/uesModal";
import Button from "../../ui/buttons/Button";
import Buttons from "../../ui/buttons/Buttons";
import MobileTransactionTable from "../../ui/tables/MobileTransactionTable";

function ExpensesTable() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

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
                  icon={<Eye />}
                  label="view"
                  onClick={() => navigate(`/expenses/${expense.id}`)}
                />
                <TableActionButton
                  icon={<Trash2 />}
                  label="delete"
                  onClick={openModal}
                />
              </TableAction>
            </TransactionRow>
          )}
        />
      </Table>

      <MobileTransactionTable>
        {expenses.map((item, index) => (
          <MobileTransactionBox
            title="category"
            item={item}
            number={index + 1}
            key={item.id}
          >
            <TableAction>
              <TableActionButton
                icon={<Eye />}
                label="view"
                onClick={() => navigate(`/expenses/${item.id}`)}
              />
              <TableActionButton
                icon={<Trash2 />}
                label="delete"
                onClick={openModal}
              />
            </TableAction>
          </MobileTransactionBox>
        ))}
      </MobileTransactionTable>

      <Pagination />

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Buttons>
          <Button type="danger">Delete</Button>
          <Button type="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </Buttons>
      </Modal>
    </>
  );
}

export default ExpensesTable;
