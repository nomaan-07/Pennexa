function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="xs:text-base xs:max-w-122 max-h-screen min-w-60 space-y-4 pb-4 text-xs select-none sm:space-y-8 md:w-150 md:max-w-150"
    >
      {children}
    </form>
  );
}

export default Form;
