import Table from "./Table";
import Badge from "../common/Badge";

import { formatDate, formatNumber, formatPrice } from "../../utils/helpers";

function TransactionRow({ number, item, children, isDashboard }) {
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
