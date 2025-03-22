import { Outlet } from "react-router";

import Sidebar from "../navigation/Sidebar";
import MobileNav from "../navigation/MobileNav";
import Header from "../navigation/Header";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <Header />
      <main className="h-1000 md:ml-70">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
