import { Option, SortValue } from "../../utils/types";

interface SortButtonProps {
  option: Option<SortValue>;
  onClick: (value: SortValue) => void;
  currentSort: SortValue;
}

function SortButton({ option, onClick, currentSort }: SortButtonProps) {
  const { value, label } = option;
  const isActive = currentSort === value;

  if (isActive) return null;

  return (
    <button
      onClick={() => onClick(value)}
      className="h-12 w-full cursor-pointer transition-colors hover:bg-emerald-50 hover:text-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-inherit"
    >
      {label}
    </button>
  );
}

export default SortButton;
