import { ReactNode } from "react";
import { ArrowUpDown, Filter } from "lucide-react";

interface MobileFilterSortProps {
  fieldName: "sort" | "filter";
  children: ReactNode;
}

function MobileFilterSort({ fieldName, children }: MobileFilterSortProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        {fieldName === "sort" ? (
          <ArrowUpDown className="size-5" />
        ) : (
          <Filter className="size-5" />
        )}
        <span className="capitalize">{fieldName}</span>
      </div>

      <div className="mx-3 mt-3 space-y-4 border-t border-t-slate-200 pt-3 text-sm">
        {children}
      </div>
    </div>
  );
}

export default MobileFilterSort;
