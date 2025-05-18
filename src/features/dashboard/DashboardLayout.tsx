import Spinner from "../../ui/common/Spinner";
import DailyTransactionsTable from "./DailyTransactionsTable";
import BreakDownCharts from "./BreakDownCharts";
import SummaryCards from "./SummaryCards";
import TrendsChart from "./TrendsChart";

import { filterField } from "../../data/filter-options";
import { useQueryParam } from "../../hooks/useQueryParam";
import { filterAndSortData } from "../../utils/helpers";
import { useTransactions } from "../transaction/useTransactions";
import { FilterValue } from "../../utils/types";

function DashboardLayout() {
  const { transactions, isLoading } = useTransactions();
  const { getQueryParam } = useQueryParam();

  if (isLoading || !transactions) return <Spinner />;

  const filterParam = getQueryParam(filterField, "all") as FilterValue;

  const filteredTransactions = filterAndSortData(transactions, filterParam);

  const todaysTransactions = filterAndSortData(transactions, "1");

  const incomeTransaction = filteredTransactions.filter(
    (transaction) => transaction.type === "income",
  );
  const expenseTransaction = filteredTransactions.filter(
    (transaction) => transaction.type === "expense",
  );

  return (
    <>
      <SummaryCards incomes={incomeTransaction} expenses={expenseTransaction} />
      <BreakDownCharts
        incomes={incomeTransaction}
        expenses={expenseTransaction}
      />
      <TrendsChart
        incomes={incomeTransaction}
        expenses={expenseTransaction}
        days={filterParam}
      />
      <DailyTransactionsTable transactions={todaysTransactions} />
    </>
  );
}

export default DashboardLayout;
