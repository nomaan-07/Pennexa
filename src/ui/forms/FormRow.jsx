const types = {
  primary: "space-y-2 sm:space-y-4",
  grid: "grid xs:grid-cols-2 gap-2 sm:gap-4",
  gridItem: `w-full space-y-2 sm:space-y-4`,
};

function FormRow({ type = "primary", label, error, children }) {
  return (
    <div className={types[type]}>
      {label && (
        <label className="block" htmlFor={children?.props?.id}>
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-rose-500 sm:text-sm">{error}</p>}
    </div>
  );
}

export default FormRow;
