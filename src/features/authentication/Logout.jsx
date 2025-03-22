import { LucideLogOut } from "lucide-react";

import NavItem from "../../ui/navigation/NavItem";

function Logout() {
  return (
    <NavItem
      name="logout"
      icon={<LucideLogOut className="size-6" />}
      type="logout"
      onClick={() => {}}
    />
  );
}

export default Logout;
