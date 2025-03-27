import Icon from "../common/Icon";
import Table from "./Table";
import { formatNumber } from "../../utils/helpers";

function GroupTableRow({ number, item, children }) {
  return (
    <Table.Row>
      <div>{formatNumber(number)}</div>
      <div>{item.name}</div>
      <div>
        <Icon name={item.icon} className="*:size-4.5 sm:*:size-5" />
      </div>
      <div className={`size-5 rounded-full sm:size-6 ${item.bgColor600}`}></div>
      {children}
    </Table.Row>
  );
}

export default GroupTableRow;
