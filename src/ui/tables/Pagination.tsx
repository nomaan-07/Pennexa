import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

import Buttons from "../buttons/Buttons";
import Button from "../buttons/Button";

import { useQueryParam } from "../../hooks/useQueryParam";
import { PAGE_SIZE } from "../../utils/constants";

interface PaginationProps {
  currentPage: number;
  count: number;
}

function Pagination({ currentPage, count }: PaginationProps) {
  const { setQueryParam } = useQueryParam();

  const safeCurrentPage = Math.max(1, Number(currentPage)) || 1;
  const safeCount = Number(count) || 0;

  if (count <= PAGE_SIZE) return null;

  const totalPages = Math.ceil(count / PAGE_SIZE);
  const clampedPage = Math.min(safeCurrentPage, totalPages);

  const isNextDisabled = currentPage === totalPages;
  const isPrevDisabled = currentPage === 1;

  function nextPage() {
    const next = isNextDisabled ? clampedPage : currentPage + 1;
    setQueryParam("page", String(next));
  }

  function prevPage() {
    const prev = isPrevDisabled ? clampedPage : currentPage - 1;
    setQueryParam("page", String(prev));
  }

  return (
    <div className="flex flex-col justify-between gap-6 rounded-xl bg-white px-6 py-4 text-sm sm:flex-row sm:items-center dark:bg-slate-800">
      <div className="text-center">
        Showing{" "}
        <span className="font-medium">{(clampedPage - 1) * PAGE_SIZE + 1}</span>{" "}
        to{" "}
        <span className="font-medium">
          {isNextDisabled ? safeCount : clampedPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-medium">{safeCount}</span> results
      </div>

      <Buttons type="pagination">
        <Button type="pagination" onClick={prevPage} disabled={isPrevDisabled}>
          <LucideChevronLeft className="size-5 sm:size-6" />
          <span>Previous</span>
        </Button>
        <Button type="pagination" onClick={nextPage} disabled={isNextDisabled}>
          <span>Next</span>
          <LucideChevronRight className="size-5 sm:size-6" />
        </Button>
      </Buttons>
    </div>
  );
}

export default Pagination;
