import { items } from "../../data/navItems";
import NavItem from "./NavItem";

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
