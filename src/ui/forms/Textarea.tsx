import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextareaProps<T extends FieldValues = FieldValues> {
  id?: string;
  register: UseFormRegister<T>;
  field: string;
  validation?: RegisterOptions<T>;
}

function Textarea({ id, register, field, validation }: TextareaProps) {
  return (
    <textarea
      id={id}
      {...register(field, validation)}
      className="min-h-24 w-full resize-none rounded-xl border border-slate-300 px-4 py-2 outline-none dark:border-slate-600"
    ></textarea>
  );
}

export default Textarea;
