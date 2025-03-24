import { LucideFileWarning } from "lucide-react";
import icons from "../data/icons";

function Icon({ name, className }) {
  const foundIcon = icons.find((icon) => icon.name === name);

  return (
    <span className={className}>
      {foundIcon?.icon || <LucideFileWarning />}
    </span>
  );
}

export default Icon;
