import { useContext } from "react";
import { MobileFilterContext } from "../context/MobileFilterContext";

export function useMobileFilter() {
  const context = useContext(MobileFilterContext);
  if (context === undefined)
    throw new Error(
      "MobileFilterContext was used outside of MobileFilterProvider",
    );
  return context;
}
