import { ClickHandler, FilterValue, Option } from "../../utils/types";

const baseStyles = "px-3 xl:px-4 py-2 rounded-full";

const styles = {
  active: "bg-emerald-500 text-white",
  inActive:
    "transition-colors cursor-pointer hover:bg-emerald-50 hover:text-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-inherit",
} as const;

interface FilterButtonProps {
  option: Option<FilterValue>;
  onClick: ClickHandler;
  currentFilter: FilterValue;
}

function FilterButton({ option, onClick, currentFilter }: FilterButtonProps) {
  const { value, label } = option;
  const isActive = currentFilter === value;

  const className = isActive
    ? `${baseStyles} ${styles.active}`
    : `${baseStyles} ${styles.inActive}`;

  return (
    <button
      key={value}
      onClick={onClick}
      className={className}
      disabled={isActive}
    >
      {label}
    </button>
  );
}

export default FilterButton;
