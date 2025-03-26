import Table from "./Table";
import Badge from "../common/Badge";

import { formatDate, formatNumber, formatPrice } from "../../utils/helpers";

function TransactionRow({ number, item, children }) {
  const { icon, amount, date, category, textColor, bgColor } = item;

  return (
    <Table.Row>
      <div>{formatNumber(number)}</div>
      <Badge
        name={category}
        icon={icon}
        iconStyles="*:size-4"
        bgColor={bgColor}
        textColor={textColor}
      />
      <div>{formatPrice(amount)}</div>
      <div>{formatDate(date)}</div>
      {children}
    </Table.Row>
  );
}

export default TransactionRow;
