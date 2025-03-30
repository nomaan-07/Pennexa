import Icon from "../common/Icon";
import { formatPrice } from "../../utils/helpers";

function Card({
  icon,
  iconColor,
  iconBgColor,
  value,
  title,
  formatNumber = true,
}) {
  return (
    <div className="xs:gap-4 flex items-center gap-3 rounded-xl bg-white p-4 capitalize dark:bg-slate-800">
      <Icon
        name={icon}
        className={`flex size-10 shrink-0 items-center justify-center rounded-full *:size-6 sm:size-12 sm:*:size-7 md:size-14 md:*:size-8 ${iconColor} ${iconBgColor}`}
      />
      <div>
        <p className="xs:text-lg xs:mb-1 font-semibold sm:text-xl md:text-2xl">
          {formatNumber ? formatPrice(value) : value}
        </p>
        <h6 className="xs:text-sm text-xs text-slate-700 md:text-base dark:text-slate-200">
          {title}
        </h6>
      </div>
    </div>
  );
}

export default Card;
