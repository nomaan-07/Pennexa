import AddTransaction from "./AddTransaction";
import DarkModeToggle from "./DarkModeToggle";

function HeaderButtonGroup() {
  return (
    <div className="flex gap-2 lg:gap-3">
      <AddTransaction />
      <DarkModeToggle />
    </div>
  );
}

export default HeaderButtonGroup;
