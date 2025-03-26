import Icon from "./Icon";

function Badge({ name, className, icon, iconStyles }) {
  return (
    <div
      className={`flex w-fit items-center gap-2 rounded-full px-2 py-1 sm:gap-3 dark:brightness-90 ${className}`}
    >
      <Icon name={icon} className={iconStyles} />
      <span>{name}</span>
    </div>
  );
}

export default Badge;
