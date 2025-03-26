function Logo({ type, className = "" }) {
  const inHeader = type === "header";

  const iconStyles = inHeader ? "w-6 lg:w-9" : "w-9";
  const textStyles = inHeader
    ? "w-28 translate-y-1 lg:w-40 lg:translate-y-1.5"
    : "w-40 translate-y-1.5";

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img src="/logo-icon.png" alt="logo-icon" className={iconStyles} />
      <img src="/logo-text.png" alt="logo-text" className={textStyles} />
    </div>
  );
}

export default Logo;
