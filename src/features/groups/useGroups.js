import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../services/apiGroups";

export function useGroups() {
  const {
    isLoading: isGroupsLoading,
    data: groups,
    error,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });

  return { isGroupsLoading, groups, error };
}
