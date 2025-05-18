import Icon from "../common/Icon";
import { ClickHandler } from "../../utils/types";

interface MobileFilterButtonProps {
  iconName: "Filter" | "ArrowUpDown";
  fieldName: "filter" | "sort";
  onClick: ClickHandler;
}

function MobileFilterButton({
  iconName,
  fieldName,
  onClick,
}: MobileFilterButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-full bg-white p-3 text-sm lg:hidden dark:bg-slate-800"
    >
      <Icon name={iconName} className={"*:size-4.5"} />
      <span className="capitalize">{fieldName}</span>
    </div>
  );
}

export default MobileFilterButton;
