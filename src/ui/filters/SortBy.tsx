import { useState } from "react";

import SortButton from "../buttons/SortButton";

import { useQueryParam } from "../../hooks/useQueryParam";
import { useClickOutside } from "../../hooks/useClickOutside";
import { sortField, sortOptions } from "../../data/filter-options";
import { SortValue } from "../../utils/types";

function SortBy() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const { setQueryParams, getCurrentQueryParam } = useQueryParam();

  const currentSort = getCurrentQueryParam(sortField, sortOptions) as SortValue;

  const currentSortLabel = sortOptions.find(
    (option) => option.value === currentSort,
  )!.label;

  const handleClick = (value: SortValue) => {
    setQueryParams({ [sortField]: value, page: "1" });
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div
      ref={dropdownRef}
      className="group relative hidden h-11 w-56 cursor-pointer items-center justify-center px-1 text-sm select-none lg:flex"
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-800"
      >
        {currentSortLabel}
      </div>

      {isOpen && (
        <div className="absolute top-11 z-10 mt-1 w-95/100 overflow-hidden rounded-3xl bg-white shadow dark:bg-slate-800 dark:shadow-slate-700">
          {sortOptions.map((option) => (
            <SortButton
              option={option}
              currentSort={currentSort}
              onClick={handleClick}
              key={option.value}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SortBy;
