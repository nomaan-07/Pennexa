import { Outlet } from "react-router";

import Sidebar from "../navigation/Sidebar";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <div className="ml-70 h-1000">
        <header></header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
