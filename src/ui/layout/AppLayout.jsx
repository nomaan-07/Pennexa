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
      <main className="md:ml-70">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
