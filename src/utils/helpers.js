import { format, isAfter, parseISO, subDays } from "date-fns";
import { PAGE_SIZE } from "./constants";

export function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, "MMMM d, yyyy");
}

export function formatPrice(price) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function formatNumber(number) {
  return String(number).padStart(2, "0");
}

export function getLastDaysData(data, days) {
  const startDate = subDays(new Date(), days);
  return data.filter((item) => isAfter(parseISO(item.date), startDate));
}

export function filterAndSortData(data, filterValue, sortValue) {
  const filteredData =
    filterValue === "all" ? data : getLastDaysData(data, Number(filterValue));

  if (!sortValue) return filteredData;

  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedData = filteredData.sort((a, b) => {
    if (field === "date") {
      return (new Date(a.date) - new Date(b.date)) * modifier;
    }
    if (field === "amount") {
      return (Number(a.amount) - Number(b.amount)) * modifier;
    }
    return 0;
  });

  return sortedData;
}

export function paginatedData(data, page) {
  const startIndex = PAGE_SIZE * (page - 1);

  return data.slice(startIndex, startIndex + PAGE_SIZE);
}
