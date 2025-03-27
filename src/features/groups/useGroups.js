import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../services/apiGroups";
import { useToast } from "../../hooks/useToast";

export function useGroups() {
  const { showToast } = useToast();

  const {
    isLoading: isGroupsLoading,
    data: groups,
    error,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
    onError: (err) => {
      showToast("failed", "Groups could not be loaded.");
      console.error(err);
    },
  });

  return { isGroupsLoading, groups, error };
}
