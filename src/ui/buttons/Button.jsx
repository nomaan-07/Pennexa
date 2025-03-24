const baseStyles =
  "md:cursor-pointer flex items-center justify-center rounded-full py-2.5 font-medium capitalize transition-colors select-none";

const types = {
  primary:
    "bg-emerald-500 text-white md:hover:bg-emerald-600 dark:md:hover:bg-emerald-400 gap-4 mx-auto px-4",
  secondary:
    "bg-slate-200 text-slate-700 md:hover:bg-slate-300 md:hover:text-slate-900 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600 dark:md:hover:text-slate-300 gap-4 px-4",
  pagination:
    "bg-slate-200 text-slate-700 dark:md:hover:bg-slate-700 md:text-inherit md:bg-inherit dark:md:hover:text-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:md:text-inherit dark:md:bg-inherit md:hover:bg-slate-200 md:hover:text-slate-900 gap-1 sm:gap-2 px-3 sm:px-4",
};

function Button({ children, type = "primary", onClick, className = "" }) {
  const styles = `${baseStyles} ${types[type]} ${className}`;
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

export default Button;
