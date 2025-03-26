import GroupTableRow from "./GroupTableRow";
import TableHeader from "./TableHeader";

function GroupsTable({ type, items }) {
  return (
    <div className="overflow-x-hidden">
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <div
          role="table"
          className="min-w-103 bg-white text-xs capitalize sm:text-sm dark:bg-slate-800"
        >
          <TableHeader page="groups" type={type} />
          {items.map((item, index) => (
            <GroupTableRow item={item} key={item.name} number={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroupsTable;
