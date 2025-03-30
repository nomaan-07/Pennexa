function Heading({ children, className = "", type = "h3" }) {
  if (type === "h3")
    return (
      <h3 className={`text-lg font-medium sm:text-xl ${className}`}>
        {children}
      </h3>
    );

  if (type === "h6")
    return (
      <h6 className={`font-medium sm:text-lg ${className}`}>{children}</h6>
    );
}

export default Heading;
