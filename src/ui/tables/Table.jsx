import TableRow from "./TableRow";

function Table({ items, type }) {
  const isExpensesTable = type === "expenses";

  if (!items?.length) return null;

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <div
          role="table"
          className="min-w-140 bg-white text-xs capitalize sm:min-w-180 sm:text-sm dark:bg-slate-800"
        >
          <div className="grid grid-cols-[1rem_1fr_0.6fr_0.9fr_2.5rem] gap-6 border-b-2 border-b-slate-100 px-6 py-4 font-medium text-slate-500 select-none sm:grid-cols-[3rem_1fr_0.7fr_0.8fr_3rem] dark:border-b-slate-700 dark:text-slate-200">
            <div>Sl</div>
            <div>{isExpensesTable ? "Category" : "Source"}</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Action</div>
          </div>
          <div>
            {items.map((item, i) => (
              <TableRow key={item.id} number={i + 1} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
