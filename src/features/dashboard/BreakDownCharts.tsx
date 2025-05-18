import { Transaction } from "../../utils/types";
import BreakDownChart from "./BreakDownChart";

interface BreakDownChartsProps {
  incomes: Transaction[];
  expenses: Transaction[];
}
function BreakDownCharts({ incomes, expenses }: BreakDownChartsProps) {
  return (
    <div className="xs:gap-6 grid gap-4 md:grid-cols-2">
      <BreakDownChart type="income" data={incomes} />
      <BreakDownChart type="expense" data={expenses} />
    </div>
  );
}

export default BreakDownCharts;
