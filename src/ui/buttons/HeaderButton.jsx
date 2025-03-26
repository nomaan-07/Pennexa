function HeaderButton({ children, onClick }) {
  return (
    <button
      className="rounded-full bg-slate-200 p-3 text-slate-500 transition-colors *:size-5 md:cursor-pointer md:hover:bg-slate-300 md:hover:text-slate-700 *:lg:size-6 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600 dark:md:hover:text-slate-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default HeaderButton;
