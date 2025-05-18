import { Ban } from "lucide-react";
import { useToast } from "../../hooks/useToast";

interface ActionDisabledProps {
  message?: string;
}
function ActionDisabled({
  message = "Changes are not allowed for this item. Please choose another.",
}: ActionDisabledProps) {
  const { showToast } = useToast();

  function handleClick() {
    showToast("warning", message);
  }

  return (
    <div className="mx-auto">
      <Ban
        aria-label="Action disabled"
        className="size-4.5 text-slate-300 md:cursor-pointer dark:text-slate-600"
        onClick={handleClick}
      />
    </div>
  );
}

export default ActionDisabled;
