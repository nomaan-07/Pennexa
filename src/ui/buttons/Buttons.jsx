function Buttons({ children }) {
  return (
    <div className="xs:justify-end flex justify-center">
      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
}

export default Buttons;
