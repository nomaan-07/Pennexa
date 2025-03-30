import Card from "../../ui/card/Card";

const getNetBalanceStyles = (balance) => ({
  icon:
    balance > 0
      ? "LucideTrendingUp"
      : balance === 0
        ? "LucideMinus"
        : "LucideTrendingDown",
  iconColor:
    balance > 0
      ? "text-teal-500 dark:text-teal-300"
      : balance === 0
        ? "text-slate-500 dark:text-slate-300"
        : "text-pink-500 dark:text-pink-300",
  iconBgColor:
    balance > 0
      ? "bg-teal-100 dark:bg-teal-900"
      : balance === 0
        ? "bg-slate-100 dark:bg-slate-700"
        : "bg-pink-100 dark:bg-pink-900",
});

function SummaryCards({ incomes, expenses }) {
  const totalIncomes = incomes.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const netBalance = totalIncomes - totalExpenses;

  const totalCategories = new Set(
    [...incomes, ...expenses].map((item) => item.category.name),
  ).size;

  const { icon, iconColor, iconBgColor } = getNetBalanceStyles(netBalance);

  return (
    <div className="xs:gap-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <Card
        icon="LucideArrowUpCircle"
        iconColor="text-emerald-500 dark:text-emerald-300"
        iconBgColor="bg-emerald-100 dark:bg-emerald-900"
        value={totalIncomes}
        title="total incomes"
      />
      <Card
        icon="LucideArrowDownCircle"
        iconColor="text-rose-500 dark:text-rose-300"
        iconBgColor="bg-rose-100 dark:bg-rose-900"
        value={totalExpenses}
        title="total expenses"
      />
      <Card
        icon={icon}
        iconColor={iconColor}
        iconBgColor={iconBgColor}
        value={netBalance}
        title="net balance"
      />
      <Card
        icon="LucideLayers"
        iconColor="text-indigo-500 dark:text-indigo-300"
        iconBgColor="bg-indigo-100 dark:bg-indigo-900"
        value={totalCategories}
        title="total categories"
        formatNumber={false}
      />
    </div>
  );
}

export default SummaryCards;
