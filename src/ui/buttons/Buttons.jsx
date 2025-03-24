function Buttons({ children }) {
  return (
    <div className="flex items-center justify-between gap-4 sm:justify-center">
      {children}
    </div>
  );
}

export default Buttons;
