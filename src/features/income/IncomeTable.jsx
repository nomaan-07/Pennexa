import Pagination from "../../ui/tables/Pagination";
import Table from "../../ui/tables/Table";
import TableOperations from "../../ui/tables/TableOperations";

import { incomes } from "../../data/data-income";

function IncomeTable() {
  return (
    <>
      <TableOperations />
      <Table items={incomes} />
      <Pagination />
    </>
  );
}

export default IncomeTable;
