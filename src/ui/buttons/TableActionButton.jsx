const baseStyles =
  "*:size-4 w-full flex items-center gap-2 px-2 py-3 md:py-2 text-xs text-slate-500 dark:text-slate-300 transition-colors md:cursor-pointer";

const types = {
  primary: "md:hover:bg-emerald-100 dark:md:hover:bg-emerald-500/20 ",
  delete: "md:hover:bg-rose-100 dark:md:hover:bg-rose-500/20 ",
};

function TableActionButton({ icon, label, onClick }) {
  const styles = `${baseStyles} ${label === "delete" ? types.delete : types.primary}`;

  return (
    <button className={styles} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default TableActionButton;
