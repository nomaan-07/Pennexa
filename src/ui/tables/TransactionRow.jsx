import Table from "./Table";
import Badge from "../common/Badge";

import { formatDate, formatNumber, formatPrice } from "../../utils/helpers";

function TransactionRow({ number, item, children }) {
  const {
    amount,
    date,
    category: { name, icon, textColor, bgColor100 },
  } = item;

  return (
    <Table.Row>
      <div>{formatNumber(number)}</div>
      <Badge
        name={name}
        icon={icon}
        iconStyles="*:size-4"
        className={`${textColor} ${bgColor100}`}
      />
      <div>{formatPrice(amount)}</div>
      <div>{formatDate(date)}</div>
      {children}
    </Table.Row>
  );
}

export default TransactionRow;
