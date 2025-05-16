import { ReactNode } from "react";

type HeadingType = "h3" | "h6";

const types: Record<HeadingType, string> = {
  h3: "text-lg font-medium sm:text-xl",
  h6: "font-medium sm:text-lg",
};

interface HeadingProps {
  children: ReactNode;
  className?: string;
  type?: HeadingType;
}

function Heading({ children, className = "", type = "h3" }: HeadingProps) {
  const styles = `${types[type]} ${className}`;

  switch (type) {
    case "h3":
      return <h3 className={styles}>{children}</h3>;
    case "h6":
      return <h6 className={styles}>{children}</h6>;
    default:
      return <h3 className={styles}>{children}</h3>;
  }
}

export default Heading;
