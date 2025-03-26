import { LucideLogOut } from "lucide-react";

import Button from "../../ui/buttons/Button";

function Logout() {
  return (
    <Button
      type="secondary"
      className="w-full justify-start text-lg"
      onClick={() => {}}
    >
      <LucideLogOut className="size-6" />
      <span>logout</span>
    </Button>
  );
}

export default Logout;
