import {
  LucideFolderTree,
  LucideLayoutDashboard,
  LucideTrendingDown,
  LucideTrendingUp,
  LucideUserCog,
} from "lucide-react";

const iconStyles = "size-6";

export const items = [
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

export const mobileItems = [
  "groups",
  "expenses",
  "dashboard",
  "income",
  "account",
].map((name) => items.find((item) => item.name === name));
