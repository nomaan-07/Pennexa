import { ReactNode } from "react";

interface FormChipsProps {
  children: ReactNode;
}

function FormChips({ children }: FormChipsProps) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
}

export default FormChips;
