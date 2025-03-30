import AddTransaction from "./AddTransaction";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../../features/authentication/Logout";
import TopSheet from "../common/TopSheet";

import { Menu } from "lucide-react";
import { useModal } from "../../hooks/uesModal";

function HeaderButtonGroup() {
  const { openModal, closeModal, isOpen } = useModal();

  return (
    <>
      <div className="hidden gap-3 lg:flex">
        <AddTransaction />
        <DarkModeToggle />
      </div>
      <Menu className="size-7 lg:hidden" onClick={openModal} />
      <TopSheet isOpen={isOpen} onClose={closeModal} closeButtonLocation="left">
        <div className="flex flex-col items-end gap-6 bg-white lg:hidden dark:bg-slate-800">
          <AddTransaction />
          <DarkModeToggle />
          <Logout />
        </div>
      </TopSheet>
    </>
  );
}

export default HeaderButtonGroup;
