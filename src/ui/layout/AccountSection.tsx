import { ReactNode } from "react";
import Heading from "./Heading";

interface AccountSectionProps {
  title: string;
  children: ReactNode;
}

function AccountSection({ title, children }: AccountSectionProps) {
  return (
    <div className="space-y-2 sm:space-y-4">
      <Heading>{title}</Heading>
      {children}
    </div>
  );
}

export default AccountSection;
