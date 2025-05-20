interface LogoProps {
  isHeader?: boolean;
  className?: string;
}

function Logo({ isHeader = false, className = "" }: LogoProps) {
  const iconStyles = isHeader ? "w-6 lg:w-9" : "w-9";

  const textStyles = isHeader
    ? "w-28 translate-y-1 lg:w-40 lg:translate-y-1.5"
    : "w-40 translate-y-1.5";

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}logo-icon.png`}
        alt="logo-icon"
        className={iconStyles}
      />
      <img
        src={`${import.meta.env.BASE_URL}logo-text.png`}
        alt="logo-text"
        className={textStyles}
      />
    </div>
  );
}

export default Logo;
