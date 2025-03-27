import { Ban } from "lucide-react";

function ActionDisabled() {
  // TODO: add toast
  function handleClick() {
    console.log("action disabled");
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
