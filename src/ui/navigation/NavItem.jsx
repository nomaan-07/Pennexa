import { NavLink } from "react-router";

const baseStyles =
  "flex items-center gap-4 rounded-lg px-4 py-2.5 text-lg font-medium transition-colors";

const types = {
  link: "nav-link md:hover:bg-emerald-50 md:hover:text-emerald-500 dark:md:hover:bg-emerald-500/10 dark:md:hover:text-inherit",

  logout:
    "w-full bg-slate-200 md:cursor-pointer md:hover:bg-slate-300 dark:bg-slate-700 dark:md:hover:bg-slate-600",
};

function NavItem({ name, icon, path, type = "link", onClick }) {
  const classname = `${types[type]} ${baseStyles}`;

  if (type === "logout")
    return (
      <button onClick={onClick} className={classname}>
        <span>{icon}</span>
        <span>{name}</span>
      </button>
    );

  return (
    <NavLink to={path} className={classname}>
      <span>{icon}</span>
      <span>{name}</span>
    </NavLink>
  );
}

export default NavItem;
