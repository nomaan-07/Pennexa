const baseStyles =
  "xs:text-base space-y-4 rounded-2xl text-xs select-none sm:space-y-8 bg-white dark:bg-slate-800";

const types = {
  modal: "xs:max-w-122 max-h-screen min-w-60 xs:min-w-86 md:w-150 md:max-w-150",
  regular: "p-4",
  auth: "w-70 xs:w-75 p-4",
};

function Form({ children, onSubmit, type = "modal" }) {
  const className = `${baseStyles} ${types[type]}`;
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

export default Form;
