import { NavLink } from "react-router";

const styles =
  "header__add-btn rounded-full bg-slate-200 p-3 text-slate-500 transition-colors *:size-5 md:cursor-pointer *:md:size-6 md:hover:bg-slate-300 md:hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600 dark:md:hover:text-slate-300";

function HeaderButton({ children, to, onClick }) {
  if (to)
    return (
      <NavLink className={styles} to={to}>
        {children}
      </NavLink>
    );

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default HeaderButton;
