const types = {
  fullPage: "h-screen",
  section: "h-full",
};

function Spinner({ type = "section" }) {
  return (
    <div
      className={`mx-auto flex w-full items-center justify-center ${types[type]}`}
    >
      <div className="mx-auto size-14 animate-spin rounded-full border-t-4 border-r-4 border-t-emerald-500 border-r-transparent"></div>
    </div>
  );
}

export default Spinner;
