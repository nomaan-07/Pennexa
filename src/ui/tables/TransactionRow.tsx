import Table from "./Table";
import Badge from "../common/Badge";

import { formatDate, formatNumber, formatPrice } from "../../utils/helpers";
import { ReactNode } from "react";

type ItemCategory = "name" | "icon" | "textColor" | "bgColor100";
type TransActionType = "income" | "expense";

type Item = {
  amount: number;
  date: string;
  type: TransActionType;
  category: Record<ItemCategory, string>;
};
interface TransactionRowProps {
  number: number;
  item: Item;
  children: ReactNode;
  isDashboard?: boolean;
}

function TransactionRow({
  number,
  item,
  children,
  isDashboard = false,
}: TransactionRowProps) {
  const {
    amount,
    date,
    type,
    category: { name, icon, textColor, bgColor100 },
  } = item;

  return (
    <Table.Row>
      <div>{formatNumber(number)}</div>
      {isDashboard && (
        <Badge
          name={type}
          icon={type === "income" ? "LucideTrendingUp" : "LucideTrendingDown"}
          iconStyles="*:size-4"
          className={type === "income" ? "text-emerald-500" : "text-rose-500"}
        />
      )}

      <Badge
        name={name}
        icon={icon}
        iconStyles="*:size-4"
        className={`${textColor} ${bgColor100}`}
      />
      <div>{formatPrice(amount)}</div>
      {!isDashboard && <div>{formatDate(date)}</div>}
      {children}
    </Table.Row>
  );
}

export default TransactionRow;
