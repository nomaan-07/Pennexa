import { useLocation } from "react-router";

export function useCurrentPage() {
  const { pathname } = useLocation();
  return pathname.replace("/", "").replace("-", " ");
}
