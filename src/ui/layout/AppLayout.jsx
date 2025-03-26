import { Outlet } from "react-router";

import Sidebar from "../navigation/Sidebar";
import MobileNav from "../navigation/MobileNav";
import Header from "../navigation/Header";
import Overlay from "../common/Overlay";

function AppLayout() {
  return (
    <div className="mt-20 mb-30 md:mt-24 lg:mt-30 lg:ml-70">
      <Header />
      <Sidebar />
      <MobileNav />
      <main className="mx-auto max-w-306 space-y-6 px-4 sm:px-8 md:space-y-8 lg:px-12">
        <Outlet />
      </main>
      <Overlay />
    </div>
  );
}

export default AppLayout;
