import Badge from "../common/Badge";
import Row from "../layout/Row";
import Icon from "../common/Icon";

import { formatDate, formatNumber, formatPrice } from "../../utils/helpers";

function MobileTableBox({
  children,
  title,
  item,
  number,
  variation = "transaction",
  isDashboard,
}) {
  const { amount, date, category, type } = item;

  return (
    <div className="space-y-4 rounded-xl bg-white p-4 capitalize md:hidden dark:bg-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-b-slate-700">
        <div className="grow">{formatNumber(number)}</div>
        {children}
      </div>
      <div className="space-y-4">
        {variation === "transaction" ? (
          <>
            {isDashboard && (
              <Row>
                <span>type</span>
                <Badge
                  name={type}
                  icon={
                    type === "income"
                      ? "LucideTrendingUp"
                      : "LucideTrendingDown"
                  }
                  iconStyles="*:size-4"
                  className={
                    type === "income" ? "text-emerald-500" : "text-rose-500"
                  }
                />
              </Row>
            )}
            <Row>
              <span>{title}</span>
              <Badge
                name={category.name}
                className={`${category.textColor} ${category.bgColor100}`}
                icon={category.icon}
                iconStyles="*:size-4"
              />
            </Row>
            <Row>
              <span>amount</span>
              <span>{formatPrice(amount)}</span>
            </Row>
            {!isDashboard && (
              <Row>
                <span>date</span>
                <span>{formatDate(date)}</span>
              </Row>
            )}
          </>
        ) : (
          <>
            <Row>
              <span>{title}</span>
              <span>{item.name}</span>
            </Row>
            <Row>
              <span>icon</span>
              <span>
                <Icon name={item.icon} className="*:size-4.5 sm:*:size-5" />
              </span>
            </Row>
            <Row>
              <span>{title}</span>
              <span>
                <div
                  className={`size-5 rounded-full ${item.bgColor600 || item.colors.bgColor600}`}
                ></div>
              </span>
            </Row>
          </>
        )}
      </div>
    </div>
  );
}

export default MobileTableBox;
