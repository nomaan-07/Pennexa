import { Trash2 } from "lucide-react";

function GroupTableDeleteButton({ onOpen }) {
  return (
    <div className="mx-auto">
      <Trash2
        className="size-4.5 transition-colors md:cursor-pointer md:hover:text-rose-600"
        onClick={onOpen}
      />
    </div>
  );
}

export default GroupTableDeleteButton;
