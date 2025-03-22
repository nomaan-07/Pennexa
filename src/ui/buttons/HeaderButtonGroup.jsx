import DarkModeToggle from "./DarkModeToggle";
import HeaderAddButton from "./HeaderAddButton";

function HeaderButtonGroup() {
  return (
    <div className="flex gap-4">
      <HeaderAddButton />
      <DarkModeToggle />
    </div>
  );
}

export default HeaderButtonGroup;
