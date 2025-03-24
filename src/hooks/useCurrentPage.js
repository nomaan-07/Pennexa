import { useLocation } from "react-router";

export function useCurrentPage() {
  const { pathname } = useLocation();
  const currentPage = pathname.replace("/", "").replace("-", " ");

  if (currentPage.includes("/")) return currentPage.split("/")[0];
  return currentPage;
}
