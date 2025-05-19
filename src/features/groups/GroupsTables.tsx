import AddGroup from "../../ui/buttons/AddGroup";
import Spinner from "../../ui/common/Spinner";
import Heading from "../../ui/layout/Heading";
import GroupTable from "./GroupTable";

import { useGroups } from "./useGroups";

function GroupsTables() {
  const { isGroupsLoading, groups } = useGroups();

  if (isGroupsLoading || !groups) return <Spinner />;

  const sortedGroups = [...groups].sort((a, b) => {
    const aValue = a.public ? 1 : 0;
    const bValue = b.public ? 1 : 0;
    return bValue - aValue;
  });

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
          <Heading>Expense categories</Heading>
          <GroupTable groups={expenseGroups} type="expense" />
        </div>
        <div className="space-y-2 sm:space-y-4 xl:w-1/2">
          <Heading>Income Sources</Heading>
          <GroupTable groups={incomeGroups} type="income" />
        </div>
      </div>
    </>
  );
}

export default GroupsTables;
