const styles =
  "block min-h-10 w-full rounded-full border border-slate-300 px-4 py-2 outline-none dark:border-slate-600";

function Input({
  type,
  disabled,
  register,
  field,
  id,
  validation,
  placeholder,
}) {
  if (disabled)
    return (
      <input
        type={type}
        disabled={disabled}
        className={styles}
        placeholder={placeholder}
      />
    );
  return (
    <input
      type={type}
      id={id}
      disabled={disabled}
      {...register(field, validation)}
      className={styles}
    />
  );
}

export default Input;
