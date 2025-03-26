import { mobileItems } from "../../data/navItems";
import MobileNavItem from "./MobileNavItem";

function MobileNav() {
  return (
    <div className="xs:h-18 fixed right-2 bottom-2 left-2 z-60 flex h-16 items-center justify-between rounded-full bg-white p-4 shadow lg:hidden dark:bg-slate-800 dark:shadow-slate-700">
      {mobileItems.map((item) => (
        <MobileNavItem
          name={item.name}
          icon={item.icon}
          path={item.path}
          key={item.name}
        />
      ))}
    </div>
  );
}

export default MobileNav;
