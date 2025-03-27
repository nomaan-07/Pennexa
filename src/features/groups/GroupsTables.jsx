import { expenseGroups, incomeGroups } from "../../data/data-groups";
import GroupTable from "./GroupTable";

function GroupsTables() {
  return (
    <>
      <div className="flex flex-col gap-x-8 gap-y-6 xl:flex-row">
        <div className="space-y-2 sm:space-y-4 xl:w-1/2">
          <h3 className="text-lg font-medium sm:text-xl">Expense categories</h3>
          <GroupTable data={expenseGroups} type="expense" />
        </div>
        <div className="space-y-2 sm:space-y-4 xl:w-1/2">
          <h3 className="text-lg font-medium sm:text-xl">Income Sources</h3>
          <GroupTable data={incomeGroups} type="income" />
        </div>
      </div>
    </>
  );
}

export default GroupsTables;
