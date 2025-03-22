import { mobileItems } from "../../data/navItems";
import MobileNavItem from "./MobileNavItem";

function MobileNav() {
  return (
    <div className="xs:h-18 fixed right-2 bottom-2 left-2 flex h-16 items-center justify-between rounded-3xl bg-white p-4 md:hidden dark:bg-slate-800">
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
