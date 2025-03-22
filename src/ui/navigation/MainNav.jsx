import {
  LucideFolderTree,
  LucideLayoutDashboard,
  LucideTrendingDown,
  LucideTrendingUp,
  LucideUserCog,
} from "lucide-react";

import NavItem from "./NavItem";

const iconStyles = "size-6";
const items = [
  {
    name: "dashboard",
    icon: <LucideLayoutDashboard className={iconStyles} />,
    path: "/",
  },
  {
    name: "expenses",
    icon: <LucideTrendingDown className={iconStyles} />,
    path: "/expenses",
  },
  {
    name: "income",
    icon: <LucideTrendingUp className={iconStyles} />,
    path: "/income",
  },
  {
    name: "groups",
    icon: <LucideFolderTree className={iconStyles} />,
    path: "/groups",
  },
  {
    name: "account",
    icon: <LucideUserCog className={iconStyles} />,
    path: "/account",
  },
];

function MainNav() {
  return (
    <div className="grow space-y-5">
      {items.map((item) => (
        <NavItem
          name={item.name}
          icon={item.icon}
          path={item.path}
          key={item.name}
        />
      ))}
    </div>
  );
}

export default MainNav;
