import { Trash2 } from "lucide-react";

function GroupTableDeleteButton({ onClick }) {
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
