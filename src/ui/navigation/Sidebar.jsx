import UserProfile from "../../features/authentication/UserProfile";
import Logout from "../../features/authentication/Logout";
import MainNav from "./MainNav";
import Logo from "./Logo";

function Sidebar() {
  return (
    <aside className="fixed top-0 bottom-0 left-0 hidden w-70 flex-col justify-between gap-y-12 overflow-y-auto bg-white p-8 lg:flex dark:bg-slate-800">
      <Logo />
      <UserProfile />
      <MainNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
