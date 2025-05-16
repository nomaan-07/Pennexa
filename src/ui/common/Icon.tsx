import { LucideFileWarning } from "lucide-react";
import icons from "../../data/icons";

interface IconProps {
  name: string;
  className: string;
}

function Icon({ name, className }: IconProps) {
  const foundIcon = icons.find((icon) => icon.name === name);

  return (
    <span className={className}>
      {foundIcon?.icon || <LucideFileWarning />}
    </span>
  );
}

export default Icon;
