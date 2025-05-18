import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import Heading from "../../ui/layout/Heading";

import { useDarkMode } from "../../hooks/useDarkMode";
import { formatPrice } from "../../utils/helpers";
import { Transaction, TransactionType } from "../../utils/types";
import { ReactNode } from "react";

type IsExpense = boolean;

type Data = Transaction[];

interface AggregatedDataItem {
  category: string;
  value: number;
}

const getColor = (isExpense: IsExpense, index: number) => {
  const expenseColors = [
    "#8b5cf6",
    "#84cc16",
    "#f97316",
    "#06b6d4",
    "#f43f5e",
  ] as const;
  const itemsColors = [
    "#ec4899",
    "#14b8a6",
    "#f59e0b",
    "#10b981",
    "#d946ef",
  ] as const;
  return (isExpense ? expenseColors[index] : itemsColors[index]) || "#94a3b8";
};

function prepareChartData(data: Data, isExpense: IsExpense) {
  const formattedData = data.map((transaction) => ({
    category: transaction.category.name,
    amount: transaction.amount,
  }));

  const aggregatedData = formattedData.reduce<AggregatedDataItem[]>(
    (acc, cur) => {
      const existingCategory = acc.find(
        (item) => item.category === cur.category,
      );
      if (existingCategory) {
        existingCategory.value += cur.amount;
      } else {
        acc.push({ category: cur.category, value: cur.amount });
      }
      return acc;
    },
    [],
  );

  aggregatedData.sort((a, b) => b.value - a.value);

  const topCategories = aggregatedData.slice(0, 5);
  const otherCategories = aggregatedData.slice(5);
  const otherTotal = otherCategories.reduce((sum, item) => sum + item.value, 0);

  if (otherTotal > 0) {
    topCategories.push({ category: "Other", value: otherTotal });
  }

  return topCategories.map((item, index) => ({
    ...item,
    color: getColor(isExpense, index),
  }));
}

interface BreakDownChartProps {
  type: TransactionType;
  data: Data;
}

function BreakDownChart({ type, data }: BreakDownChartProps) {
  const { isDarkMode } = useDarkMode();

  const isExpense = type === "expense";

  const chartData = prepareChartData(data, isExpense);

  return (
    <div className="rounded-xl bg-white p-4 capitalize dark:bg-slate-800">
      <Heading type="h6" className="font-medium sm:text-lg">
        {isExpense ? "expense categories" : "income sources"}
      </Heading>
      <div className="h-74 w-full select-none sm:h-78">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              nameKey="category"
              dataKey="value"
              innerRadius={70}
              outerRadius={96}
              paddingAngle={3}
            >
              {chartData.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.category}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#334155" : "#f8fafc",
                borderRadius: "10rem",
                border: isDarkMode ? "1px solid #64748b" : "1px solid #e2e8f0",
                fontSize: "14px",
              }}
              itemStyle={{
                color: isDarkMode ? "#e5e7eb" : "#374151",
              }}
              formatter={(value: number): ReactNode => (
                <span>{formatPrice(value)}</span>
              )}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: "20px" }}
              iconSize={10}
              iconType="circle"
              formatter={(value) => (
                <span className="text-xs sm:text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BreakDownChart;
