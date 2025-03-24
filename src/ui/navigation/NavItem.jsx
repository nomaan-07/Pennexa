import { NavLink } from "react-router";

const baseStyles =
  "flex items-center gap-4 rounded-full px-4 py-2.5 text-lg font-medium transition-colors capitalize select-none";

const types = {
  link: "nav-link md:hover:bg-emerald-50 md:hover:text-emerald-500 dark:md:hover:bg-emerald-500/10 dark:md:hover:text-inherit",

  logout:
    "w-full bg-slate-200 text-slate-700 md:cursor-pointer md:hover:bg-slate-300 md:hover:text-slate-900 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600 dark:md:hover:text-slate-300",
};

function NavItem({ name, icon, path, type = "link", onClick }) {
  const classname = `${types[type]} ${baseStyles}`;

  if (type === "logout")
    return (
      <button onClick={onClick} className={classname}>
        {icon}
        <span>{name}</span>
      </button>
    );

  return (
    <NavLink to={path} className={classname}>
      {icon}
      <span>{name}</span>
    </NavLink>
  );
}

export default NavItem;
