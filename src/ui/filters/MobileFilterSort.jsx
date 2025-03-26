import { ArrowUpDown, Filter } from "lucide-react";

function MobileFilterSort({ fieldName, children }) {
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
