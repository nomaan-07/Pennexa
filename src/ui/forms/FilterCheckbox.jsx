function FilterCheckbox({ option, currentFilter, onChange }) {
  const { value, label } = option;
  const isChecked = currentFilter === value;

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name={value}
        id={value}
        className="size-3.5 appearance-none rounded-full border-1 border-slate-400 transition-all checked:border-emerald-500 checked:bg-emerald-500 checked:ring-1 checked:ring-emerald-300 focus:outline-none"
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      <label htmlFor={value} className="w-50">
        {label}
      </label>
    </div>
  );
}

export default FilterCheckbox;
