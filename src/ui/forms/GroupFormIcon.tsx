import { ReactNode } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type Icon = {
  name: string;
  icon: ReactNode;
};

interface GroupFormIconProps<T extends FieldValues = FieldValues> {
  icon: Icon;
  iconValidation?: RegisterOptions<T>;
  register: UseFormRegister<T>;
  isActive: boolean;
}

function GroupFormIcon<T extends FieldValues = FieldValues>({
  icon,
  iconValidation,
  register,
  isActive,
}: GroupFormIconProps<T>) {
  console.log(icon);
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
        {...register("icon" as Path<T>, iconValidation)}
      />
    </div>
  );
}

export default GroupFormIcon;
