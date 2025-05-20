import { ReactNode } from "react";
import { NavLink } from "react-router";

interface NavItemProps {
  name: string;
  icon: ReactNode;
  path: string;
}

function NavItem({ name, icon, path }: NavItemProps) {
  return (
    <NavLink
      to={path}
      className="nav-link flex items-center gap-4 rounded-full px-4 py-2.5 text-lg font-medium capitalize transition-colors select-none md:hover:bg-emerald-50 md:hover:text-emerald-500 dark:md:hover:bg-emerald-500/10 dark:md:hover:text-inherit"
    >
      {icon}
      <span>{name}</span>
    </NavLink>
  );
}

export default NavItem;
