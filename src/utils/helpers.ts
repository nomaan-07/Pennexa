import { format, isAfter, parseISO, subDays } from "date-fns";
import { PAGE_SIZE } from "./constants";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return format(date, "MMMM d, yyyy");
}

export function formatPrice(price: number) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function formatNumber(number: number) {
  return String(number).padStart(2, "0");
}

interface DataItem {
  date: string;
  amount: string;
}

export function getLastDaysData<T extends DataItem>(data: T[], days: number) {
  const startDate = subDays(new Date(), days);
  return data.filter((item) => isAfter(parseISO(item.date), startDate));
}

export function filterAndSortData<T extends DataItem>(
  data: T[],
  filterValue: string,
  sortValue: string,
) {
  const filteredData =
    filterValue === "all" ? data : getLastDaysData(data, Number(filterValue));

  if (!sortValue) return filteredData;

  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedData = filteredData.sort((a, b) => {
    if (field === "date") {
      return (
        (new Date(a.date).getTime() - new Date(b.date).getTime()) * modifier
      );
    }
    if (field === "amount") {
      return (Number(a.amount) - Number(b.amount)) * modifier;
    }
    return 0;
  });

  return sortedData;
}

export function paginatedData<T extends DataItem>(data: T[], page: number) {
  const startIndex = PAGE_SIZE * (page - 1);

  return data.slice(startIndex, startIndex + PAGE_SIZE);
}
