import { expenses } from "../../data/data-expenses";
import Pagination from "../../ui/tables/Pagination";
import Table from "../../ui/tables/Table";
import TableOperations from "../../ui/tables/TableOperations";

function ExpensesTable() {
  return (
    <>
      <TableOperations />
      <Table items={expenses} type="expenses" />
      <Pagination />
    </>
  );
}

export default ExpensesTable;
