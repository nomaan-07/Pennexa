import Filter from "../filters/Filter";
import MobileFilterModal from "../filters/MobileFilterModal";
import SortBy from "../filters/SortBy";
import Row from "../layout/Row";
import FilterHeading from "./FIlterHeading";

function TableOperations() {
  return (
    <Row>
      <Filter />
      <SortBy />
      <FilterHeading />
      <MobileFilterModal />
    </Row>
  );
}

export default TableOperations;
