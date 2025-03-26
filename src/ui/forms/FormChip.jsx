import Badge from "../common/Badge";

function FormChip({
  watch,
  activeClasses,
  name,
  register,
  iconName,
  field,
  validation,
}) {
  return (
    <label htmlFor={name}>
      <Badge
        name={name}
        className={
          watch(field) === name
            ? activeClasses
            : "bg-slate-100 text-slate-500 transition-colors md:cursor-pointer md:hover:bg-slate-200 md:hover:text-slate-900 dark:bg-slate-700 dark:text-slate-300 dark:md:hover:bg-slate-600 dark:md:hover:text-slate-200"
        }
        iconStyles="*:size-4"
        icon={iconName}
      />
      <input
        type="radio"
        id={name}
        value={name}
        className="hidden"
        {...register(field, validation)}
      />
    </label>
  );
}

export default FormChip;
