import { createContext, ReactNode, useContext } from "react";

const TableContext = createContext({ columns: "" });

type TableType = "transaction" | "group";

interface TableProps {
  columns: string;
  children: ReactNode;
  type?: TableType;
}

interface HeaderProps {
  children: ReactNode;
}

interface BodyProps<T extends { id: number; public?: boolean }> {
  data: T[];
  render: (item: T, index: number) => ReactNode;
}

interface RowProps {
  children: ReactNode;
}

function Table({ columns, children, type = "transaction" }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className={`hidden overflow-hidden rounded-xl bg-white text-sm capitalize md:block dark:bg-slate-800 ${type === "transaction" ? "min-w-162" : ""}`}
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: HeaderProps) {
  const { columns } = useContext(TableContext);

  return (
    <header
      role="row"
      className={`grid gap-6 border-b-2 border-b-slate-100 px-6 py-4 font-medium text-slate-500 select-none dark:border-b-slate-700 dark:text-slate-200 ${columns}`}
    >
      {children}
    </header>
  );
}

function Body<T extends { id: number; public?: boolean | undefined }>({
  data,
  render,
}: BodyProps<T>) {
  if (!data.length)
    return <p className="p-4 text-center">There is no data to be shown</p>;
  return <section role="rowgroup">{data.map(render)}</section>;
}

function Row({ children }: RowProps) {
  const { columns } = useContext(TableContext);

  return (
    <div
      role="row"
      className={`grid gap-6 px-6 py-4 *:flex *:items-center even:bg-slate-50 sm:py-6 dark:even:bg-slate-700 ${columns}`}
    >
      {children}
    </div>
  );
}
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
