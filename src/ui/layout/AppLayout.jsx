import { Outlet } from "react-router";

import Sidebar from "../navigation/Sidebar";
import MobileNav from "../navigation/MobileNav";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <div className="md:ml-70">
        <header></header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
