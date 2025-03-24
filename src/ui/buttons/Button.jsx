function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mx-auto flex w-64 items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 font-medium text-white capitalize"
    >
      {children}
    </button>
  );
}

export default Button;
