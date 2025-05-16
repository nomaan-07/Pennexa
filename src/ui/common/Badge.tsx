import Icon from "./Icon";

interface BadgeProps {
  name: string;
  className?: string;
  icon: string;
  iconStyles: string;
}

function Badge({ name, className = "", icon, iconStyles }: BadgeProps) {
  return (
    <div
      className={`flex w-fit items-center gap-2 rounded-full px-2 py-1 capitalize sm:gap-3 dark:brightness-90 ${className}`}
    >
      <Icon name={icon} className={iconStyles} />
      <span>{name}</span>
    </div>
  );
}

export default Badge;
