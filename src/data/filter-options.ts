import { FilterValue, SortValue } from "../utils/types";

interface Option<T extends string> {
  value: T;
  label: string;
}

export const filterOptions: Option<FilterValue>[] = [
  { value: "all", label: "All" },
  { value: "7", label: "Last 7 days" },
  { value: "30", label: "Last 30 days" },
  { value: "90", label: "Last 90 days" },
];

export const sortOptions: Option<SortValue>[] = [
  { value: "date-desc", label: "Sort by date (new first)" },
  { value: "date-asc", label: "Sort by date (old first)" },
  {
    value: "amount-desc",
    label: "Sort by amount (high first)",
  },
  { value: "amount-asc", label: "Sort by amount (low first)" },
];

export const sortField = "sortBy";

export const filterField = "last";
