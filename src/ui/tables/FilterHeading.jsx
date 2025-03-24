import { filterField, filterOptions } from "../../data/filter-options";
import { useQueryParam } from "../../hooks/useQueryParam";

function FilterHeading() {
  const { currentFilter } = useQueryParam(filterField, filterOptions);

  const text =
    currentFilter === "all" ? currentFilter : `last ${currentFilter} days`;
  return <h2 className="font-medium capitalize lg:hidden">{text}</h2>;
}

export default FilterHeading;
