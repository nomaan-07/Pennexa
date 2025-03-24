import { useMobileFilter } from "../../hooks/useMobileFilter";
import Button from "../buttons/button";
import MobileFilterSort from "./MobileFilterSort";

import {
  filterField,
  filterOptions,
  sortField,
  sortOptions,
} from "../../data/filter-options";

const baseStyles =
  "fixed right-0 left-0 z-70 space-y-8 rounded-t-2xl bg-white px-4 py-6 transition-all sm:px-8 lg:hidden dark:bg-slate-800";

const types = {
  open: "visible bottom-0 opacity-100",
  close: "invisible -bottom-20 opacity-0",
};

function MobileFilterMenu() {
  const { isModalOpen, toggleFilterModal } = useMobileFilter();

  const className = isModalOpen
    ? `${baseStyles} ${types.open}`
    : `${baseStyles} ${types.close}`;

  return (
    <div className={className}>
      <MobileFilterSort field={filterField} options={filterOptions} />
      <MobileFilterSort field={sortField} options={sortOptions} />
      <Button onClick={toggleFilterModal} className="w-64">
        Apply
      </Button>
    </div>
  );
}

export default MobileFilterMenu;
