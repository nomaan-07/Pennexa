import { ReactNode } from "react";

interface RowProps {
  children: ReactNode;
  className?: string;
}

function Row({ children, className = "" }: RowProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}

export default Row;
