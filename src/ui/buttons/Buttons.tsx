import { ReactNode } from "react";

type ButtonsType = "default" | "pagination" | "account";

const baseStyles = "flex items-center gap-4";

const types: Record<ButtonsType, string> = {
  default: "justify-center",
  pagination: "justify-between sm:justify-center",
  account: "xs:justify-end flex justify-center",
};

interface ButtonsProps {
  children: ReactNode;
  type?: ButtonsType;
}

function Buttons({ children, type = "default" }: ButtonsProps) {
  const styles = `${baseStyles} ${types[type]}`;

  return (
    <div className={styles}>
      {type === "account" ? (
        <div className={baseStyles}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}

export default Buttons;
