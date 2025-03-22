import { NavLink } from "react-router";

const styles =
  "header__add-btn rounded-full bg-slate-100 p-3 text-slate-500 transition-colors *:size-6 md:cursor-pointer *:md:size-7 md:hover:text-emerald-500 dark:bg-slate-700 dark:text-slate-300";

function HeaderButton({ children, to }) {
  if (to)
    return (
      <NavLink className={styles} to={to}>
        {children}
      </NavLink>
    );

  return <button className={styles}>{children}</button>;
}

export default HeaderButton;
