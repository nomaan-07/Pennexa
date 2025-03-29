export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatPrice(price) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function formatNumber(number) {
  return String(number).padStart(2, "0");
}
