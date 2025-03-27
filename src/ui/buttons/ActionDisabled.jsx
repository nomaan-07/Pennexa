import { Ban } from "lucide-react";
import { useToast } from "../../hooks/useToast";

function ActionDisabled({
  message = "Data mutation in this item is enabled, try another one.",
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
