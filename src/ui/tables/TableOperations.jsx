import Filter from "../filters/Filter";
import MobileTableOperation from "./MobileTableOperation";
import SortBy from "../filters/SortBy";
import Row from "../layout/Row";
import FilterHeading from "./FIlterHeading";
import {
  filterField,
  filterOptions,
  sortField,
  sortOptions,
} from "../../data/filter-options";

function TableOperations() {
  return (
    <Row>
      <Filter />
      <SortBy />
      <MobileTableOperation
        field={filterField}
        options={filterOptions}
        icon="Filter"
      />
      <MobileTableOperation
        field={sortField}
        options={sortOptions}
        icon="ArrowUpDown"
      />
    </Row>
  );
}

export default TableOperations;
