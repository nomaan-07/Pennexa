import Filter from "../filters/Filter";
import MobileTableOperation from "./MobileTableOperation";
import SortBy from "../filters/SortBy";
import Row from "../layout/Row";
import {
  filterField,
  filterOptions,
  sortField,
  sortOptions,
} from "../../data/filter-options";

interface TableOperationsProps {
  isDashboard?: boolean;
}

function TableOperations({ isDashboard = false }: TableOperationsProps) {
  return (
    <Row>
      <Filter />
      <MobileTableOperation
        field={filterField}
        options={filterOptions}
        icon="Filter"
      />
      {!isDashboard && (
        <>
          <SortBy />
          <MobileTableOperation
            field={sortField}
            options={sortOptions}
            icon="ArrowUpDown"
          />
        </>
      )}
    </Row>
  );
}

export default TableOperations;
