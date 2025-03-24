import { LucideMoreVertical } from "lucide-react";
import { formatDate, formatPrice } from "../../utils/helpers";
import { Icon } from "../Icon";

function TableRow({ number, item }) {
  const { icon, amount, date, category, source, textColor, bgColor } = item;

  return (
    <div className="grid grid-cols-[1rem_1fr_0.6fr_0.9fr_2.5rem] gap-6 px-6 py-4 even:bg-slate-50 sm:grid-cols-[3rem_1fr_0.7fr_0.8fr_3rem] sm:py-6 dark:even:bg-slate-700">
      <div>{String(number).padStart(2, "0")}</div>
      <div
        className={`flex w-fit items-center gap-3 rounded-full px-2 py-1 ${bgColor} text-slate-700 dark:brightness-90`}
      >
        <Icon name={icon} className={`*:size-3.5 sm:*:size-4 ${textColor}`} />
        <span>{category || source}</span>
      </div>
      <div>{formatPrice(amount)}</div>
      <div>{formatDate(date)}</div>
      <div>
        <LucideMoreVertical
          className="mx-auto size-4 transition-colors md:cursor-pointer md:hover:text-emerald-500"
          role="button"
          aria-label="More options"
        />
      </div>
    </div>
  );
}

export default TableRow;
