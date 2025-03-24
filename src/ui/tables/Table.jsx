import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ items }) {
  if (!items?.length) return null;

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <div
          role="table"
          className="min-w-140 bg-white text-xs capitalize sm:min-w-180 sm:text-sm dark:bg-slate-800"
        >
          <TableHeader />
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
