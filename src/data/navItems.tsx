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
    path: "/dashboard",
  },
  {
    name: "expenses",
    icon: <LucideTrendingDown className={iconStyles} />,
    path: "/expenses",
  },
  {
    name: "incomes",
    icon: <LucideTrendingUp className={iconStyles} />,
    path: "/incomes",
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
] as const;

export const mobileItems = [
  "groups",
  "expenses",
  "dashboard",
  "incomes",
  "account",
].map(
  (name) => items.find((item) => item.name === name) as (typeof items)[number],
);
