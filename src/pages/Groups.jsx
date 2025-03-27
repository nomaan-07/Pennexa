import { Plus } from "lucide-react";
import GroupsTables from "../features/groups/GroupsTables";
import Button from "../ui/buttons/Button";
import AddGroup from "../ui/buttons/AddGroup";

function Groups() {
  return (
    <>
      <AddGroup />
      <GroupsTables />
    </>
  );
}

export default Groups;
