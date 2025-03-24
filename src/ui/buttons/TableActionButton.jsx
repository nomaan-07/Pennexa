import { Link } from "react-router";

const styles =
  "*:size-4 w-full flex items-center gap-2 p-2 text-xs text-slate-500 dark:text-slate-300 transition-colors md:cursor-pointer";

const types = {
  edit: "hover:bg-emerald-100 dark:hover:bg-emerald-500/20 ",
  delete: "hover:bg-rose-100 dark:hover:bg-rose-500/20 ",
};
function TableActionButton({ children, onClick, type = "edit" }) {
  return (
    <button className={`${styles} ${types[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default TableActionButton;
