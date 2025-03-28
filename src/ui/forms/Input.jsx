function Input({ type, disabled, register, field, id, validation }) {
  return (
    <input
      type={type}
      id={id}
      disabled={disabled}
      {...register(field, validation)}
      className="block min-h-10 w-full rounded-full border border-slate-300 px-4 py-2 outline-none dark:border-slate-600"
    />
  );
}

export default Input;
