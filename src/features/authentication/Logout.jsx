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
      <Button
        type="secondary"
        className="w-full justify-start text-lg"
        onClick={openModal}
      >
        <LucideLogOut className="size-6" />
        <span>logout</span>
      </Button>

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
