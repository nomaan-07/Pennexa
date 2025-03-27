import AddGroup from "../../ui/buttons/AddGroup";
import Spinner from "../../ui/common/Spinner";
import GroupTable from "./GroupTable";

import { useGroups } from "./useGroups";

function GroupsTables() {
  const { isGroupsLoading, groups } = useGroups();

  if (isGroupsLoading) return <Spinner />;

  const sortedGroups = [...groups].sort((a, b) => b.public - a.public);
  const expenseGroups = sortedGroups.filter(
    (group) => group.type === "expense",
  );
  const incomeGroups = sortedGroups.filter((group) => group.type === "income");

  return (
    <>
      <AddGroup
        incomeCount={incomeGroups.length}
        expenseCount={expenseGroups.length}
      />

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
