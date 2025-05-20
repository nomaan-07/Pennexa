import AddTransaction from "./AddTransaction";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../../features/authentication/Logout";
import TopSheet from "../common/TopSheet";
import UserProfile from "../../features/authentication/UserProfile";

import { Menu } from "lucide-react";
import { useModal } from "../../hooks/uesModal";

function HeaderMenu() {
  const { openModal, closeModal, isOpen } = useModal();

  return (
    <>
      <div className="hidden gap-3 lg:flex">
        <AddTransaction />
        <DarkModeToggle />
      </div>
      <Menu className="size-7 lg:hidden" onClick={openModal} />
      <TopSheet isOpen={isOpen} onClose={closeModal}>
        <div className="flex flex-col items-end gap-6 bg-white transition-colors lg:hidden dark:bg-slate-800">
          <div className="mx-auto">
            <UserProfile />
          </div>
          <AddTransaction />
          <DarkModeToggle />
          <Logout />
        </div>
      </TopSheet>
    </>
  );
}

export default HeaderMenu;
