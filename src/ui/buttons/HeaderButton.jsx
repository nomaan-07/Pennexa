import { NavLink } from "react-router";

const styles = "rounded-full p-3 *:size-5";

const types = {
  header:
    "header__add-btn bg-slate-200 text-slate-500 transition-colors lg:cursor-pointer *:lg:size-6 lg:hover:bg-slate-300 lg:hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:lg:hover:bg-slate-600 dark:lg:hover:text-slate-300",
  filter: "bg-white lg:hidden dark:bg-slate-800",
};

function HeaderButton({ children, to, type = "header", onClick }) {
  const className = `${styles} ${types[type]}`;

  if (to)
    return (
      <NavLink className={className} to={to}>
        {children}
      </NavLink>
    );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default HeaderButton;
