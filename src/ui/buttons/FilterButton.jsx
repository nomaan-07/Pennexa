const baseStyles = "px-3 xl:px-4 py-2 rounded-full";

const styles = {
  active: "bg-emerald-500 text-white",
  inActive:
    "transition-colors cursor-pointer hover:bg-emerald-50 hover:text-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-inherit",
};

function FilterButton({ option, onClick, currentFilter }) {
  const { value, label } = option;
  const isActive = currentFilter === value;

  const className = isActive
    ? `${baseStyles} ${styles.active}`
    : `${baseStyles} ${styles.inActive}`;

  return (
    <button
      key={value}
      onClick={() => onClick(value)}
      className={className}
      disabled={isActive}
    >
      {label}
    </button>
  );
}

export default FilterButton;
