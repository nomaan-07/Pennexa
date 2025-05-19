import FilterButton from "../buttons/FilterButton";

import { useQueryParam } from "../../hooks/useQueryParam";
import { filterField, filterOptions } from "../../data/filter-options";
import { FilterValue } from "../../utils/types";

function Filter() {
  const { setQueryParams, getCurrentQueryParam } = useQueryParam();
  const currentFilter = getCurrentQueryParam(
    filterField,
    filterOptions,
  ) as FilterValue;

  function handleClick(value: FilterValue) {
    setQueryParams({ [filterField]: value, page: "1" });
  }

  return (
    <div className="hidden space-x-1 overflow-hidden rounded-full bg-white p-1 text-sm select-none lg:block dark:bg-slate-800">
      {filterOptions.map((option) => (
        <FilterButton
          option={option}
          currentFilter={currentFilter}
          onClick={() => handleClick(option.value)}
          key={option.value}
        />
      ))}
    </div>
  );
}

export default Filter;
