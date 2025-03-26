import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

import Button from "../buttons/Button";
import Buttons from "../buttons/Buttons";

function Pagination() {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-xl bg-white px-6 py-4 text-sm sm:flex-row sm:items-center dark:bg-slate-800">
      <div>
        Showing <span className="font-medium">1</span> to{" "}
        <span className="font-medium">10</span> of{" "}
        <span className="font-medium">25</span> results
      </div>

      <Buttons>
        <Button type="pagination">
          <LucideChevronLeft className="size-5 sm:size-6" />
          <span>Previous</span>
        </Button>
        <Button type="pagination">
          <span>Next</span>
          <LucideChevronRight className="size-5 sm:size-6" />
        </Button>
      </Buttons>
    </div>
  );
}

export default Pagination;
