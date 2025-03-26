function MobileTransactionTable({ children }) {
  return (
    <div className="grid gap-4 text-xs min-[504px]:grid-cols-2 sm:text-sm">
      {children}
    </div>
  );
}

export default MobileTransactionTable;
