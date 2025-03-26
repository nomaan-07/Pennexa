import Icon from "../common/Icon";

import { formatDate, formatPrice } from "../../utils/helpers";
import Badge from "../common/Badge";

function TableRow({ number, item, children }) {
  const { icon, amount, date, category, source, textColor, bgColor } = item;

  return (
    <div
      role="row"
      className="grid grid-cols-[1rem_1fr_0.6fr_0.9fr_2.5rem] gap-6 px-6 py-4 even:bg-slate-50 sm:grid-cols-[3rem_1fr_0.7fr_0.8fr_3rem] sm:py-6 dark:even:bg-slate-700"
    >
      <div>{String(number).padStart(2, "0")}</div>
      <Badge
        name={category}
        icon={icon}
        iconStyles="*:size-3.5 sm:*:size-4"
        bgColor={bgColor}
        textColor={textColor}
      />

      <div>{formatPrice(amount)}</div>
      <div>{formatDate(date)}</div>
      {children}
    </div>
  );
}

export default TableRow;
