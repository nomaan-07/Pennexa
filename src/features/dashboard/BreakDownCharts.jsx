import BreakDownChart from "./BreakDownChart";

function BreakDownCharts({ incomes, expenses }) {
  return (
    <div className="xs:gap-6 grid gap-4 md:grid-cols-2">
      <BreakDownChart type="income" data={incomes} />
      <BreakDownChart type="expense" data={expenses} />
    </div>
  );
}

export default BreakDownCharts;
