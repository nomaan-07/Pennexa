import { GroupColors } from "../../utils/types";

import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface Color extends GroupColors {
  name: string;
}

interface GroupFormColorProps<T extends FieldValues = FieldValues> {
  color: Color;
  colorValidation: RegisterOptions<T>;
  register: UseFormRegister<T>;
  isActive: boolean;
}

function GroupFormColor<T extends FieldValues = FieldValues>({
  color,
  isActive,
  register,
  colorValidation,
}: GroupFormColorProps<T>) {
  return (
    <div
      key={color.name}
      className={`size-8 ${isActive ? "brightness-110" : "p-0.5"} `}
    >
      <label
        htmlFor={color.name}
        className={`block size-full rounded-full md:cursor-pointer ${color.bgColor600}`}
      ></label>
      <input
        type="radio"
        id={color.name}
        value={color.name}
        className="hidden"
        {...register("color" as Path<T>, colorValidation)}
      />
    </div>
  );
}

export default GroupFormColor;
