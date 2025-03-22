function Logo({ type }) {
  const isHeader = type === "header";

  const iconStyles = isHeader ? "w-6 md:w-9" : "w-9";
  const textStyles = isHeader
    ? "w-28 translate-y-1 md:w-40 md:translate-y-1.5"
    : "w-40 translate-y-1.5";

  return (
    <div className="flex items-center gap-2">
      <img src="/logo-icon.png" alt="logo-icon" className={iconStyles} />
      <img src="/logo-text.png" alt="logo-text" className={textStyles} />
    </div>
  );
}

export default Logo;
