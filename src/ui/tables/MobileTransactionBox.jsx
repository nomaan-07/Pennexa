import Badge from "../common/Badge";
import Row from "../layout/Row";

import { formatDate, formatNumber, formatPrice } from "../../utils/helpers";

function MobileTransactionBox({ children, title, item, number }) {
  return (
    <div
      className="space-y-4 rounded-xl bg-white p-4 capitalize md:hidden dark:bg-slate-800"
      key={item.id}
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-b-slate-700">
        <div className="grow">{formatNumber(number)}</div>
        {children}
      </div>
      <div className="space-y-4">
        <Row>
          <div>{title}</div>
          <Badge
            name={item.category}
            bgColor={item.bgColor}
            textColor={item.textColor}
            icon={item.icon}
            iconStyles="*:size-4"
          />
        </Row>
        <Row>
          <span>amount</span>
          <span>{formatPrice(item.amount)}</span>
        </Row>
        <Row>
          <span>date</span>
          <span>{formatDate(item.date)}</span>
        </Row>
      </div>
    </div>
  );
}

export default MobileTransactionBox;
