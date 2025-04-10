const baseClasses =
  "md:cursor-pointer items-center justify-center rounded-full py-2.5 font-medium capitalize transition-colors select-none flex";

const typeClasses = {
  primary:
    "bg-emerald-500 text-white md:hover:bg-emerald-600 dark:md:hover:bg-emerald-400 gap-4 mx-auto px-4",
  secondary:
    "bg-slate-200 text-slate-700 md:hover:text-slate-900 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:text-slate-300 md:hover:bg-slate-300 dark:md:hover:bg-slate-600 gap-4 px-4",
  pagination:
    "bg-slate-200 text-slate-700 md:hover:text-slate-900 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:text-slate-300 md:hover:bg-slate-200 dark:md:hover:bg-slate-700 md:bg-inherit dark:md:bg-inherit gap-1 sm:gap-2 px-3 sm:px-4",
  danger:
    "bg-rose-500 text-white dark:bg-rose-700 md:hover:bg-rose-600 dark:md:hover:bg-rose-600 gap-4 px-4",
  logout:
    "hidden w-full items-center justify-start gap-4 rounded-full bg-slate-200 px-4 py-2.5 text-lg font-medium text-slate-700 md:cursor-pointer md:hover:bg-slate-300 md:hover:text-slate-900 lg:flex dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600 dark:md:hover:text-slate-300 transition-colors",
};

function Button({ children, type = "primary", onClick, disabled }) {
  const styles =
    type === "logout"
      ? `${typeClasses[type]}`
      : `${baseClasses} ${typeClasses[type]} ${disabled ? "opacity-50" : ""}`;

  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
