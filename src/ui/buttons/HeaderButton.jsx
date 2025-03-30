function HeaderButton({ children, onClick }) {
  return (
    <button
      className="hidden cursor-pointer rounded-full bg-slate-200 p-3 text-slate-500 transition-colors *:size-6 hover:bg-slate-300 hover:text-slate-700 lg:block dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 dark:hover:text-slate-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default HeaderButton;
