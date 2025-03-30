import { Ban } from "lucide-react";
import { useToast } from "../../hooks/useToast";

function ActionDisabled({
  message = "Changes are not allowed for this item. Please choose another.",
}) {
  const { showToast } = useToast();

  function handleClick() {
    showToast("warning", message);
  }

  return (
    <div className="mx-auto">
      <Ban
        className="size-4.5 text-slate-300 md:cursor-pointer dark:text-slate-600"
        onClick={handleClick}
      />
    </div>
  );
}

export default ActionDisabled;
