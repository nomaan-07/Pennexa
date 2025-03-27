function GroupFormIcon({ icon, iconValidation, register, isActive }) {
  return (
    <div key={icon.name}>
      <label
        htmlFor={icon.name}
        className={`transition-colors *:size-7 ${isActive ? "text-emerald-500" : "text-slate-500 md:cursor-pointer md:hover:text-emerald-500 dark:text-slate-300 dark:md:hover:text-slate-200"}`}
      >
        {icon.icon}
      </label>
      <input
        type="radio"
        id={icon.name}
        value={icon.name}
        className="hidden"
        {...register("icon", iconValidation)}
      />
    </div>
  );
}

export default GroupFormIcon;
