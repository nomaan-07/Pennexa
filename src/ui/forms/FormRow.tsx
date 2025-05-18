import { Children, isValidElement, ReactNode } from "react";

type FormRowType = "primary" | "grid" | "gridItem";

const types: Record<FormRowType, string> = {
  primary: "space-y-2 sm:space-y-4",
  grid: "grid sm:grid-cols-2 gap-2 sm:gap-4",
  gridItem: `w-full space-y-2 sm:space-y-4`,
};

interface FormRowProps {
  type?: FormRowType;
  label?: string;
  error?: string;
  children: ReactNode;
}

function FormRow({ type = "primary", label, error, children }: FormRowProps) {
  let id: string | undefined;

  Children.toArray(children).find((child) => {
    if (isValidElement<{ id?: string }>(child)) {
      id = child.props.id;
      return Boolean(id);
    }
    return false;
  });

  return (
    <div className={types[type]}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-rose-500 sm:text-sm">{error}</p>}
    </div>
  );
}

export default FormRow;
