import Icon from "../common/Icon";
import TableAction from "./TableAction";

function GroupTableRow({ number, item }) {
  return (
    <div
      role="row"
      className="grid grid-cols-[1rem_1fr_2rem_2rem_2.5rem] gap-6 px-6 py-3 even:bg-slate-50 sm:grid-cols-[1rem_1fr_2rem_2.5rem_3rem] sm:py-3 dark:even:bg-slate-700"
    >
      <div>{number}</div>
      <div>{item.name}</div>
      <div className="sm:mx-auto">
        <Icon name={item.icon} className="*:size-4.5 sm:*:size-5" />
      </div>
      <div className="mx-auto">
        <div
          className={`size-5 rounded-full sm:size-6 ${item.bgColor600}`}
        ></div>
      </div>
      <TableAction />
    </div>
  );
}

export default GroupTableRow;
