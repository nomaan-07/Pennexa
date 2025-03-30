import { LucideLogOut } from "lucide-react";

import Button from "../../ui/buttons/Button";
import ActionButtons from "../../ui/common/ActionButtons";

import { useLogout } from "./useLogout";
import { useModal } from "../../hooks/uesModal";

function Logout() {
  const { isOpen, closeModal, openModal } = useModal();
  const { logout, isPending } = useLogout();

  return (
    <>
      <Button type="logout" className="" onClick={openModal}>
        <LucideLogOut className="size-6" />
        <span>logout</span>
      </Button>

      <div
        className="relative flex h-11 w-32 items-center justify-between rounded-full border border-slate-300 bg-slate-100 px-2 text-sm text-slate-500 select-none lg:hidden dark:border-slate-500 dark:bg-slate-700 dark:text-slate-300"
        onClick={openModal}
        role="button"
      >
        <span>Logout</span>
        <LucideLogOut className="size-6" strokeWidth={1.5} />
      </div>

      <ActionButtons
        isOpen={isOpen}
        onClose={closeModal}
        onCancel={closeModal}
        onConfirm={logout}
        isLoading={isPending}
        confirmText="Logout"
        loadingText="Logging out..."
        type="danger"
      />
    </>
  );
}

export default Logout;
