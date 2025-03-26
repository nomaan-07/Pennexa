import { NavLink } from "react-router";

const styles = "flex items-center  gap-2 rounded-full p-3 *:size-5";

const types = {
  header:
    "header__add-btn bg-slate-200 text-slate-500 transition-colors md:cursor-pointer *:lg:size-6 md:hover:bg-slate-300 md:hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600 dark:md:hover:text-slate-300",
  filter: "bg-white lg:hidden dark:bg-slate-800",
};

function HeaderButton({ children, type = "header", onClick }) {
  const className = `${styles} ${types[type]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default HeaderButton;
