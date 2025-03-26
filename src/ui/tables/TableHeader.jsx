const baseStyles =
  "grid gap-6 border-b-2 border-b-slate-100 px-6 py-4 font-medium text-slate-500 select-none dark:border-b-slate-700 dark:text-slate-200";

const variations = {
  primary:
    "grid-cols-[1rem_1fr_0.6fr_0.9fr_2.5rem] sm:grid-cols-[3rem_1fr_0.7fr_0.8fr_3rem]",
  secondary:
    "grid-cols-[1rem_1fr_2rem_2rem_2.5rem] sm:grid-cols-[1rem_1fr_2rem_2.5rem_3rem]",
};

function TableHeader({ type, page }) {
  const isGroupPage = page === "groups";
  const className = `${baseStyles} ${isGroupPage ? variations.secondary : variations.primary}`;

  const groupTitle = type === "expenses" ? "category" : "source";

  return (
    <div className={className} role="rowgroup">
      <div>Sl</div>
      <div>{groupTitle}</div>
      {!isGroupPage ? (
        <>
          <div>amount</div>
          <div>date</div>
        </>
      ) : (
        <>
          <div>icon</div>
          <div>color</div>
        </>
      )}
      <div>action</div>
    </div>
  );
}

export default TableHeader;
