import { HTMLInputTypeAttribute } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

const styles =
  "block min-h-10 w-full rounded-full border border-slate-300 px-4 py-2 outline-none dark:border-slate-600";

interface InputProps<T extends FieldValues = FieldValues> {
  type: HTMLInputTypeAttribute;
  disabled?: boolean;
  register?: UseFormRegister<T>;
  field?: string;
  id?: string;
  validation?: RegisterOptions<T>;
  placeholder?: string;
}

function Input({
  type,
  disabled = false,
  register,
  field,
  id,
  validation,
  placeholder,
}: InputProps) {
  if (disabled)
    return (
      <input
        type={type}
        disabled={disabled}
        className={styles}
        placeholder={placeholder}
      />
    );

  if (register && field) {
    return (
      <input
        type={type}
        id={id}
        {...register(field, validation)}
        className={styles}
      />
    );
  }

  return null;
}

export default Input;
