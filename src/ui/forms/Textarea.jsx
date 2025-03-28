function Textarea({ id, value, register, field, validation }) {
  return (
    <textarea
      id={id}
      value={value}
      {...register(field, validation)}
      className="min-h-24 w-full resize-none rounded-xl border border-slate-300 px-4 py-2 outline-none dark:border-slate-600"
    ></textarea>
  );
}

export default Textarea;
