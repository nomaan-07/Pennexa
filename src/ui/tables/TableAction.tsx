import { useState } from "react";
import { LucideMoreVertical } from "lucide-react";

import { useClickOutside } from "../../hooks/useClickOutside";

function TableAction({ children }) {
  const [isActionOpen, setIsActionOpen] = useState(false);

  const dropDownRef = useClickOutside(() => setIsActionOpen(false));

  const toggleAction = () => setIsActionOpen((prev) => !prev);
  return (
    <div
      ref={dropDownRef}
      role="button"
      aria-label="More options"
      onClick={toggleAction}
      className={`relative mx-auto flex size-7 items-center justify-center rounded-lg transition-colors md:cursor-pointer md:hover:bg-slate-200 dark:hover:bg-slate-600 ${isActionOpen ? "bg-slate-200 dark:bg-slate-600" : ""}`}
    >
      <LucideMoreVertical className="size-4" />
      {isActionOpen && (
        <div className="absolute -top-2 right-9 z-10 w-26 overflow-hidden rounded-lg bg-white shadow md:-top-4.5 dark:bg-slate-800 dark:shadow-slate-700">
          {children}
        </div>
      )}
    </div>
  );
}

export default TableAction;
