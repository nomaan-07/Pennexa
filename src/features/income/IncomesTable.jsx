import { useNavigate } from "react-router";
import { Eye, Trash2 } from "lucide-react";

import Pagination from "../../ui/tables/Pagination";
import Table from "../../ui/tables/Table";
import TransactionRow from "../../ui/tables/TransactionRow";
import TableAction from "../../ui/tables/TableAction";
import TableActionButton from "../../ui/buttons/TableActionButton";
import MobileTransactionBox from "../../ui/tables/MobileTransactionBox";
import Modal from "../../ui/common/Modal";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";
import MobileTransactionTable from "../../ui/tables/MobileTransactionTable";

import { useModal } from "../../hooks/uesModal";
import { incomes } from "../../data/data-income";

function IncomesTable() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

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
                  icon={<Eye />}
                  label="view"
                  onClick={() => navigate(`/incomes/${income.id}`)}
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
        {incomes.map((item, index) => (
          <MobileTransactionBox
            title="source"
            item={item}
            number={index + 1}
            key={item.id}
          >
            <TableAction>
              <TableActionButton
                icon={<Eye />}
                label="view"
                onClick={() => navigate(`/incomes/${item.id}`)}
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

export default IncomesTable;
