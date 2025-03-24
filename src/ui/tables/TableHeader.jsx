import { useCurrentPage } from "../../hooks/useCurrentPage";

function TableHeader() {
  const currentPage = useCurrentPage();

  return (
    <div className="grid grid-cols-[1rem_1fr_0.6fr_0.9fr_2.5rem] gap-6 border-b-2 border-b-slate-100 px-6 py-4 font-medium text-slate-500 select-none sm:grid-cols-[3rem_1fr_0.7fr_0.8fr_3rem] dark:border-b-slate-700 dark:text-slate-200">
      <div>Sl</div>
      <div>{currentPage === "expenses" ? "Category" : "Source"}</div>
      <div>Amount</div>
      <div>Date</div>
      <div>Action</div>
    </div>
  );
}

export default TableHeader;
