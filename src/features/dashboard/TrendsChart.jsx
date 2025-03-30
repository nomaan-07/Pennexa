import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Heading from "../../ui/layout/Heading";

import { useDarkMode } from "../../hooks/useDarkMode";
import { formatPrice } from "../../utils/helpers";

function TrendsChart({ incomes, expenses, days }) {
  const { isDarkMode } = useDarkMode();

  const startDate =
    days === "all"
      ? new Date(
          Math.min(
            ...[...incomes, ...expenses].map((item) => new Date(item.date)),
          ),
        )
      : subDays(new Date(), parseInt(days) - 1);

  const endDate = new Date();

  const allDates = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const chartData = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      incomes: incomes
        .filter((transaction) => isSameDay(date, new Date(transaction.date)))
        .reduce((acc, cur) => acc + cur.amount, 0),

      expenses: expenses
        .filter((transaction) => isSameDay(date, new Date(transaction.date)))
        .reduce((acc, cur) => acc + cur.amount, 0),
    };
  });

  return (
    <div className="rounded-xl bg-white p-4 capitalize dark:bg-slate-800">
      <Heading type="h6" className="mb-6">
        {format(allDates.at(0), "MMM dd, yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd, yyyy")}
      </Heading>
      <div className="text-xs">
        <ResponsiveContainer height={300} width="100%">
          <AreaChart data={chartData}>
            <XAxis
              dataKey="label"
              tick={{ fill: isDarkMode ? "#94a3b8" : "#64748b" }}
              tickLine={{ stroke: isDarkMode ? "#94a3b8" : "#64748b" }}
            />
            <YAxis
              unit="$"
              tick={{ fill: isDarkMode ? "#94a3b8" : "#64748b" }}
              tickLine={{ stroke: isDarkMode ? "#94a3b8" : "#64748b" }}
            />
            <CartesianGrid
              strokeDasharray="4"
              stroke={isDarkMode ? "#374151" : "#cbd5e1"}
              strokeWidth={0.5}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#334155" : "#f8fafc",
                borderRadius: "1rem",
                border: isDarkMode ? "1px solid #64748b" : "1px solid #e2e8f0",
                fontSize: "14px",
              }}
              itemStyle={{
                color: isDarkMode ? "#e5e7eb" : "#374151",
              }}
              formatter={(value) => <span>{formatPrice(value)}</span>}
            />
            <Area
              dataKey="incomes"
              type="monotone"
              stroke="#059669"
              fill="#34d399"
              strokeWidth={2}
              name="Incomes"
              unit="$"
            />
            <Area
              dataKey="expenses"
              type="monotone"
              stroke="#e11d48"
              fill="#fb7185"
              strokeWidth={2}
              name="Expenses"
              unit="$"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrendsChart;
