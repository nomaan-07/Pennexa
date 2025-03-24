import Pagination from "../../ui/tables/Pagination";
import Table from "../../ui/tables/Table";
import TableOperations from "../../ui/tables/TableOperations";

import { expenses } from "../../data/data-expenses";

function ExpensesTable() {
  return (
    <>
      <TableOperations />
      <Table items={expenses} />
      <Pagination />
    </>
  );
}

export default ExpensesTable;
