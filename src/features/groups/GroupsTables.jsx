import GroupTable from "./GroupTable";
import { useGroups } from "./useGroups";

function GroupsTables() {
  const { isGroupsLoading, groups } = useGroups();

  if (isGroupsLoading) return null;

  const expenseGroups = groups.filter((group) => group.type === "expense");
  const incomeGroups = groups.filter((group) => group.type === "income");

  return (
    <>
      <div className="flex flex-col gap-x-8 gap-y-6 xl:flex-row">
        <div className="space-y-2 sm:space-y-4 xl:w-1/2">
          <h3 className="text-lg font-medium sm:text-xl">Expense categories</h3>
          <GroupTable groups={expenseGroups} type="expense" />
        </div>
        <div className="space-y-2 sm:space-y-4 xl:w-1/2">
          <h3 className="text-lg font-medium sm:text-xl">Income Sources</h3>
          <GroupTable groups={incomeGroups} type="income" />
        </div>
      </div>
    </>
  );
}

export default GroupsTables;
