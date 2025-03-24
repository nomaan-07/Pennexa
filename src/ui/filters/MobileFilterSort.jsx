import { ArrowUpDown, Filter } from "lucide-react";

import { useQueryParam } from "../../hooks/useQueryParam";
import FilterCheckbox from "../forms/FilterCheckbox";

function MobileFilterSort({ field, options }) {
  const { currentFilter, setQuery } = useQueryParam(field, options);

  const isSort = field === "sortBy";

  return (
    <div>
      <div className="flex items-center gap-4">
        {isSort ? (
          <ArrowUpDown className="size-5" />
        ) : (
          <Filter className="size-5" />
        )}
        <span>{isSort ? "Sort" : "Filter"}</span>
      </div>

      <div className="mx-3 mt-3 space-y-4 border-t border-t-slate-200 pt-3 text-sm">
        {options.map((option) => (
          <FilterCheckbox
            key={option.value}
            option={option}
            onChange={setQuery}
            currentFilter={currentFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileFilterSort;
