import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface TextareaProps<T extends FieldValues = FieldValues> {
  id?: string;
  register: UseFormRegister<T>;
  field: Path<T>;
  validation?: RegisterOptions<T>;
}

function Textarea<T extends FieldValues = FieldValues>({
  id,
  register,
  field,
  validation,
}: TextareaProps<T>) {
  return (
    <textarea
      id={id}
      {...register(field, validation)}
      className="min-h-24 w-full resize-none rounded-xl border border-slate-300 px-4 py-2 outline-none dark:border-slate-600"
    ></textarea>
  );
}

export default Textarea;
