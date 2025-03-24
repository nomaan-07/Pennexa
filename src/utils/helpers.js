export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatPrice(price) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
