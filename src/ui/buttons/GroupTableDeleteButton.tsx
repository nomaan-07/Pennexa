import { Trash2 } from "lucide-react";
import { ClickHandler } from "../../utils/types";

interface GroupTableDeleteButtonProps {
  onClick: ClickHandler;
}

function GroupTableDeleteButton({ onClick }: GroupTableDeleteButtonProps) {
  return (
    <div className="mx-auto">
      <Trash2
        className="size-4.5 transition-colors md:cursor-pointer md:hover:text-rose-600"
        onClick={onClick}
      />
    </div>
  );
}

export default GroupTableDeleteButton;
