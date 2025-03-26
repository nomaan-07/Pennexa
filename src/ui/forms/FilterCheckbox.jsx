function FilterCheckbox({ option, value, onChange }) {
  const { value: optionValue, label } = option;
  const isChecked = value === optionValue;

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name={optionValue}
        id={optionValue}
        className="size-3.5 appearance-none rounded-full border-1 border-slate-400 transition-all checked:border-emerald-500 checked:bg-emerald-500 checked:ring-1 checked:ring-emerald-300 focus:outline-none"
        checked={isChecked}
        onChange={() => onChange(optionValue)}
      />
      <label htmlFor={optionValue} className="w-50">
        {label}
      </label>
    </div>
  );
}

export default FilterCheckbox;
