import Icon from "../common/Icon";
import Table from "./Table";

import { formatNumber } from "../../utils/helpers";
import { Group } from "../../utils/types";
import { ReactNode } from "react";

interface GroupTableRowProps {
  number: number;
  group: Group;
  children: ReactNode;
}

function GroupTableRow({ number, group, children }: GroupTableRowProps) {
  console.log(group);
  const {
    name,
    colors: { bgColor600 },
    icon,
  } = group;

  return (
    <Table.Row>
      <div>{formatNumber(number)}</div>
      <div>{name}</div>
      <div>
        <Icon name={icon} className="*:size-4.5 sm:*:size-5" />
      </div>
      <div
        className={`mx-auto size-5 rounded-full sm:size-6 ${bgColor600}`}
      ></div>
      {children}
    </Table.Row>
  );
}

export default GroupTableRow;
