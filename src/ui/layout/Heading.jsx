function Heading({ children, className = "" }) {
  return (
    <h3 className={`text-lg font-medium sm:text-xl ${className}`}>
      {children}
    </h3>
  );
}

export default Heading;
