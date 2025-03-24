function SortButton({ option, onClick, currentSort }) {
  const { value, label } = option;
  const isActive = currentSort === value;

  if (isActive) return null;

  return (
    <button
      onClick={() => onClick(value)}
      disabled={isActive}
      className="h-12 w-full cursor-pointer transition-colors hover:bg-emerald-50 hover:text-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-inherit"
    >
      {label}
    </button>
  );
}

export default SortButton;
