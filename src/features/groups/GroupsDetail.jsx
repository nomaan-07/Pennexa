import { Plus } from "lucide-react";
import { expenseGroups, incomeGroups } from "../../data/data-groups";
import Button from "../../ui/buttons/button";
import GroupsTable from "../../ui/tables/GroupsTable";
import AddGroupForm from "./AddGroupForm";

function GroupsDetail() {
  return (
    <>
      <Button type="secondary">
        <span>Add new</span>
        <Plus />
      </Button>
      <div className="flex flex-col gap-x-8 gap-y-6 xl:flex-row">
        <div className="space-y-2 sm:space-y-4 xl:w-1/2">
          <h3 className="text-lg font-medium sm:text-xl">Expense categories</h3>
          <GroupsTable type="expenses" items={expenseGroups} />
        </div>
        <div className="space-y-2 sm:space-y-4 xl:w-1/2">
          <h3 className="text-lg font-medium sm:text-xl">Income Sources</h3>
          <GroupsTable type="incomes" items={incomeGroups} />
        </div>
      </div>
      <AddGroupForm />
    </>
  );
}

export default GroupsDetail;
