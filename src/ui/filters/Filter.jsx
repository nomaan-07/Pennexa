import { useQueryParam } from "../../hooks/useQueryParam";
import { filterField, filterOptions } from "../../data/filter-options";

import FilterButton from "../buttons/FilterButton";

function Filter() {
  const { currentFilter, setQuery } = useQueryParam(filterField, filterOptions);

  return (
    <div className="hidden space-x-1 overflow-hidden rounded-full bg-white p-1 text-sm select-none lg:block dark:bg-slate-800">
      {filterOptions.map((option) => (
        <FilterButton
          option={option}
          currentFilter={currentFilter}
          onClick={setQuery}
          key={option.value}
        />
      ))}
    </div>
  );
}

export default Filter;
