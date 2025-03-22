import Logo from "./Logo";
import UserProfile from "./UserProfile";
import MainNav from "./MainNav";
import Logout from "../../features/authentication/Logout";

function Sidebar() {
  return (
    // -let-70
    <div className="fixed top-0 bottom-0 flex w-70 flex-col justify-between gap-y-12 overflow-y-auto bg-white p-8 lg:left-0 dark:bg-slate-800">
      <Logo />
      <UserProfile />
      <MainNav />
      <Logout />
    </div>
  );
}

export default Sidebar;
